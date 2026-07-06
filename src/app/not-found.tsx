import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { createNotFoundMetadata } from "@/lib/metadata";

export const metadata: Metadata = createNotFoundMetadata();

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
          Page not found
        </h1>
        <p className="mt-4 text-stone-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-800"
        >
          Go to homepage
        </Link>
      </div>
    </Container>
  );
}
