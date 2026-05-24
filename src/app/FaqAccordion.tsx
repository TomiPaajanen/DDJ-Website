'use client';
import { useState } from 'react';

const items = [
  { q: 'Do I need prior Japanese knowledge?', a: 'Not at all — we welcome complete beginners and tailor lessons to your level.' },
  { q: 'How long are the lessons?', a: 'Standard lessons are 50 minutes.' },
  { q: 'Can I switch teachers?', a: 'Yes. We recommend studying with one sensei for the first 3–6 months to build a strong foundation, then switching or adding teachers based on your level and goals. (For our "Dual Coach Plan", we actually recommend learning from 2 different teachers to accelerate your growth.) Every 3 months, you\'ll have a counseling session with us to review your progress and plan your next steps.' },
  { q: 'When can I start learning?', a: 'Lessons start on the 1st of each month. Free counseling calls are open from the 20th–30th, so book early to secure your spot!' },
  { q: 'What if I can\'t keep up with my schedule?', a: 'You can reschedule lessons up to 12 hours in advance, and unused lessons roll over within the same month. (e.g. with the Fluency Accelerator plan, you get 8 lesson tickets per month to use within that month.)' },
  { q: 'I tried learning Japanese before and gave up. Can DDJ really help?', a: 'That\'s actually who we help the most. Many of our students started alone with apps and textbooks but got stuck — that\'s why they chose DDJ. Our teachers and counselor create a plan based on YOUR learning style and goals, plus our Discord community keeps you accountable so you\'re never alone.' },
  { q: 'I\'m not in Japan. Can I still take lessons?', a: 'Yes! Most of our students are in the US and EU. Our booking system handles time differences automatically, and some teachers are based in US/EU time zones — so no worries about scheduling.' },
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
