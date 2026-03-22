'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type Props = {
  current: number;
  total: number;
  prevHref?: string;
  nextHref?: string;
  dateLabel?: string;
};

export default function StoryPager({ current, total, prevHref, nextHref, dateLabel }: Props) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft' && prevHref) {
        window.location.href = prevHref;
      }
      if (event.key === 'ArrowRight' && nextHref) {
        window.location.href = nextHref;
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [prevHref, nextHref]);

  const progressWidth = `${(current / total) * 100}%`;
  const remaining = total - current;

  return (
    <>
      <div className="story-progress-wrap" aria-label={`Story ${current} of ${total}`}>
        <div className="story-progress-track">
          <div className="story-progress-fill" style={{ width: progressWidth }} />
        </div>
        <div className="story-progress-meta">
          <span>
            Story {current} of {total}
            {dateLabel ? ` • ${dateLabel}` : ''}
          </span>
          <span>{remaining > 0 ? `${remaining} left` : 'Final story'} • Use ← → keys</span>
        </div>
      </div>

      <div className="story-bottom-bar">
        {prevHref ? (
          <Link href={prevHref} className="story-cta secondary">
            ← Previous story
          </Link>
        ) : (
          <span className="story-cta secondary disabled">← Start of briefing</span>
        )}

        {nextHref ? (
          <Link href={nextHref} className="story-cta primary">
            Continue to next story →
          </Link>
        ) : (
          <Link href="/" className="story-cta primary">
            Finish briefing ↗
          </Link>
        )}
      </div>
    </>
  );
}
