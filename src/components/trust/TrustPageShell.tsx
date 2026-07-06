import type { ReactNode } from "react";

import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleHeader } from "@/components/ui/ArticleHeader";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildTrustPageSchema } from "@/lib/schema";

type TrustPageShellProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export function TrustPageShell({
  title,
  description,
  path,
  children,
}: TrustPageShellProps) {
  return (
    <>
      <JsonLd schema={buildTrustPageSchema(path, title, description)} />
      <ArticleHeader
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
      />
      <Container size="narrow" as="article">
        <ArticleBody>{children}</ArticleBody>
      </Container>
    </>
  );
}
