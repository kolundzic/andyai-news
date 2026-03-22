import type { NewsletterBindingPayload } from "./types";

export function makeNewsletterKey(day: string, locale: string) {
  return `${day}:${locale}`;
}

export function makeNewsletterSubject(day: string, locale: string) {
  return `AndyAI News — ${day} — ${locale.toUpperCase()} edition`;
}

export function summarizeBinding(payload: NewsletterBindingPayload) {
  return {
    key: makeNewsletterKey(payload.day, payload.locale),
    subject: payload.subject,
    itemCount: payload.itemCount,
    status: payload.status,
  };
}
