import Link from 'next/link'
import Image from 'next/image';
import FaqAccordion from './FaqAccordion';
import Navbar from './Navbar';
import ReviewsCarousel from './ReviewsCarousel';
import StickyCTA from './StickyCTA';
import YouTubeFacade from './YouTubeFacade';

const teachers = [
  { firstName: 'Yuki',   image: 'yuki.png',   location: 'Canada', desc: ['5 years teaching experience', 'structured lessons'] },
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
                Ready to actually <span style={{ whiteSpace: 'nowrap' }}><em style={{ color: '#b85c2a', fontStyle: 'italic' }}>speak</em> Japanese?</span>
              </h1>
              <p className="lead mb-4" style={{ color: '#000' }}>
                Most learners get stuck with apps and textbooks. At DDJ, you&apos;ll have real conversations with native teachers — personalized to your goals and lifestyle.
              </p>
              <Link
                href="/plans"
                className="btn btn-lg fw-bold"
                style={{ background: '#b85c2a', color: '#fff', borderRadius: 8, border: 'none' }}
              >
                See plans &amp; book →
              </Link>
              <p className="mt-2 mb-0" style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>
                25 min · $10 deposit, refunded
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <Image
                src="/lesson.png"
                alt="Student Learning Japanese"
                width={500}
                height={280}
                priority
                sizes="(max-width: 992px) 100vw, 500px"
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
            <h2 className="fw-bold section-title" style={{ color: '#2a1a0e' }}>
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
              <div key={f.title} className="col-6 col-lg-3">
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
              href="/plans"
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

      {/* Why Choose DDJ Comparison */}
      <div style={{ background: '#fbf7f0' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="mb-2 fw-semibold" style={{ color: '#b85c2a', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
              WHY CHOOSE DDJ
            </p>
            <h2 className="fw-bold section-title" style={{ color: '#2a1a0e' }}>
              Not your typical Japanese school
            </h2>
          </div>

          <div className="row g-4 justify-content-center" style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* Other schools */}
            <div className="col-md-6">
              <div className="d-flex flex-column h-100 p-4 bg-white" style={{ borderRadius: 16, border: '1px solid #e8ded2' }}>
                <div className="mb-2" style={{ fontSize: '1rem', visibility: 'hidden' }}>⭐⭐⭐⭐⭐</div>
                <span className="align-self-start px-3 py-1 mb-4" style={{ background: '#f0e6da', color: '#7a6a5c', borderRadius: 20, fontSize: '0.85rem' }}>
                  Other schools
                </span>
                <ul className="list-unstyled flex-grow-1 mb-4">
                  {['Passive learning', 'Fixed curriculum', 'One-way lectures', 'Learn alone'].map(item => (
                    <li key={item} className="d-flex align-items-center gap-2 mb-3" style={{ color: '#4a3728' }}>
                      <span style={{ display: 'inline-block', width: 18, height: 18, border: '1.5px solid #c0b3a3', borderRadius: 4 }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <hr style={{ borderColor: '#e8ded2' }} />
                <div className="text-center">
                  <div className="fw-bold" style={{ color: '#7a6a5c', fontSize: '1.8rem' }}>$5,732+</div>
                  <div style={{ color: '#9a8a7c', fontSize: '0.85rem' }}>for 1.5 years</div>
                </div>
              </div>
            </div>

            {/* Daily Dose Japanese */}
            <div className="col-md-6">
              <div className="d-flex flex-column h-100 p-4 bg-white" style={{ borderRadius: 16, border: '2px solid #b85c2a' }}>
                <div className="mb-2" style={{ fontSize: '1rem' }}>⭐⭐⭐⭐⭐</div>
                <span className="align-self-start px-3 py-1 mb-4" style={{ background: '#fbe9dc', color: '#b85c2a', borderRadius: 20, fontSize: '0.85rem' }}>
                  Daily Dose Japanese
                </span>
                <ul className="list-unstyled flex-grow-1 mb-4">
                  {['Active conversations', 'Personalized plan', 'Team of senseis', 'Discord community'].map(item => (
                    <li key={item} className="d-flex align-items-center gap-2 mb-3" style={{ color: '#3a2010' }}>
                      <span className="d-inline-flex align-items-center justify-content-center" style={{ width: 18, height: 18, background: '#b85c2a', borderRadius: 4, color: '#fff', fontSize: '0.75rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <hr style={{ borderColor: '#f0e0cc' }} />
                <div className="text-center">
                  <div className="fw-bold" style={{ color: '#b85c2a', fontSize: '1.8rem' }}>$230/mo</div>
                  <div style={{ color: '#9a8a7c', fontSize: '0.85rem' }}>cancel anytime</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="mb-3" style={{ color: '#4a3728' }}>See the difference for yourself.</p>
            <Link
              href="/plans"
              className="btn fw-semibold px-4 py-2"
              style={{ background: '#b85c2a', color: '#fff', border: 'none', borderRadius: 8 }}
            >
              Find your plan →
            </Link>
          </div>
        </div>
      </div>

      {/* Video + Student Reviews */}
      <div className="py-5" style={{ background: '#ffffff' }}>
        <div className="container">

          {/* Title */}
          <div className="text-center mb-5">
            <p className="mb-2 fw-semibold" style={{ color: '#b85c2a', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
              REAL STUDENT STORIES
            </p>
            <h2 className="fw-bold section-title" style={{ color: '#2a1a0e' }}>
              From zero to real conversations
            </h2>
          </div>

          <div className="row g-4 align-items-center">

            {/* YouTube embed (lazy facade) */}
            <div className="col-lg-6">
              <YouTubeFacade id="ml-lYUJ4YO0" title="Daily Dose Japanese" />
            </div>

            {/* Student Reviews — arrow carousel, 2 visible */}
            <div className="col-lg-6">
              <ReviewsCarousel />
            </div>

          </div>
        </div>
      </div>

      {/* Teachers */}
      <div id="teachers" className="py-5" style={{ background: '#fbf7f0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5 section-title" style={{ color: '#b85c2a' }}>Meet Our Teachers</h2>
          <div className="row row-cols-3 row-cols-md-5 g-4 justify-content-center">
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
                    alt={t.firstName}
                    width={110}
                    height={110}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', transform: 'scale(1.35)' }}
                  />
                </div>
                <p className="mb-0 fw-bold" style={{ color: '#b85c2a', fontSize: '1rem' }}>
                  {t.firstName}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link
              href="/teachers"
              className="btn fw-bold px-4 py-2"
              style={{ background: '#b85c2a', color: '#fff', border: 'none', borderRadius: 8 }}
            >
              More about teachers →
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-5" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold section-title" style={{ color: '#2a1a0e' }}>
              FAQ
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </div>

      {/* Closing Banner */}
      <div id="closing-cta" style={{ background: '#3d1f0f' }}>
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-3 section-title" style={{ color: '#fdf6ec' }}>
            Ready to start speaking Japanese?
          </h2>
          <p className="mb-4" style={{ color: '#d9c4b0', fontSize: '1.05rem' }}>
            Most students started from zero — real conversations within 3–6 months.
          </p>
          <Link
            href="/plans"
            className="btn fw-bold px-5 py-3"
            style={{ background: '#d2691e', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1.1rem' }}
          >
            Choose your plan &amp; book →
          </Link>
          <p className="mt-4 mb-0" style={{ color: '#d9c4b0', fontSize: '0.9rem' }}>
            🔥 Only 10 spots each month
          </p>
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

      <StickyCTA />

    </div>
  );
}