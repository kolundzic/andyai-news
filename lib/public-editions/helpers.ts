import { PUBLIC_EDITIONS_ROUTE_TEMPLATE } from "./config";

export function buildPublicEditionPath(locale: string, day: string): string {
  return PUBLIC_EDITIONS_ROUTE_TEMPLATE
    .replace("{locale}", locale)
    .replace("{day}", day);
}
