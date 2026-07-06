/**
 * Returns true when `pathname` matches the nav link `href`.
 * Home (`/`) matches only exactly; hub paths also match child article routes.
 */
export function isActiveNavPath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
