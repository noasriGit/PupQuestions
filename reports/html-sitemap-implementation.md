# HTML Sitemap Implementation Report

## 1. Preflight findings

### Framework and routing

- **Framework:** Next.js 16.2.10 (App Router) with React 19 and TypeScript
- **Routing:** File-based App Router under `src/app/`
- **Trailing slashes:** No `trailingSlash` config; canonical URLs use paths without trailing slashes (for example `/dog-health/uti-symptoms-in-dogs`)

### Existing sitemap and discovery

| Asset | Status |
| --- | --- |
| XML sitemap (`/sitemap.xml`) | Present via `src/app/sitemap.ts` |
| HTML sitemap (`/sitemap`) | **Did not exist before this work** |
| `robots.txt` | References `${SITE_URL}/sitemap.xml` |

### How indexable pages are defined

1. **Articles:** `src/data/articles/index.ts` registry with `status === "published"` and `noindex !== true` via `isArticleIndexable()` in `src/lib/indexing.ts`
2. **Category hubs:** `src/data/sections.ts` — eight topic hub pages
3. **Trust / company pages:** `src/data/trust-pages.ts` — five static informational pages
4. **Homepage:** Root route `/`
5. **Search:** Explicitly `noindex` in `src/app/search/page.tsx`

There is no CMS. All content is typed TypeScript data.

### Authoritative content sources

| Source | Purpose |
| --- | --- |
| `src/data/articles/index.ts` | Article registry and indexability |
| `src/data/sections.ts` | Category hub metadata |
| `src/data/hubs.ts` | Featured article slugs per category |
| `src/data/trust-pages.ts` | About, contact, editorial, privacy, accessibility |
| `src/data/static-pages.ts` | **New** — homepage and HTML sitemap metadata only |

### XML sitemap compatibility

- No route conflict: `src/app/sitemap.ts` serves XML at `/sitemap.xml`; `src/app/sitemap/page.tsx` serves HTML at `/sitemap`
- HTML sitemap URL added to XML sitemap
- Paginated HTML sitemap URLs were not added (not needed)

### Routes excluded

| Route / type | Reason |
| --- | --- |
| `/search` | `noindex` search results page |
| `/ads.txt` | Non-HTML utility route |
| `/_not-found` | Error page |
| API / metadata routes | Not user-facing HTML (`robots.txt`, `sitemap.xml`) |
| Draft / `noindex` articles | None currently in registry |

### Proposed architecture (implemented)

Single statically generated HTML sitemap at `/sitemap` built from existing registries, organized by:

1. Start here (featured hubs + hub-featured articles)
2. Topics (eight category sections with hub links and child guides)
3. Recently updated guides
4. About PupQuestions (trust pages)
5. A–Z guide index

No category sub-sitemap pages or pagination were required at current scale.

---

## 2. Existing content sources used

- `articles` registry + `isArticleIndexable()`
- `sections` for hub metadata and grouping
- `hubConfigs.featuredSlugs` for featured article selection
- `trustPages` for company / policy pages
- `staticPages` for homepage and the HTML sitemap page itself

---

## 3. Sitemap architecture implemented

```
/sitemap
├── Start here (homepage, hubs, hub-featured articles)
├── Topics (8 category sections)
├── Recently updated guides (15 most recently updated articles)
├── About PupQuestions (5 trust pages)
└── A–Z guide index (all 64 articles)
```

**Main sitemap URL:** `/sitemap`

**Category sitemap URLs:** None (not justified at current size)

---

## 4. Included content types

| Content type | Count |
| --- | ---: |
| Homepage | 1 |
| Category hubs | 8 |
| Articles | 64 |
| Trust / company pages | 5 |
| HTML sitemap page | 1 |
| **Total indexable entries** | **78** |

---

## 5. Exclusion rules

Implemented in `src/lib/sitemap/constants.ts` and enforced by building only from indexable registries:

- Draft articles (`status !== "published"`)
- `noindex` articles
- `/search` (noindex)
- `/ads.txt` and other non-HTML utility routes
- Error pages
- Query-string or filter URLs

Validation additionally checks for duplicate IDs/URLs, missing titles, invalid URLs, trailing-slash inconsistencies, empty category groups, and excluded-route leakage.

---

## 6. Category and pagination decisions

- **Categories:** One section per `sections` entry with published articles; empty topic groups from `hubs.ts` are not rendered as standalone sitemap sections
- **Pagination:** Not implemented — largest category (`can-dogs-eat`) has 16 guides, well below the 50–100 pagination threshold
- **Category sub-sitemap pages:** Not created

---

## 7. Recently published logic

- **Included:** Yes
- **Source field:** `article.lastUpdated` (the site's authoritative update date)
- **Scope:** Published, indexable articles only
- **Sort:** Descending by `lastUpdated`
- **Limit:** 15 entries (`SITEMAP_RECENT_ENTRY_LIMIT`)
- **Label:** “Recently updated guides” (not “published,” because the site stores `lastUpdated` rather than a separate publication date)

---

## 8. Featured-content logic

- **Included:** Yes
- **Label:** “Start here”
- **Signals used:**
  - Homepage (`staticPages`, `featured: true`)
  - All eight category hubs (structural importance)
  - Articles listed in each hub's `featuredSlugs` from `src/data/hubs.ts`
- **Not used:** Analytics, traffic, or fabricated popularity data

---

## 9. A–Z logic

- **Included:** Yes
- **Threshold:** 20+ articles (`SITEMAP_AZ_MIN_ENTRIES`); site has 64 articles
- **Scope:** Article entries only
- **Sorting:** By displayed title, case-insensitive
- **Jump links:** Rendered for each populated letter
- **Leading articles:** Not stripped (question-style titles such as “Can Dogs Eat…” and “Why Do Dogs…”)

---

## 10. Search implementation

- **Not included.** Total entry count (~78) does not justify client-side sitemap search; all links are server-rendered in HTML.

---

## 11. SEO and structured-data implementation

- Unique page title and meta description via `createPageMetadata()`
- Self-referencing canonical at `https://www.pupquestions.com/sitemap`
- Open Graph and Twitter metadata via shared metadata helper
- JSON-LD `CollectionPage` with nested `ItemList`, plus `BreadcrumbList` via `buildSitemapPageSchema()`
- Breadcrumb navigation: Home → Sitemap
- Semantic landmarks: `section`, `nav`, `article`, `h1`–`h3` hierarchy
- HTML sitemap URL added to XML sitemap at priority `0.6`
- Footer link added under “About”

---

## 12. Accessibility and responsive results

- Responsive grid layouts (`sm:grid-cols-2`) with readable line lengths
- Visible focus styles on all links and jump controls
- Keyboard-accessible A–Z jump links (`<a href="#sitemap-letter-X">`)
- `scroll-mt-24` on in-page anchors to avoid header overlap
- Sufficient touch targets on jump links (`min-h-10 min-w-10`)
- Uses existing design system: `Container`, `Card`, `Breadcrumb`, `SectionHeading`, stone/amber palette
- Dark mode: site does not currently implement dark mode sitewide

---

## 13. Performance considerations

- Page is statically generated at build time (`○ /sitemap`)
- All data resolved on the server; no client-side JavaScript for sitemap rendering
- Compact `SitemapRecord` objects — titles, URLs, descriptions, and dates only
- Validation runs during `npm run build` before Next.js compilation
- No images, animations, or third-party dependencies added for the sitemap

---

## 14. Validation results

| Check | Result |
| --- | --- |
| `npm run validate:sitemap` | Passed — 78 indexable entries |
| `npm test` (Vitest) | 8/8 tests passed |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed |
| `npm run build` | Passed — `/sitemap` statically generated |

Validation covers: duplicate URLs/IDs, missing titles/URLs, invalid URLs, trailing slashes, empty categories, excluded-route leakage.

---

## 15. Exact files changed

### Added

- `src/types/sitemap.ts`
- `src/data/static-pages.ts`
- `src/lib/sitemap/constants.ts`
- `src/lib/sitemap/entries.ts`
- `src/lib/sitemap/groups.ts`
- `src/lib/sitemap/featured.ts`
- `src/lib/sitemap/recent.ts`
- `src/lib/sitemap/alphabetical.ts`
- `src/lib/sitemap/validate.ts`
- `src/lib/sitemap/index.ts`
- `src/lib/sitemap/sitemap.test.ts`
- `src/components/sitemap/SitemapEntryList.tsx`
- `src/components/sitemap/SitemapCategorySection.tsx`
- `src/components/sitemap/SitemapFeaturedSection.tsx`
- `src/components/sitemap/SitemapAlphabeticalIndex.tsx`
- `src/app/sitemap/page.tsx`
- `scripts/validate-html-sitemap.ts`
- `vitest.config.ts`
- `reports/html-sitemap-implementation.md`

### Modified

- `src/app/sitemap.ts` — added `/sitemap` to XML sitemap
- `src/lib/schema.ts` — added `buildSitemapPageSchema()`
- `src/components/layout/Footer.tsx` — added Sitemap footer link
- `package.json` — added `test`, `typecheck`, `validate:sitemap` scripts; build runs validation first

---

## 16. Known limitations

1. **No separate publication date:** Recent content uses `lastUpdated` only; a distinct `publishedAt` field does not exist in the article model.
2. **No live redirect checking:** Validation does not HTTP-fetch destinations to confirm non-redirecting 200 responses.
3. **Hub topic subgroups omitted from HTML sitemap:** `hubs.ts` topic groups (for example “Fruits”, “Digestion”) are used on hub pages but not mirrored as separate sitemap sections to avoid thin or empty groups.
4. **No client-side search/filter** on the sitemap page at current scale.
5. **Structured data `ItemList` includes all entries** on one page; if the site grows substantially, consider splitting category sitemap pages and narrowing structured data scope.
