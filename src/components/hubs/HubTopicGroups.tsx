import { ArticleCard } from "@/components/hubs/ArticleCard";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HubTopicGroupWithArticles } from "@/lib/hubs";

type HubTopicGroupsProps = {
  groups: HubTopicGroupWithArticles[];
};

export function HubTopicGroups({ groups }: HubTopicGroupsProps) {
  return (
    <section aria-labelledby="hub-topic-groups-heading">
      <SectionHeading
        id="hub-topic-groups-heading"
        eyebrow="Browse topics"
        title="Explore by topic"
        description="Topic groups organize guides as the library grows. Groups with published articles link directly; others show what's planned next."
      />
      <div className="space-y-8">
        {groups.map((group) => (
          <div
            key={group.id}
            id={`topic-${group.id}`}
            className="scroll-mt-24"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-stone-900">
                {group.title}
              </h3>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
                {group.description}
              </p>
            </div>

            {group.articles.length > 0 ? (
              <CardGrid columns={2}>
                {group.articles.map((article) => (
                  <li key={article.slug}>
                    <ArticleCard article={article} />
                  </li>
                ))}
              </CardGrid>
            ) : (
              <Card variant="muted" padding="sm">
                <p className="text-sm font-medium text-stone-700">
                  Planned topic group
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  Guides for {group.title.toLowerCase()} are on the way. Check
                  back as new articles are added to this section.
                </p>
              </Card>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
