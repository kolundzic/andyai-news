import news20260322 from '@/data/news-2026-03-22.json';
import manifest from '@/data/manifest.json';

const datasets = {
  '2026-03-22': news20260322,
} as const;

export type NewsPayload = (typeof datasets)[keyof typeof datasets];
export type NewsItem = NewsPayload['news'][number];

export const availableDates = manifest.availableDates;

export function getPayloadByDate(date: string): NewsPayload {
  const payload = datasets[date as keyof typeof datasets];
  if (!payload) {
    return datasets[manifest.defaultDate as keyof typeof datasets];
  }
  return payload;
}

export function getLatestPayload(): NewsPayload {
  return getPayloadByDate(manifest.defaultDate);
}

export const payload: NewsPayload = getLatestPayload();

export function getNewsItem(id: number, date?: string): NewsItem | undefined {
  const currentPayload = date ? getPayloadByDate(date) : payload;
  return currentPayload.news.find((item) => item.id === id);
}
