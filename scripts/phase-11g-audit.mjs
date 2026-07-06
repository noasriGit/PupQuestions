/**
 * Phase 11G pre-launch audit script (run with: node scripts/phase-11g-audit.mjs)
 * Uses dynamic import of compiled TS via tsx if available, otherwise reads registry counts manually.
 */
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Parse articles/index.ts for counts and slugs
const indexPath = join(root, "src/data/articles/index.ts");
const indexContent = readFileSync(indexPath, "utf8");

const importMatches = [...indexContent.matchAll(/from "@\/data\/articles\/[^"]+\/([^"]+)"/g)];
const registryImports = importMatches.map((m) => m[1]);

const articlesArrayMatch = indexContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
const registryEntries = articlesArrayMatch
  ? [...articlesArrayMatch[1].matchAll(/\b(\w+)\b/g)]
      .map((m) => m[1])
      .filter((name) => !["articles", "Article"].includes(name))
  : [];

// Scan article files for status/noindex/relatedQuestions
const articlesDir = join(root, "src/data/articles");
const categories = readdirSync(articlesDir).filter((f) =>
  existsSync(join(articlesDir, f)) && !f.includes(".")
);

const issues = [];
const articleFiles = [];

// Hub config (read early for articleGroupMap checks)
const hubsPath = join(root, "src/data/hubs.ts");
const hubsContent = readFileSync(hubsPath, "utf8");

for (const cat of categories) {
  const catDir = join(articlesDir, cat);
  if (!existsSync(catDir)) continue;
  for (const file of readdirSync(catDir).filter((f) => f.endsWith(".ts"))) {
    articleFiles.push({ category: cat, file, path: join(catDir, file) });
  }
}

const articleData = [];
for (const { category, file, path } of articleFiles) {
  const content = readFileSync(path, "utf8");
  const slugMatch = content.match(/slug:\s*"([^"]+)"/);
  const statusMatch = content.match(/status:\s*"([^"]+)"/);
  const noindexMatch = content.match(/noindex:\s*(true|false)/);
  const slug = slugMatch?.[1] ?? file.replace(".ts", "");
  const status = statusMatch?.[1] ?? "unknown";
  const noindex = noindexMatch?.[1] === "true";

  articleData.push({ category, slug, status, noindex, path: `/${category}/${slug}` });

  if (status === "published" && !noindex) {
    const groupMapSection = hubsContent.split(`category: "${category}"`)[1]?.split("const ")[0] ?? "";
    if (groupMapSection && !groupMapSection.includes(`${slug}:`) && !groupMapSection.includes(`"${slug}":`)) {
      issues.push(`Published article ${category}/${slug} missing from hub articleGroupMap`);
    }
  }
}

const published = articleData.filter((a) => a.status === "published");
const indexable = articleData.filter((a) => a.status === "published" && !a.noindex);
const drafts = articleData.filter((a) => a.status !== "published");
const noindexed = articleData.filter((a) => a.noindex);

// Hub config validation
const hubCategories = [
  "can-dogs-eat",
  "dog-health",
  "dog-behavior",
  "dog-training",
  "dog-breeds",
  "puppy-care",
  "dog-products",
  "dog-grooming",
];

const indexableByCategory = {};
for (const a of indexable) {
  indexableByCategory[a.category] = (indexableByCategory[a.category] ?? 0) + 1;
}

// Check featuredSlugs and articleGroupMap
for (const cat of hubCategories) {
  const catArticles = indexable.filter((a) => a.category === cat);
  const catSlugs = new Set(catArticles.map((a) => a.slug));

  const featuredMatch = hubsContent.match(
    new RegExp(`category: "${cat}"[\\s\\S]*?featuredSlugs:\\s*\\[([\\s\\S]*?)\\]`, "m")
  );
  if (featuredMatch) {
    const featured = [...featuredMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    for (const slug of featured) {
      if (!catSlugs.has(slug)) {
        issues.push(`Hub ${cat}: featured slug "${slug}" not in published indexable articles`);
      }
    }
  }

  // articleGroupMap entries for this category
  const groupMapSection = hubsContent.split(`category: "${cat}"`)[1]?.split("const ")[0] ?? "";
  const mapEntries = [...groupMapSection.matchAll(/"([^"]+)":\s*"([^"]+)"/g)];
  for (const [, slug] of mapEntries) {
    if (!catSlugs.has(slug)) {
      issues.push(`Hub ${cat}: articleGroupMap slug "${slug}" not in published indexable articles`);
    }
  }
}

// Check relatedQuestions in all article files
for (const { category, file, path } of articleFiles) {
  const content = readFileSync(path, "utf8");
  if (!content.includes("relatedQuestions:")) continue;

  const block = content.match(/relatedQuestions:\s*\[([\s\S]*?)\],/);
  if (!block) continue;

  const entries = [...block[1].matchAll(/\{([^}]+)\}/g)];
  for (const [, objBody] of entries) {
    const relCat = objBody.match(/category:\s*"([^"]+)"/)?.[1];
    const relSlug = objBody.match(/slug:\s*"([^"]+)"/)?.[1];
    if (!relCat || !relSlug) continue;
    const target = articleData.find((a) => a.category === relCat && a.slug === relSlug);
    if (!target) {
      issues.push(`Broken relatedQuestion in ${category}/${file}: ${relCat}/${relSlug} not found`);
    } else if (target.status !== "published" || target.noindex) {
      issues.push(`Non-indexable relatedQuestion in ${category}/${file}: ${relCat}/${relSlug}`);
    }
  }
}

// Stale language check
const stalePatterns = [
  /sample article/i,
  /future phase/i,
  /placeholder article/i,
];
for (const { category, file, path } of articleFiles) {
  const content = readFileSync(path, "utf8");
  const statusMatch = content.match(/status:\s*"([^"]+)"/);
  const noindexMatch = content.match(/noindex:\s*(true|false)/);
  if (statusMatch?.[1] !== "published" || noindexMatch?.[1] === "true") continue;

  for (const pattern of stalePatterns) {
    if (pattern.test(content)) {
      issues.push(`Stale language in indexable article ${category}/${file}: ${pattern}`);
    }
  }
}

// Popular questions
const internalLinksPath = join(root, "src/lib/internal-links.ts");
const internalLinks = readFileSync(internalLinksPath, "utf8");
const popularMatches = [...internalLinks.matchAll(/category:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g)];
for (const [, cat, slug] of popularMatches) {
  const target = articleData.find((a) => a.category === cat && a.slug === slug);
  if (!target || target.status !== "published" || target.noindex) {
    issues.push(`Broken popular question link: ${cat}/${slug}`);
  }
}

// Sitemap expected count
const sectionsCount = 8;
const expectedIndexableUrls = 1 + sectionsCount + indexable.length;

// Search queries to verify (will output article matches from title/slug scan)
const searchQueries = [
  "cinnamon", "shrimp", "rice", "cheese", "ringworm", "worms", "UTI", "ear infection",
  "colitis", "hypoallergenic", "guard dog", "dog ramp", "lick mat", "dog pool",
  "belly buttons", "Fritos", "hold pee", "DHPP", "clean dog ears", "shedding", "puppy training",
];

function articleSearchText(a, content) {
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);
  const kwMatch = content.match(/primaryKeyword:\s*"([^"]+)"/);
  const parts = [
    a.slug,
    titleMatch?.[1],
    descMatch?.[1],
    kwMatch?.[1],
    tagsMatch?.[1],
  ].filter(Boolean).join(" ").toLowerCase();
  return parts;
}

const searchResults = {};
for (const query of searchQueries) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = [];
  for (const { category, file, path } of articleFiles) {
    const content = readFileSync(path, "utf8");
    const statusMatch = content.match(/status:\s*"([^"]+)"/);
    const noindexMatch = content.match(/noindex:\s*(true|false)/);
    if (statusMatch?.[1] !== "published" || noindexMatch?.[1] === "true") continue;

    const slugMatch = content.match(/slug:\s*"([^"]+)"/);
    const slug = slugMatch?.[1] ?? file.replace(".ts", "");
    const text = articleSearchText({ slug, category }, content);
    if (terms.every((t) => text.includes(t))) {
      matches.push(`/${category}/${slug}`);
    }
  }
  searchResults[query] = matches;
}

// Dosage patterns in health articles
const dosagePatterns = [
  /\d+\s*mg\s*per\s*(kg|pound|lb)/i,
  /give\s+\d+\s*mg/i,
  /dosage\s*[:=]\s*\d+/i,
  /\d+\s*mg\/kg/i,
];
for (const { category, file, path } of articleFiles) {
  if (category !== "dog-health") continue;
  const content = readFileSync(path, "utf8");
  for (const pattern of dosagePatterns) {
    if (pattern.test(content)) {
      issues.push(`Possible medication dosage in ${category}/${file}: ${pattern}`);
    }
  }
}

console.log("=== Phase 11G Audit Report ===\n");
console.log("Article files on disk:", articleFiles.length);
console.log("Registry imports:", registryImports.length);
console.log("Registry array entries:", registryEntries.length);
console.log("Published articles:", published.length);
console.log("Indexable articles:", indexable.length);
console.log("Draft/non-published:", drafts.length);
console.log("Explicit noindex:", noindexed.length);
console.log("\nIndexable by category:");
for (const cat of hubCategories) {
  console.log(`  ${cat}: ${indexableByCategory[cat] ?? 0}`);
}
console.log("\nExpected indexable URLs:", expectedIndexableUrls);
console.log("  (1 homepage + 8 hubs +", indexable.length, "articles)");

console.log("\n=== Search query spot-check ===");
for (const [query, matches] of Object.entries(searchResults)) {
  const status = matches.length > 0 ? "OK" : "NO RESULTS";
  console.log(`  [${status}] "${query}": ${matches.length ? matches.join(", ") : "—"}`);
}

if (issues.length === 0) {
  console.log("\n✓ No automated issues found");
} else {
  console.log(`\n✗ ${issues.length} issue(s) found:`);
  for (const issue of issues) {
    console.log(`  - ${issue}`);
  }
}

process.exit(issues.length > 0 ? 1 : 0);
