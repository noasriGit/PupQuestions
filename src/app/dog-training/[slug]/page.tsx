import { createArticleRoute } from "@/lib/article-route";

const route = createArticleRoute("dog-training");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
