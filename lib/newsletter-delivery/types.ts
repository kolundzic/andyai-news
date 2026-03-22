export type NewsletterDeliveryStatus =
  | "draft"
  | "ready"
  | "queued"
  | "sent"
  | "failed";

export interface NewsletterDeliveryPayload {
  editionId: string;
  day: string;
  locale: string;
  subject: string;
  previewText: string;
  archiveUrl: string;
  editionUrl: string;
  status: NewsletterDeliveryStatus;
}

export interface NewsletterDeliverySnapshot {
  generatedAt: string;
  items: NewsletterDeliveryPayload[];
}
