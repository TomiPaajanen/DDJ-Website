'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Floating bottom CTA bar. Shown while the main closing banner (#closing-cta)
 * is off-screen, and hidden once that banner scrolls into view so the two
 * calls-to-action never overlap.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('closing-cta');
    if (!target) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1030,
        background: '#3d1f0f',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
      }}
    >
      <div className="container d-flex justify-content-center py-3">
        <div style={{ position: 'relative' }}>
          {/* Bouncing speech bubble */}
          <div className="cta-bubble-wrap">
            <div className="cta-bubble">✨ Ready to start speaking Japanese?</div>
          </div>

          <Link
            href="/plans"
            className="btn btn-lg fw-bold px-5 py-3"
            style={{ background: '#b85c2a', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1.15rem' }}
          >
            Choose your plan &amp; book →
          </Link>
        </div>
      </div>
    </div>
  );
}
