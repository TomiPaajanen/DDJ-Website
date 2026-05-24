'use client';
import { useState } from 'react';

const items = [
  { q: 'Do I need any prior Japanese knowledge?', a: 'Not at all — we welcome complete beginners and tailor lessons to your level.' },
  { q: 'How long are the lessons?', a: 'Standard lessons are 50 minutes, but we offer 25-minute sessions as well.' },
  { q: 'Can I switch teachers?', a: 'Yes, you can try different teachers and switch at any time.' },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="col-lg-8 mx-auto">
      {items.map(({ q, a }, i) => (
        <div key={i} className="mb-2 shadow-sm rounded overflow-hidden border-0">
          <button
            className="w-100 text-start px-4 py-3 fw-medium border-0 d-flex justify-content-between align-items-center"
            style={{ background: '#fff', cursor: 'pointer', color: '#000' }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{q}</span>
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-4 py-3 text-muted" style={{ background: '#fff', borderTop: '1px solid #eee' }}>
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
