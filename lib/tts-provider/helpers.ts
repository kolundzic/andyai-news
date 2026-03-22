import {
  TtsProviderAdapter,
  TtsProviderCapabilities,
  TtsProviderId,
  TtsRenderRequest,
  TtsRenderResult,
  TtsValidationResult,
} from "./types";
import { TTS_PROVIDER_CAPABILITIES, TTS_PROVIDER_DEFAULT } from "./config";

export function getProviderCapabilities(providerId: TtsProviderId): TtsProviderCapabilities {
  return TTS_PROVIDER_CAPABILITIES[providerId];
}

export function getDefaultProvider(): TtsProviderId {
  return TTS_PROVIDER_DEFAULT;
}

export function canProviderHandleLocale(providerId: TtsProviderId, locale: string): boolean {
  return getProviderCapabilities(providerId).locales.includes(locale);
}

export function canProviderHandleFormat(providerId: TtsProviderId, format: TtsRenderRequest["format"]): boolean {
  return getProviderCapabilities(providerId).formats.includes(format);
}

export async function renderViaProvider(
  provider: TtsProviderAdapter,
  request: TtsRenderRequest
): Promise<TtsRenderResult> {
  const validation: TtsValidationResult = await provider.validateRequest(request);

  if (!validation.ok) {
    return {
      ok: false,
      provider: provider.providerId,
      request_id: request.request_id,
      job_id: request.job_id,
      error: validation.error ?? {
        code: "INVALID_REQUEST",
        message: "Validation failed.",
        retryable: false,
      },
      warnings: validation.warnings,
    };
  }

  return provider.render({
    ...request,
    voice_profile: validation.normalized_voice_profile ?? request.voice_profile,
    format: validation.normalized_format ?? request.format,
  });
}
