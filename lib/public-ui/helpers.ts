import { PUBLIC_UI_HERO, PUBLIC_UI_HOME_CARDS, PUBLIC_UI_PRIMARY_NAV } from "@/lib/public-ui/config";

export function getPublicUiHero() {
  return PUBLIC_UI_HERO;
}

export function getPublicUiPrimaryNav() {
  return PUBLIC_UI_PRIMARY_NAV;
}

export function getPublicUiHomeCards() {
  return PUBLIC_UI_HOME_CARDS;
}

export function getLocaleEditionHref(locale: string, day: string) {
  return `/${locale}/edition/${day}`;
}

export function getLocaleArchiveHref(locale: string, day: string) {
  return `/archive/${locale}/${day}`;
}
