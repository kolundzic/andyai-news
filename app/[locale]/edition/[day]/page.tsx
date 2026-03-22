import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { availableDates, getPayloadByDate } from '@/components/news';
import {
  getLocaleArchiveHref,
  getLocaleEditionHref,
} from '@/lib/public-ui/helpers';

export default async function EditionPage({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;
  const payload = getPayloadByDate(day);
  const isExactDate = availableDates.includes(day);
  const archiveHref = getLocaleArchiveHref(locale, day);
  const editionHref = getLocaleEditionHref(locale, day);

  return (
    <main className="page-shell">
      <div className="container">
        <section className="section">
          <div className="card-meta">
            <span className="pill">Edition</span>
            <span className="pill">{locale.toUpperCase()}</span>
            <span className="pill">{day}</span>
            {!isExactDate ? <span className="pill">Fallback dataset</span> : null}
          </div>

          <h1>Edition view for {locale.toUpperCase()} on {day}</h1>
          <p>
            This edition surface now renders the real daily news payload for the selected day.
            Readers can jump directly into story mode or scan the current edition as a card grid.
          </p>

          <div className="card-meta">
            <Link href="/news/1" className="pill">
              Open first story
            </Link>
            <Link href={archiveHref} className="pill">
              Browse archive
            </Link>
            <Link href="/" className="pill">
              Return home
            </Link>
          </div>
        </section>

        <section className="summary-head">
          <div>
            <span className="eyebrow">Daily edition</span>
            <h2>{payload.title}</h2>
            <p>
              {payload.date} • {payload.news.length} stories in this edition
              {!isExactDate ? ' • showing fallback default payload' : ''}
            </p>
          </div>
        </section>

        <section className="summary-grid">
          {payload.news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </section>

        <section className="section">
          <h2>Edition continuity</h2>
          <p>
            Use this route as the public edition layer for the selected day and locale.
            Each story card opens story mode, while the archive route preserves the same
            date context for retrospective browsing.
          </p>
          <div className="card-meta">
            <Link href={editionHref} className="pill">
              Refresh edition
            </Link>
            <Link href={archiveHref} className="pill">
              Open archive day
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
