import Link from 'next/link';
import Navbar from '../Navbar';

const plans = [
  {
    name: 'Essential Foundation',
    tagline: 'Build your core confidence.',
    price: 230,
    highlight: false,
    badge: null,
    features: [
      { text: 'Speak Japanese', bold: null, suffix: '1/week' },
      { text: 'Basic materials access', bold: null, suffix: null },
      { text: 'General progress review', bold: null, suffix: null },
    ],
  },
  {
    name: 'Fluency Accelerator',
    tagline: 'The fastest way to natural conversation.',
    price: 440,
    highlight: true,
    badge: '⭐ MOST POPULAR',
    features: [
      { text: 'Speak Japanese', bold: '2 times week', suffix: null },
      { text: 'Real-time correction from native teachers', bold: null, suffix: null },
      { text: 'Personalized learning plan', bold: null, suffix: null },
      { text: 'Structured progress tracking', bold: null, suffix: null },
    ],
  },
  {
    name: 'Dual Coach Plan',
    tagline: 'Train with 2 native teachers.',
    price: 680,
    highlight: false,
    badge: null,
    features: [
      { text: 'Lessons', bold: '3 times week', suffix: null },
      { text: 'Real-time correction from native teachers', bold: null, suffix: null },
      { text: 'Access to 2 teachers', bold: null, suffix: null },
      { text: 'Personalised learning plan for exams or relocation', bold: null, suffix: null },
    ],
  },
];

const ACCENT = '#b85c2a';
const BG = '#f5ede0';

export default function Plans() {
  return (
    <div className="container-fluid px-0" style={{ background: BG, minHeight: '100vh' }}>

      <Navbar background="#FAF6F1" paddingY="0.75rem" highlightPlans />

      {/* Hero */}
      <div className="text-center pt-5 pb-4 px-3">
        <p className="mb-1 fw-medium" style={{ color: ACCENT, letterSpacing: '0.03em' }}>
          Daily Dose Japanese
        </p>
        <h1 className="fw-bold" style={{ color: '#3a2010', fontSize: '2.4rem' }}>
          Private Lesson Packages
        </h1>
      </div>

      {/* Pricing cards */}
      <div className="container pb-5">
        <div className="row align-items-stretch justify-content-center g-4" style={{ maxWidth: 960, margin: '0 auto' }}>
          {plans.map(plan => (
            <div key={plan.name} className="col-md-4 d-flex">
              <div
                className="d-flex flex-column w-100 p-4 bg-white position-relative"
                style={{
                  borderRadius: 16,
                  border: plan.highlight ? `2px solid ${ACCENT}` : '2px solid transparent',
                  boxShadow: plan.highlight
                    ? `0 8px 32px rgba(184,92,42,0.15)`
                    : '0 2px 16px rgba(0,0,0,0.06)',
                  marginTop: plan.highlight ? 0 : '2rem',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="position-absolute text-white fw-semibold px-3 py-1"
                    style={{
                      top: -18,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: ACCENT,
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Name & tagline */}
                <h3
                  className="fw-bold mb-1"
                  style={{
                    color: plan.highlight ? ACCENT : '#3a2010',
                    fontSize: plan.highlight ? '1.5rem' : '1.25rem',
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-muted small mb-4">{plan.tagline}</p>

                {/* Features */}
                <ul className="list-unstyled flex-grow-1 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="mb-3 d-flex align-items-start gap-2">
                      <span className="fw-bold mt-1" style={{ color: ACCENT, fontSize: '1rem' }}>✓</span>
                      <span style={{ color: '#4a3728', lineHeight: 1.4 }}>
                        {f.text}
                        {(f.bold || f.suffix) && (
                          <>
                            <br />
                            <strong style={{ fontSize: '1.05rem' }}>{f.bold ?? f.suffix}</strong>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <span style={{ fontSize: '1.1rem', color: ACCENT, verticalAlign: 'top', marginTop: 8, display: 'inline-block' }}>$</span>
                  <span className="fw-bold" style={{ fontSize: '3rem', color: ACCENT, lineHeight: 1 }}>{plan.price}</span>
                  <span className="text-muted">/month</span>
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/daily_dose_japanese/roadmap_session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100 fw-bold py-2"
                  style={
                    plan.highlight
                      ? { background: 'linear-gradient(to right, #b85c2a, #f3c789)', color: '#fff', border: 'none', borderRadius: 50 }
                      : { background: 'linear-gradient(to right, #b85c2a, #f3c789)', color: '#fff', border: 'none', borderRadius: 50 }
                  }
                  onMouseEnter={undefined}
                >
                  Book My Free Session
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="text-center mt-5" style={{ color: '#7a5c48' }}>
          <p className="mb-2">
            You can choose from 1, 2, or 3 lessons per week.<br />
            Each lesson is 50min.
          </p>
          <p className="mb-3">
            Payment is via Stripe (credit card) and<br />
            renews automatically every 1st day on each months.
          </p>
          <p className="small mb-0" style={{ opacity: 0.75 }}>JPY: 36,800 / 69,000 / 108,000</p>
          <p className="small" style={{ opacity: 0.75 }}>EUR: 198 / 380 / 589</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 border-top small" style={{ color: '#9a7a68', borderColor: '#e0d0c0 !important' }}>
        <div className="mb-2">
          <Link href="/privacy" className="text-decoration-none mx-2" style={{ color: '#9a7a68' }}>Privacy Policy</Link>
          <Link href="/terms" className="text-decoration-none mx-2" style={{ color: '#9a7a68' }}>Terms of Service</Link>
        </div>
        © {new Date().getFullYear()} Daily Dose Japanese. All rights reserved.
      </footer>

    </div>
  );
}
