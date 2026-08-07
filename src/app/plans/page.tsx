'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import HowItWorks from '../HowItWorks';
import CalendlyEmbed from '../CalendlyEmbed';

const ACCENT = '#b85c2a';
const DARK = '#4A1B0C';

type PlanId = 'essential' | 'accelerator' | 'dual';
type Level = 'beginner' | 'intermediate' | 'advanced';
type Goal = 'conversation' | 'travel' | 'jlpt' | 'anime';

interface Plan {
  id: PlanId;
  name: string;
  freq: string;
  lessons: number;
  price: string;
  tagline: string;
  features: string[];
  popular: boolean;
  rec: Record<Level, Goal[]>;
}

const plans: Plan[] = [
  {
    id: 'essential',
    name: 'Essential Foundation',
    freq: '1 lesson/week',
    lessons: 4,
    price: '$230',
    tagline: 'Build your core confidence.',
    features: ['Speak Japanese 1x/week', 'Basic materials access', 'General progress review'],
    popular: false,
    rec: { beginner: ['travel', 'anime'], intermediate: [], advanced: ['conversation', 'travel', 'anime'] },
  },
  {
    id: 'accelerator',
    name: 'Fluency Accelerator',
    freq: '2 lessons/week',
    lessons: 8,
    price: '$440',
    tagline: 'The fastest way to natural conversation.',
    features: ['Speak Japanese 2x/week', 'Real-time correction from native teachers', 'Personalized learning plan', 'Structured progress tracking'],
    popular: true,
    rec: { beginner: ['conversation', 'jlpt'], intermediate: ['conversation', 'travel', 'anime', 'jlpt'], advanced: [] },
  },
  {
    id: 'dual',
    name: 'Dual Coach Plan',
    freq: '3 lessons/week',
    lessons: 12,
    price: '$680',
    tagline: 'Train with 2 native teachers.',
    features: ['Lessons 3x/week', 'Real-time correction from native teachers', 'Access to 2 teachers', 'Personalised plan for exams or relocation'],
    popular: false,
    rec: { beginner: ['jlpt'], intermediate: ['jlpt'], advanced: ['jlpt'] },
  },
];

const visibility: Record<Level, Record<Goal, PlanId[]>> = {
  beginner: {
    travel: ['essential', 'accelerator'],
    anime: ['essential', 'accelerator'],
    conversation: ['accelerator', 'dual'],
    jlpt: ['accelerator', 'dual'],
  },
  intermediate: {
    travel: ['accelerator', 'dual'],
    anime: ['accelerator', 'dual'],
    conversation: ['accelerator', 'dual'],
    jlpt: ['accelerator', 'dual'],
  },
  advanced: {
    travel: ['essential', 'accelerator'],
    anime: ['essential', 'accelerator'],
    conversation: ['essential', 'accelerator'],
    jlpt: ['accelerator', 'dual'],
  },
};

const levels: { id: Level; label: string }[] = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

const goals: { id: Goal; label: string; icon: string }[] = [
  { id: 'conversation', label: 'Conversation', icon: '💬' },
  { id: 'travel', label: 'Travel', icon: '✈️' },
  { id: 'jlpt', label: 'JLPT prep', icon: '📜' },
  { id: 'anime', label: 'Anime / culture', icon: '🎬' },
];

export default function Plans() {
  const [level, setLevel] = useState<Level>('beginner');
  const [goal, setGoal] = useState<Goal | null>('conversation');

  const pill = (selected: boolean): React.CSSProperties => ({
    padding: '8px 18px',
    borderRadius: 20,
    border: `1.5px solid ${selected ? ACCENT : '#D3D1C7'}`,
    background: selected ? ACCENT : 'transparent',
    color: selected ? '#fff' : '#3a2010',
    fontSize: 14,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontWeight: 500,
  });

  const visible = goal ? plans.filter(p => visibility[level][goal].includes(p.id)) : [];

  return (
    <div className="container-fluid px-0" style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar background="#FAF6F1" highlightPlans />

      <div className="container py-5" style={{ maxWidth: 960 }}>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold section-title" style={{ color: DARK }}>
            Which plan fits you?
          </h1>
          <p style={{ color: '#7a6a5c' }}>
            Tell us a little about you — we&apos;ll show you the right starting point.
          </p>
        </div>

        {/* Your level */}
        <div className="mb-4">
          <p className="mb-2 fw-semibold" style={{ color: '#7a6a5c', fontSize: 12, letterSpacing: '0.05em' }}>YOUR LEVEL</p>
          <div className="d-flex flex-wrap gap-2">
            {levels.map(l => (
              <button key={l.id} onClick={() => setLevel(l.id)} style={pill(level === l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Your goal */}
        <div className="mb-5">
          <p className="mb-2 fw-semibold" style={{ color: '#7a6a5c', fontSize: 12, letterSpacing: '0.05em' }}>YOUR GOAL</p>
          <div className="d-flex flex-wrap gap-2">
            {goals.map(g => (
              <button key={g.id} onClick={() => setGoal(g.id)} style={pill(goal === g.id)}>
                <span>{g.icon}</span>{g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        {goal && (
          <div>
            <div style={{ borderTop: '1px solid #eadfce', paddingTop: '1.5rem', marginBottom: '1rem' }} />

            <div className="row g-3">
              {visible.map(p => {
                const isRec = p.rec[level].includes(goal);
                return (
                  <div key={p.id} className="col-md-6">
                    <div
                      className="d-flex flex-column h-100 position-relative"
                      style={{
                        background: '#fff',
                        border: isRec ? `2px solid ${ACCENT}` : '1px solid #eadfce',
                        borderRadius: 16,
                        padding: '1.5rem',
                        boxShadow: isRec ? '0 8px 24px rgba(184,92,42,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
                      }}
                    >
                      {(isRec || p.popular) && (
                        <span
                          className="position-absolute fw-semibold"
                          style={{
                            top: -12,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: isRec ? ACCENT : DARK,
                            color: '#fff',
                            fontSize: 11,
                            padding: '3px 12px',
                            borderRadius: 20,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {isRec ? 'Recommended for you' : 'Most popular'}
                        </span>
                      )}

                      <div className="mb-3">
                        <p className="mb-1 fw-bold" style={{ color: DARK, fontSize: '1.05rem' }}>{p.name}</p>
                        <p className="mb-0" style={{ color: '#7a6a5c', fontSize: 13 }}>{p.tagline}</p>
                      </div>

                      <div className="d-flex align-items-center gap-2 mb-3" style={{ background: '#FAECE7', borderRadius: 8, padding: '6px 10px' }}>
                        <span>📅</span>
                        <span style={{ fontSize: 12, color: '#712B13', fontWeight: 500 }}>{p.lessons} lessons/month</span>
                      </div>

                      <div className="flex-grow-1 mb-3">
                        {p.features.map((f, i) => (
                          <div key={i} className="d-flex align-items-start gap-2 mb-2">
                            <span style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>✓</span>
                            <span style={{ fontSize: 13, color: '#3a2010', lineHeight: 1.4 }}>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="mb-2">
                          <span className="fw-bold" style={{ fontSize: '1.6rem', color: isRec ? ACCENT : DARK }}>{p.price}</span>
                          <span style={{ fontSize: 12, color: '#7a6a5c' }}>/month</span>
                        </p>
                        <a
                          href="#book"
                          className="d-block text-center fw-semibold text-decoration-none"
                          style={{
                            background: isRec ? ACCENT : 'transparent',
                            color: isRec ? '#fff' : ACCENT,
                            border: `1.5px solid ${ACCENT}`,
                            padding: '10px 12px',
                            borderRadius: 8,
                            fontSize: 13,
                          }}
                        >
                          Start with {p.lessons} lessons/month →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center mt-4 mb-1" style={{ color: '#7a6a5c', fontSize: 13 }}>
              Not sure which to pick? We&apos;ll figure it out together on the call.
            </p>
            <p className="text-center mb-0" style={{ color: '#7a6a5c', fontSize: 13 }}>
              We also accept payment in Euros and Japanese Yen.
            </p>
          </div>
        )}
      </div>

      <HowItWorks />

      {/* Book your session — deposit + Calendly embed */}
      <div id="book" style={{ background: '#fbf7f0' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold section-title" style={{ color: DARK }}>
              Pick your Roadmap Session time
            </h2>
            <p style={{ color: '#7a6a5c' }}>
              📅 Lessons start on the 1st of each month — complete this before then to join.
            </p>
          </div>

          {/* Deposit box */}
          <div
            className="text-center mx-auto p-4 p-md-5"
            style={{ background: '#ffffff', borderRadius: 20, maxWidth: 620, border: '1px solid #eadfce', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
          >
            <p className="mb-3 fw-semibold" style={{ color: '#2a1a0e', fontSize: '1.15rem' }}>
              Secure your spot for just $5
            </p>

            {/* Price row */}
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 gap-md-3 mb-4">
              <span style={{ color: '#b09b88', fontSize: '1.3rem', textDecoration: 'line-through' }}>$10</span>
              <span style={{ color: '#b09b88', fontSize: '1.3rem' }}>→</span>
              <span className="fw-bold" style={{ color: '#2a1a0e', fontSize: '2.5rem', lineHeight: 1 }}>$5</span>
              <span className="d-inline-flex align-items-center gap-1 px-3 py-1" style={{ border: '1px solid #e0cdbb', borderRadius: 20, color: '#7a6a5c', fontSize: '0.85rem' }}>
                📅 until Aug 15
              </span>
            </div>

            {/* Button */}
            <a
              href="https://buy.stripe.com/fZu28tgjw5rTbc02m81ZS0w"
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-bold w-100 py-3"
              style={{ background: '#c8895f', color: '#fff', border: 'none', borderRadius: 12, fontSize: '1.15rem' }}
            >
              Secure my spot →
            </a>

            {/* Final line */}
            <p className="mb-0 mt-3" style={{ color: '#9a8a7c', fontSize: '0.9rem' }}>
              🛡️ $5 will be applied to your first month when you enroll
            </p>
          </div>

          {/* Connector line */}
          <div style={{ width: 2, height: 40, background: '#e0d0c0', margin: '0 auto' }} />

          {/* Calendly embed */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eadfce', padding: '0.75rem' }}>
            <CalendlyEmbed />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 small" style={{ background: '#fbf7f0', borderTop: '1px solid #f0e0cc', color: '#7a6a5c' }}>
        <div className="mb-2">
          <Link href="/privacy" className="text-decoration-none mx-2" style={{ color: '#7a6a5c' }}>Privacy Policy</Link>
          <Link href="/terms" className="text-decoration-none mx-2" style={{ color: '#7a6a5c' }}>Terms of Service</Link>
        </div>
        © {new Date().getFullYear()} Daily Dose Japanese. All rights reserved.
      </footer>
    </div>
  );
}
