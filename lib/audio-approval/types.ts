export type AudioApprovalState =
  | "rendered_unreviewed"
  | "review_in_progress"
  | "approved_internal"
  | "publish_ready"
  | "published_public"
  | "replaced"
  | "withdrawn"
  | "rejected"
  | "stale";

export interface AudioApprovalRecord {
  approval_id: string;
  asset_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: "daily_brief" | "newsletter_brief" | "article_summary" | "edition_intro" | "archive_replay";
  approval_state: AudioApprovalState;
  review_required: boolean;
  review_started_at?: string | null;
  review_completed_at?: string | null;
  approved_by?: string | null;
  published_at?: string | null;
  withdrawn_at?: string | null;
  replaced_at?: string | null;
  replaced_by_asset_id?: string | null;
  rejection_reason?: string | null;
  withdraw_reason?: string | null;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}
