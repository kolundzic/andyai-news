import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { payload, availableDates } from '@/components/news';

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="topbar">
          <div className="brand">AndyAI News</div>
          <div className="subtle">{payload.date}</div>
        </div>

        <section className="hero">
          <div className="hero-image-wrap">
            <Image
              src={payload.coverImage}
              alt="AndyAI News cover"
              fill
              priority
              className="hero-image"
            />
            <div className="hero-overlay" />
            <div className="hero-copy">
              <span className="eyebrow">Story-first AI briefing</span>
              <h1>{payload.title}</h1>
              <p>{payload.subtitle}</p>

              <div className="hero-actions">
                <Link href="/news/1" className="story-cta primary">
                  Start today&apos;s briefing →
                </Link>
                <a href="#today-summary" className="story-cta secondary">
                  View all 9 stories
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="story-strip">
          {payload.news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="story-dot-card">
              <span className="story-dot-number">{item.id}</span>
              <span className="story-dot-title">{item.title}</span>
            </Link>
          ))}
        </section>

        <section id="today-summary" className="summary-head">
          <div>
            <span className="eyebrow">Today&apos;s 9 stories</span>
            <h2>Swipe-style summary, detail on tap</h2>
          </div>
          <div className="summary-head-right">
            <span className="subtle">Datasets: {availableDates.length}</span>
            <Link href="/news/1" className="mini-link">
              Open story mode →
            </Link>
          </div>
        </section>

        <section className="summary-grid">
          {payload.news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </main>
  );
}
