import Link from 'next/link';
import { notFound } from 'next/navigation';
import StoryPager from '@/components/StoryPager';
import { getLatestPayload } from '@/components/news';

type Props = {
  params: Promise<{ id: string }>;
};

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

  return (
    <main className="page-shell story-page-shell">
      <div className="detail-shell">
        <StoryPager
          current={item.id}
          total={payload.news.length}
          prevHref={prev ? `/news/${prev.id}` : undefined}
          nextHref={next ? `/news/${next.id}` : undefined}
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
          </div>
        </header>

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
          <h2>Continue reading</h2>
          <p>
            After finishing a story, the public reading flow should make the next step obvious:
            continue through the current briefing, or return to the homepage to reopen the broader daily surface.
          </p>
          <div className="card-meta">
            <Link href="/" className="pill">
              ← Back home
            </Link>
            <Link href="/" className="pill">
              Open today&apos;s briefing
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
            <Link href="/" className="nav-link">
              <small>Done</small>
              Back to all stories
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
