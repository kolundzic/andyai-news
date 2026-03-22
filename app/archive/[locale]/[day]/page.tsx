import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { availableDates, getPayloadByDate } from '@/components/news';
import {
  getLocaleArchiveHref,
  getLocaleEditionHref,
} from '@/lib/public-ui/helpers';

export default async function ArchiveDayPage({
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
            <span className="pill">Archive</span>
            <span className="pill">{locale.toUpperCase()}</span>
            <span className="pill">{day}</span>
            {!isExactDate ? <span className="pill">Fallback dataset</span> : null}
          </div>

          <h1>Archive view for {locale.toUpperCase()} on {day}</h1>
          <p>
            This archive surface now shows the real story set for the selected day,
            making the route feel like a true daily archive instead of a placeholder shell.
          </p>

          <div className="card-meta">
            <Link href={editionHref} className="pill">
              Open edition
            </Link>
            <Link href={archiveHref} className="pill">
              Refresh archive
            </Link>
            <Link href="/" className="pill">
              Return home
            </Link>
          </div>
        </section>

        <section className="summary-head">
          <div>
            <span className="eyebrow">Archive day</span>
            <h2>{payload.title}</h2>
            <p>
              {payload.date} • {payload.news.length} archived stories
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
          <h2>Archive continuity</h2>
          <p>
            The archive route preserves day-level context while still letting readers
            jump directly into story mode. This creates a cleaner bridge between daily
            editions, archive review, and sequential story reading.
          </p>
          <div className="card-meta">
            <Link href={editionHref} className="pill">
              Back to edition
            </Link>
            <Link href="/news/1" className="pill">
              Open story mode
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
