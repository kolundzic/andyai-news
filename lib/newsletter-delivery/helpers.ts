import type { NewsletterDeliveryPayload, NewsletterDeliverySnapshot } from "./types";
import { NEWSLETTER_DELIVERY_DEFAULT_LOCALES } from "./config";

export function makeNewsletterDeliveryPayload(day: string, locale: string): NewsletterDeliveryPayload {
  return {
    editionId: `${day}-main`,
    day,
    locale,
    subject: `AndyAI News — ${locale.toUpperCase()} Edition — ${day}`,
    previewText: `Delivery-ready newsletter payload for ${locale.toUpperCase()} / ${day}.`,
    archiveUrl: `/archive/${locale}/${day}`,
    editionUrl: `/${locale}/edition/${day}`,
    status: "ready",
  };
}

export function makeNewsletterDeliverySnapshot(day: string): NewsletterDeliverySnapshot {
  return {
    generatedAt: new Date().toISOString(),
    items: NEWSLETTER_DELIVERY_DEFAULT_LOCALES.map((locale) =>
      makeNewsletterDeliveryPayload(day, locale)
    ),
  };
}
