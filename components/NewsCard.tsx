import Link from 'next/link';
import type { NewsItem } from '@/components/news';

type Props = {
  item: NewsItem;
};

export default function NewsCard({ item }: Props) {
  return (
    <Link href={`/news/${item.id}`} className="card">
      <div className="card-number">{item.id}</div>
      <h2>{item.title}</h2>
      <p>{item.summary}</p>
      <div className="card-meta">
        <span className="pill">⚡ {item.impact}</span>
        <span className="pill">🧠 Detail view</span>
      </div>
      <div className="link-row">Open in story mode →</div>
    </Link>
  );
}
