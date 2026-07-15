'use client';
import { useState } from 'react';

/**
 * Lightweight YouTube embed: shows the video thumbnail with a play button and
 * only loads the (heavy) YouTube iframe once the user clicks play. This keeps
 * YouTube's player CSS/JS out of the initial page load.
 */
export default function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [activated, setActivated] = useState(false);

  return (
    <div
      className="rounded overflow-hidden shadow"
      style={{ position: 'relative', aspectRatio: '16 / 9', width: '100%' }}
    >
      {activated ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
            padding: 0,
            cursor: 'pointer',
            backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              width: 68,
              height: 48,
              borderRadius: 12,
              background: 'rgba(0,0,0,0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: 0,
                height: 0,
                borderTop: '11px solid transparent',
                borderBottom: '11px solid transparent',
                borderLeft: '19px solid #fff',
                marginLeft: 4,
              }}
            />
          </span>
        </button>
      )}
    </div>
  );
}
