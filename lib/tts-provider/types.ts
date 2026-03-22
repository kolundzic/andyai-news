export type TtsProviderId = "mock_tts" | "provider_a";

export type TtsAudioFormat = "mp3" | "wav" | "ogg";

export type TtsProviderErrorCode =
  | "UNSUPPORTED_LOCALE"
  | "UNSUPPORTED_FORMAT"
  | "UNSUPPORTED_VOICE"
  | "TEXT_TOO_LONG"
  | "RATE_LIMITED"
  | "AUTH_FAILED"
  | "TIMEOUT"
  | "TEMPORARY_PROVIDER_FAILURE"
  | "PERMANENT_PROVIDER_FAILURE"
  | "INVALID_REQUEST"
  | "UNKNOWN";

export interface TtsProviderError {
  code: TtsProviderErrorCode;
  message: string;
  retryable: boolean;
  provider_code?: string | null;
}

export interface TtsProviderCapabilities {
  provider: TtsProviderId;
  locales: string[];
  formats: TtsAudioFormat[];
  supports_ssml: boolean;
  supports_style: boolean;
  supports_pitch: boolean;
  supports_speaking_rate: boolean;
  max_chars_per_request: number;
  latency_class: "low" | "medium" | "high";
  cost_class: "low" | "medium" | "high";
  voice_profiles: string[];
}

export interface TtsRenderRequest {
  request_id: string;
  job_id: string;
  edition_id: string;
  locale: string;
  source_kind: "daily_brief" | "newsletter_brief" | "article_summary" | "edition_intro" | "archive_replay";
  text: string;
  text_hash: string;
  voice_profile: string;
  format: TtsAudioFormat;
  sample_rate_hz?: number;
  speaking_rate?: number;
  pitch?: number;
  style?: string | null;
  ssml?: string | null;
}

export interface TtsValidationResult {
  ok: boolean;
  normalized_voice_profile?: string;
  normalized_format?: TtsAudioFormat;
  warnings?: string[];
  error?: TtsProviderError | null;
}

export interface TtsRenderResult {
  ok: boolean;
  provider: TtsProviderId;
  request_id: string;
  job_id: string;
  provider_request_id?: string | null;
  output_format?: TtsAudioFormat;
  mime_type?: string | null;
  audio_bytes_base64?: string | null;
  duration_sec_estimate?: number | null;
  checksum_sha256?: string | null;
  warnings?: string[];
  error?: TtsProviderError | null;
  raw_response_meta?: Record<string, string | number | boolean | null>;
}

export interface TtsProviderAdapter {
  providerId: TtsProviderId;
  getCapabilities(): Promise<TtsProviderCapabilities>;
  validateRequest(request: TtsRenderRequest): Promise<TtsValidationResult>;
  render(request: TtsRenderRequest): Promise<TtsRenderResult>;
}
