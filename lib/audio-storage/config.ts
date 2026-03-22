export const AUDIO_STORAGE_CONFIG = {
  storageRoot: "/storage/audio",
  publicRoot: "/audio",
  supportedFormats: ["mp3", "wav", "ogg"] as const,
  defaultFormat: "mp3" as const,
  captionsExtension: ".vtt",
  transcriptExtension: ".txt",
  metadataExtension: ".json",
};
