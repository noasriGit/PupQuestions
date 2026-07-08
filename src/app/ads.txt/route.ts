import { ADSENSE_ADS_TXT } from "@/lib/constants";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(`${ADSENSE_ADS_TXT}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
