import Link from 'next/link';
import { notFound } from 'next/navigation';
import StoryPager from '@/components/StoryPager';
import { getLatestPayload } from '@/components/news';

type Props = {
  params: Promise<{ id: string }>;
};

function getArchiveHrefFromDate(date: string) {
  return `/archive/en/${date}`;
}

function getEditionHrefFromDate(date: string) {
  return `/en/edition/${date}`;
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const numericId = Number(id);
  const payload = getLatestPayload();
  const item = payload.news.find((entry) => entry.id === numericId);

  if (!item) {
    notFound();
  }

  const currentIndex = payload.news.findIndex((entry) => entry.id === numericId);
  const prev = currentIndex > 0 ? payload.news[currentIndex - 1] : null;
  const next = currentIndex < payload.news.length - 1 ? payload.news[currentIndex + 1] : null;
  const archiveHref = getArchiveHrefFromDate(payload.date);
  const editionHref = getEditionHrefFromDate(payload.date);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === payload.news.length - 1;

  return (
    <main className="page-shell story-page-shell">
      <div className="detail-shell">
        <StoryPager
          current={item.id}
          total={payload.news.length}
          prevHref={prev ? `/news/${prev.id}` : undefined}
          nextHref={next ? `/news/${next.id}` : undefined}
          dateLabel={payload.date}
        />

        <div className="topbar">
          <Link href="/" className="brand">
            ← AndyAI News
          </Link>
          <div className="subtle">{payload.date}</div>
        </div>

        <header className="detail-header">
          <span className="eyebrow">Story {item.id} of {payload.news.length}</span>
          <h1>{item.title}</h1>
          <p className="summary">{item.summary}</p>
          <div className="card-meta">
            <span className="pill">⚡ {item.impact}</span>
            <span className="pill">📌 Why it matters</span>
            <span className="pill">🧭 Story mode</span>
            <span className="pill">🌐 Public briefing</span>
            <span className="pill">📅 {payload.date}</span>
          </div>
        </header>

        <section className="section">
          <h2>Reading context</h2>
          <p>
            You are reading story {item.id} of {payload.news.length} from the current public briefing for {payload.date}.
            This page is part of a sequential reading flow designed to help readers move through the daily set without losing context.
          </p>
          <div className="card-meta">
            <Link href={editionHref} className="pill">
              Open edition view
            </Link>
            <Link href={archiveHref} className="pill">
              Browse archive day
            </Link>
            <Link href="/" className="pill">
              Return home
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Full brief</h2>
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="section">
          <h2>Why it matters</h2>
          <p>{item.whyItMatters}</p>
        </section>

        <section className="section">
          <h2>Key points</h2>
          <ul>
            {item.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Story continuity</h2>
          <p>
            {isFirst
              ? 'You are at the opening of today’s reading sequence. Continue forward to move through the full set.'
              : isLast
                ? 'You are at the end of today’s reading sequence. Use the links below to reopen the broader edition or archive surface.'
                : 'You are in the middle of today’s reading sequence. Continue forward or step back without losing your place in the daily set.'}
          </p>
          <div className="card-meta">
            {prev ? (
              <Link href={`/news/${prev.id}`} className="pill">
                ← Previous story
              </Link>
            ) : (
              <span className="pill">Start of sequence</span>
            )}

            {next ? (
              <Link href={`/news/${next.id}`} className="pill">
                Next story →
              </Link>
            ) : (
              <span className="pill">Final story</span>
            )}

            <Link href={editionHref} className="pill">
              Today&apos;s edition
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Continue reading</h2>
          <p>
            After finishing a story, the public reading flow should make the next step obvious:
            continue through the current briefing, reopen the edition surface, or move into the archive view for the same day.
          </p>
          <div className="card-meta">
            <Link href="/" className="pill">
              ← Back home
            </Link>
            <Link href={editionHref} className="pill">
              Open today&apos;s edition
            </Link>
            <Link href={archiveHref} className="pill">
              Open archive day
            </Link>
          </div>
        </section>

        <div className="nav-row">
          {prev ? (
            <Link href={`/news/${prev.id}`} className="nav-link">
              <small>Previous</small>
              {prev.title}
            </Link>
          ) : (
            <div className="nav-link">
              <small>Previous</small>
              Start of today&apos;s briefing
            </div>
          )}

          {next ? (
            <Link href={`/news/${next.id}`} className="nav-link">
              <small>Next</small>
              {next.title}
            </Link>
          ) : (
            <Link href={editionHref} className="nav-link">
              <small>Done</small>
              Return to today&apos;s edition
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
