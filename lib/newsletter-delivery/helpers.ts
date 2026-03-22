import type { NewsletterDeliveryPayload } from "./types";

export function createNewsletterPayload(
  editionId: string,
  locale: string,
  subject: string,
  body: string
): NewsletterDeliveryPayload {
  return { editionId, locale, subject, body };
}
