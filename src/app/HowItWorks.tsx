const ACCENT = '#b85c2a';
const DARK = '#4A1B0C';

const steps = [
  {
    icon: '📅',
    title: 'Pick your session time',
    desc: 'Tell us a little about yourself so we can prepare for your call. Takes just a couple of minutes.',
    badge: '$10 deposit · applied to your 1st month',
    accent: true,
  },
  {
    icon: '🗺️',
    title: 'Roadmap Session',
    desc: "A 25-min call to talk about where you are now, where you want to go, and what's realistic for your schedule. We match you with the right teacher and a plan built around you.",
    badge: null,
    accent: false,
  },
  {
    icon: '🗣️',
    title: 'Start your learning journey',
    desc: 'Begin one-on-one with your teacher, and practice every day with our community.',
    badge: null,
    accent: false,
  },
];

export default function HowItWorks() {
  return (
    <div style={{ background: '#fbf7f0' }}>
      <div className="container py-5" style={{ maxWidth: 820 }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title" style={{ color: DARK }}>
            How it works
          </h2>
        </div>

        {steps.map((step, i, arr) => (
          <div key={step.title} className="d-flex gap-3" style={{ marginBottom: i < arr.length - 1 ? '1.5rem' : 0 }}>
            {/* Icon + connecting line */}
            <div style={{ width: 56, position: 'relative', flexShrink: 0 }}>
              {i < arr.length - 1 && (
                <div style={{ position: 'absolute', top: 28, bottom: -52, left: '50%', transform: 'translateX(-50%)', width: 2, background: '#e0d0c0', zIndex: 0 }} />
              )}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: step.accent ? ACCENT : '#3d1f0f',
                  color: '#fff',
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.icon}
              </div>
            </div>

            {/* Card */}
            <div
              className="flex-grow-1 p-4"
              style={{
                background: '#fff',
                borderRadius: 16,
                border: step.accent ? `1.5px solid ${ACCENT}` : '1px solid #eadfce',
              }}
            >
              <p className="mb-2 fw-semibold" style={{ color: ACCENT, fontSize: 12, letterSpacing: '0.1em' }}>STEP {i + 1}</p>
              <h5 className="fw-bold mb-2" style={{ color: DARK }}>{step.title}</h5>
              <p className="mb-0" style={{ color: '#6a5648', lineHeight: 1.6 }}>{step.desc}</p>
              {step.badge && (
                <span className="d-inline-block mt-3 px-3 py-2" style={{ background: '#f0e6da', color: '#7a5c48', borderRadius: 8, fontSize: 13, fontWeight: 500 }}>
                  {step.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
