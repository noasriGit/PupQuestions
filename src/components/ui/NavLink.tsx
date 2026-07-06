"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";
import { isActiveNavPath } from "@/lib/nav-utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  exact?: boolean;
  activeClassName?: string;
};

export function NavLink({
  href,
  exact = false,
  className,
  activeClassName,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "/");
  const isActive = exact
    ? pathname === hrefString
    : isActiveNavPath(pathname, hrefString);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      {...props}
    >
      {children}
    </Link>
  );
}
