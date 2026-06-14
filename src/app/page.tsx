import Link from 'next/link'
import Image from 'next/image';
import FaqAccordion from './FaqAccordion';
import Navbar from './Navbar';

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

      <Navbar />

      {/* Hero */}
      <div className="py-5 px-4" style={{ background: '#fbf7f0' }}>
        <div className="container" >
          <div className="row align-items-center" >
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#2a1a0e' }}>
                Ready to actually <em style={{ color: '#b85c2a', fontStyle: 'italic' }}>speak</em> Japanese?
              </h1>
              <p className="lead mb-4" style={{ color: '#000' }}>
                Most learners get stuck with apps and textbooks. At DDJ, you&apos;ll have real conversations with native teachers — personalized to your goals and lifestyle.
              </p>
              <a
                href="https://calendly.com/daily_dose_japanese/roadmap_session"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg fw-bold"
                style={{ background: '#b85c2a', color: '#fff', borderRadius: 8, border: 'none' }}
              >
                Book my free session →
              </a>
              <p className="mt-2 mb-0" style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>
                25 min · Free · No commitment
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <Image
                src="/lesson.png"
                alt="Student Learning Japanese"
                width={500}
                height={280}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto', }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: '#ffffff' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="mb-2 fw-semibold" style={{ color: '#b85c2a', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
              WHAT MAKES US DIFFERENT
            </p>
            <h2 className="fw-bold" style={{ color: '#2a1a0e', fontSize: '2.5rem' }}>
              The DDJ way of learning
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: '✨', title: 'Personalized lessons', desc: 'Tailored to your goals and lifestyle' },
              { icon: '👩‍🏫', title: 'Team of senseis', desc: 'Learn from multiple teachers as you grow' },
              { icon: 'discord', title: 'Discord community', desc: 'Practice 24/7 with peers' },
              { icon: '📅', title: 'Flexible scheduling', desc: 'Fits any timezone or routine' },
            ].map(f => (
              <div key={f.title} className="col-md-6">
                <div className="p-4 h-100" style={{ background: '#fbe9dc', borderRadius: 16 }}>
                  <div className="mb-3" style={{ fontSize: '2rem' }}>
                    {f.icon === 'discord' ? (
                      <Image src="/discord_logo.png" alt="Discord" width={40} height={40} style={{ objectFit: 'contain' }} />
                    ) : (
                      f.icon
                    )}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#2a1a0e' }}>{f.title}</h5>
                  <p className="mb-0" style={{ color: '#4a3728' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <p className="mb-3" style={{ color: '#4a3728' }}>Wondering if this fits your goals?</p>
            <Link
              href="/information"
              className="btn fw-semibold px-4 py-2"
              style={{
                background: 'transparent',
                color: '#b85c2a',
                border: '1.5px solid #b85c2a',
                borderRadius: 8,
              }}
            >
              See if DDJ fits you →
            </Link>
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
      <div className="py-5" style={{ background: '#fbf7f0', borderTop: '1px solid #f0e0cc', borderBottom: '1px solid #f0e0cc' }}>
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
                <p className="mb-0" style={{ color: '#4D4A42', fontSize: '0.9rem' }}>🔥 Only 10 free counseling spots open every month (20th–30th)</p>
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
                Book My Free Session &nbsp;▶
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
            <p className="mt-3 mb-0" style={{ color: '#4D4A42', fontSize: '0.9rem' }}>🔥 Only 10 free counseling spots open every month (20th–30th)</p>
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
                  <div className="d-none d-md-block">
                    {t.desc.map((line, j) => (
                      <p key={j} className="mb-0" style={{ color: '#4a3728', fontSize: '0.8rem' }}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-5" style={{ background: '#fbf7f0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#b85c2a' }}>Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top small">
        <div className="mb-2">
          <Link href="/privacy" className="text-muted text-decoration-none mx-2">Privacy Policy</Link>
          <Link href="/terms" className="text-muted text-decoration-none mx-2">Terms of Service</Link>
        </div>
        © {new Date().getFullYear()} Daily Dose Japanese. All rights reserved.
      </footer>

    </div>
  );
}