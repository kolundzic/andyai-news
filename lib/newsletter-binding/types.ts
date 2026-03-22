export type NewsletterBindingStatus =
  | "draft"
  | "bound"
  | "ready_preview"
  | "ready_delivery";

export interface NewsletterBindingItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  published: boolean;
}

export interface NewsletterBindingPayload {
  editionId: string;
  day: string;
  locale: string;
  subject: string;
  preheader: string;
  heroTitle: string;
  heroSummary: string;
  itemCount: number;
  status: NewsletterBindingStatus;
  items: NewsletterBindingItem[];
  generatedAt: string;
}
