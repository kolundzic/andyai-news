export const NEWSLETTER_DELIVERY_DEFAULT_LOCALES = ["en", "sr", "jp"] as const;

export const NEWSLETTER_DELIVERY_STATUS_LABELS: Record<string, string> = {
  draft: "Draft",
  ready: "Ready",
  queued: "Queued",
  sent: "Sent",
  failed: "Failed",
};
