import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { getLatestPayload } from '@/components/news';

export default function HomePage() {
  const payload = getLatestPayload();
  const featured = payload.news.slice(0, 6);

  return (
    <main className="page-shell">
      <div className="container">
        <section className="hero">
          <div className="hero-image-wrap">
            <div className="hero-overlay" />
            <div className="hero-copy">
              <span className="eyebrow">AndyAI News • Daily Briefing</span>
              <h1>{payload.title}</h1>
              <p>
                A cleaner public reading surface for fast AI and tech briefings.
                Read the latest daily set, open story mode, and move through the
                briefing with clearer continuity.
              </p>

              <div className="hero-actions">
                <Link href="/news/1" className="primary-link">
                  Open first story
                </Link>
                <Link href={`/archive/en/${payload.date}`} className="secondary-link">
                  Browse archive day
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="summary-head">
          <div>
            <span className="eyebrow">Latest edition</span>
            <h2>Today&apos;s stories</h2>
            <p>
              {payload.date} • {payload.news.length} stories in the current public briefing.
            </p>
          </div>
        </section>

        <section className="summary-grid">
          {featured.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </section>

        <section className="section">
          <h2>Reading flow</h2>
          <p>
            Start from the first story for a sequential daily briefing, or jump
            directly into any story card below and use story mode navigation to
            continue through the set.
          </p>
          <div className="card-meta">
            <Link href="/news/1" className="pill">
              Open story mode
            </Link>
            <Link href={`/en/edition/${payload.date}`} className="pill">
              Open edition view
            </Link>
            <Link href={`/archive/en/${payload.date}`} className="pill">
              Open archive day
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
