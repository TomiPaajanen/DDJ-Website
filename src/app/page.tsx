import Link from 'next/link'
import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const teachers = [
  { firstName: 'Yuki',   image: 'yuki.png',   location: 'Canada', desc: ['5 years teaching experience', 'structured lessons'] },
  { firstName: 'Suzu',   image: 'suzu.png',   location: 'Japan',  desc: ['teaching experience in AUS', 'beginners to exam prep'] },
  { firstName: 'Nanaka', image: 'nanaka.png', location: 'Japan',  desc: ['fun and motivating', 'student-centered lessons'] },
  { firstName: 'Riko',   image: 'riko.png',   location: 'Japan',  desc: ['casual conversations', 'focus on fun speaking practice'] },
  { firstName: 'Airi',   image: 'airi.png',   location: 'Japan',  desc: ['relaxed environment', 'natural conversations'] },
  { firstName: 'Kanata', image: 'kanata.png', location: 'Japan',  desc: ['customize lessons based on', "each student's needs"] },
];

export default function Home() {

  return (
    <div className="container-fluid px-0">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4 py-3">
        <Link href="/" className="navbar-brand">
          <Image
            src="/logo.png"
            alt="Company Logo"
            height={40}
            width={120}
            className="d-inline-block"
          />
        </Link>
        <div className="ms-auto">
          <ul className="nav gap-1">
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark" href="/plans">Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark" href="#faq">FAQ</a>
            </li>
            <li className="nav-item ms-2">
              <a href="https://calendly.com/daily_dose_japanese/roadmap_session" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm px-3">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-light py-5 px-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#b85c2a' }}>Learn Japanese with Native Speakers</h1>
              <p className="lead mb-4" style={{ color: '#000' }}>
                From beginner hiragana to business-level fluency — live lessons, flexible scheduling, real progress.
              </p>
              <a href="https://calendly.com/daily_dose_japanese/roadmap_session" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg me-3">Get Started Free</a>
              <a href="/plans" className="btn btn-outline-secondary btn-lg">Learn More</a>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <Image
                src="/main.png"
                alt="Student Learning Japanese"
                width={250}
                height={175}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: '#b85c2a' }}>
        <div className="container py-5">
          <div className="row text-center g-4">
            {[
              { icon: '🎌', title: 'Native Teachers', desc: 'Learn from certified native Japanese speakers.' },
              { icon: '📅', title: 'Flexible Scheduling', desc: 'Book lessons that fit your timezone and routine.' },
              { icon: '💬', title: 'Discord Community', desc: 'Practice daily with fellow learners.' },
            ].map(f => (
              <div key={f.title} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="fs-1 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video + Student Reviews */}
      <div className="py-5" style={{ background: '#f5ede0' }}>
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* YouTube embed */}
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
                <iframe
                  src="https://www.youtube.com/embed/ml-lYUJ4YO0"
                  title="Daily Dose Japanese"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Student Reviews */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ color: '#b85c2a' }}>Student Reviews</h2>
              {[
                'There\'s no shortcut to learning a language. Having a native speaking tutor helps with the confidence to speak in real situations and given that DDJ is such a vibrant community, there\'s so much to learn from the discord group as well!',
                'Im quite shy but easily got in a comfortable rhythm with Yuki. Yuki welcomes any and all questions I ask, and I\'m never left confused by the end of the lesson. She fits well to my pace of learning and gives really good everyday examples during my lessons.',
                'ryo is very encouraging when it comes to any topic. Whether it\'s a difficulty, interest or other, you can rely on her always wanting the best for you, pushing you towards your goal, very kindly and understanding, without any pressure. i feel very comfortable, even if i am nervous about doing something that I\'m not good at.',
              ].map((review, i) => (
                <div
                  key={i}
                  className="p-3 mb-3 bg-white"
                  style={{ borderRadius: 10, border: '1.5px solid #e0c9b0' }}
                >
                  <p className="mb-2 small" style={{ color: '#3a2010', lineHeight: 1.6 }}>{review}</p>
                  <div className="text-end" style={{ fontSize: '1.1rem' }}>⭐⭐⭐⭐⭐</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Free Session CTA */}
      <div className="py-5" style={{ background: '#FDF9F0', borderTop: '1px solid #f0e0cc', borderBottom: '1px solid #f0e0cc' }}>
        <div className="container">

          {/* Desktop: two columns | Mobile: centered stack */}
          <div className="d-none d-md-flex align-items-center gap-3">
            {/* Left: title + subtitle + booking text */}
            <div className="d-flex flex-column">
              <h2 className="fw-bold mb-2" style={{ color: '#3a2010', fontSize: '2rem', lineHeight: 1.2 }}>
                Ready to actually{' '}
                <span style={{ color: '#B86A38' }}>speak</span>{' '}
                Japanese?
              </h2>
              <p className="mb-4" style={{ color: '#4D4A42', fontSize: '1rem', lineHeight: 1.6 }}>
                Most of our students started from zero<br />
                — and were having real conversations within 3–6 months.
              </p>
              <div className="mt-auto">
                <p className="mb-1" style={{ color: '#4D4A42', fontSize: '1rem' }}>Book a free 25-min call.</p>
                <p className="mb-1" style={{ color: '#4D4A42', fontSize: '1rem' }}>We&apos;ll understand your goals, your level, and match you with the right teacher</p>
                <p className="mb-0" style={{ color: '#4D4A42', fontSize: '0.9rem' }}>Spots open 20th–30th</p>
              </div>
            </div>
            {/* Button */}
            <div className="d-flex flex-shrink-0" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <a
                href="https://calendly.com/daily_dose_japanese/roadmap_session"
                target="_blank"
                rel="noopener noreferrer"
                className="btn fw-bold px-5 py-3"
                style={{
                  background: 'linear-gradient(to right, #b85c2a, #f3c789)',
                  color: '#fff',
                  borderRadius: 50,
                  border: 'none',
                  fontSize: '1.1rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Book Your Free Call &nbsp;▶
              </a>
            </div>
          </div>

          {/* Mobile: centered */}
          <div className="d-md-none text-center">
            <p className="mb-1" style={{ color: '#4D4A42', fontSize: '1rem' }}>Book a free 25-min call.</p>
            <p className="mb-4" style={{ color: '#4D4A42', fontSize: '1rem' }}>We&apos;ll understand your goals, your level, and match you with the right teacher</p>
            <a
              href="https://calendly.com/daily_dose_japanese/roadmap_session"
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-bold px-5 py-3 d-inline-flex align-items-center gap-2"
              style={{
                background: 'linear-gradient(to right, #E8923A, #F5C98A)',
                color: '#fff',
                borderRadius: 50,
                border: 'none',
                fontSize: '1.2rem',
                minWidth: 280,
                justifyContent: 'center',
              }}
            >
              Book Your Free Call &nbsp;▶
            </a>
            <p className="mt-3 mb-0" style={{ color: '#4D4A42', fontSize: '0.9rem' }}>Spots open 20th–30th</p>
          </div>

        </div>
      </div>

      {/* Teachers */}
      <div className="py-5" style={{ background: '#f5ede0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#b85c2a' }}>Meet Our Teachers</h2>
          <div className="row row-cols-3 row-cols-md-6 g-4 justify-content-center">
            {teachers.map(t => (
              <div key={t.firstName} className="col text-center">
                <div
                  className="mx-auto mb-3 overflow-hidden"
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    border: '3px solid #d4956a',
                  }}
                >
                  <Image
                    src={`/${t.image}`}
                    alt={`${t.firstName} sensei`}
                    width={110}
                    height={110}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold" style={{ color: '#b85c2a', fontSize: '1rem' }}>
                    {t.firstName} <span style={{ fontWeight: 400, fontSize: '0.85rem' }}>sensei</span>
                  </p>
                  <p className="mb-1 small text-muted">in {t.location}</p>
                  {t.desc.map((line, j) => (
                    <p key={j} className="mb-0" style={{ color: '#4a3728', fontSize: '0.8rem' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#b85c2a' }}>Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top small">
        © {new Date().getFullYear()} Japanese School. All rights reserved.
      </footer>

    </div>
  );
}