'use client';
import { useEffect } from 'react';
import Script from 'next/script';

const CALENDLY_URL = 'https://calendly.com/daily_dose_japanese/roadmap_session';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function init() {
  const el = document.getElementById('calendly-inline');
  if (window.Calendly && el) {
    el.innerHTML = '';
    window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
  }
}

export default function CalendlyEmbed() {
  // Re-initialize when navigating to this page client-side (script already loaded).
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div id="calendly-inline" style={{ minWidth: 320, height: 1050 }} />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={init}
      />
    </>
  );
}
