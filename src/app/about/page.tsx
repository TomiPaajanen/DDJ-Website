import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar';
import BookButton from '../BookButton';

const ACCENT = '#b85c2a';
const DARK = '#2a1a0e';

const values = [
  { icon: '🎯', title: 'Personalized', desc: 'Lessons, homework, and pace — all adjusted to you and your goals' },
  { icon: '🔄', title: 'Regular check-ins', desc: '3-month counseling sessions to track real growth and adjust your plan' },
  { icon: '🗓️', title: 'Flexible', desc: 'Fits around your job, your life, and your timezone' },
];

export default function About() {
  return (
    <div className="container-fluid px-0" style={{ background: '#ffffff' }}>
      <Navbar background="#FAF6F1" />

      {/* Section 1 — Our Story (intro) */}
      <div style={{ background: '#fbf7f0' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>
          <p className="mb-2 fw-semibold" style={{ color: ACCENT, letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            OUR STORY
          </p>
          <h1 className="fw-bold section-title mb-3" style={{ color: DARK }}>
            Why Daily Dose Japanese exists
          </h1>
          <p className="mb-0" style={{ color: '#7a6a5c', fontSize: '1.05rem' }}>
            The school we built is the one we wish had existed.
          </p>
        </div>
      </div>

      {/* Section 1 — Story body */}
      <div style={{ background: '#ffffff' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>

          {/* Row 1: text + forest_image */}
          <div className="row align-items-center g-4 mb-4">
            <div className="col-md-6">
              <div style={{ color: '#3a2c22', fontSize: '1.05rem', lineHeight: 1.8 }}>
                <p>I moved to Finland barely speaking English — despite studying it since I was 3 years old.</p>
                <p>All those years, all that time and money. I had studied the language, but I had never really <em>used</em> it. It was grammar for exams, not words for real life.</p>
                <p className="mb-0">Finnish was the same. University classes alone got me nowhere.</p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/about_forest.jpg"
                alt="Hikari in forest"
                width={1179}
                height={1474}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Row 2: book_image + text */}
          <div className="row align-items-center g-4">
            <div className="col-md-6 d-none d-md-block">
              <Image
                src="/about_book.jpg"
                alt="Finnish textbook"
                width={1080}
                height={1080}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div style={{ color: '#3a2c22', fontSize: '1.05rem', lineHeight: 1.8 }}>
                <p>The moment I switched to a school focused on real conversation — everything changed.</p>
                <p>I started understanding jokes. I could talk to my partner&apos;s parents. I wasn&apos;t perfect, but I could <em>say what I wanted to say</em>. And that felt like freedom.</p>
                <blockquote
                  className="my-3 px-4 py-3"
                  style={{ background: '#FAECE7', borderLeft: `4px solid ${ACCENT}`, borderRadius: 8, color: DARK, fontStyle: 'italic', fontSize: '1.05rem' }}
                >
                  That&apos;s when I realized: the method matters as much as the effort.
                </blockquote>
                <p className="mb-0">Daily Dose Japanese was built on that lesson. We don&apos;t teach Japanese for tests. We teach Japanese for your life.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2 — Our Philosophy */}
      <div style={{ background: '#fbf7f0' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>

          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <p className="mb-2 fw-semibold" style={{ color: ACCENT, letterSpacing: '0.15em', fontSize: '0.8rem' }}>
                OUR PHILOSOPHY
              </p>
              <h2 className="fw-bold section-title mb-4" style={{ color: DARK }}>
                Learning for your life, not for a test
              </h2>
              <div style={{ color: '#3a2c22', fontSize: '1.05rem', lineHeight: 1.8 }}>
                <p>Life is full of things we want to do &ldquo;someday.&rdquo; Learn Japanese. Travel to Tokyo. Finally understand your favorite anime without subtitles.</p>
                <p>But someday stays someday — unless you build it into your everyday.</p>
                <p>At DDJ, we believe real growth happens in small, consistent steps. Not in cramming. Not in pressure. In showing up, a little at a time, in a way that fits your actual life.</p>
                <p className="mb-0">That&apos;s why we personalize everything — your lessons, your homework, your pace. And why we check in every 3 months to make sure you&apos;re still moving toward <em>your</em> goal, not ours.</p>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <Image
                src="/about_group.jpg"
                alt="DDJ group lesson"
                width={2300}
                height={1437}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className="row g-3 mt-4">
            {values.map(v => (
              <div key={v.title} className="col-md-4">
                <div className="h-100 p-4 bg-white" style={{ borderRadius: 12, border: '1px solid #eadfce' }}>
                  <div className="mb-3" style={{ fontSize: '1.6rem' }}>{v.icon}</div>
                  <h5 className="fw-bold mb-2" style={{ color: DARK, fontSize: '1rem' }}>{v.title}</h5>
                  <p className="mb-0" style={{ color: '#7a6a5c', fontSize: '0.9rem', lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The DDJ Community */}
      <div style={{ background: '#ffffff' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>
          <p className="mb-2 fw-semibold" style={{ color: ACCENT, letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            THE DDJ COMMUNITY
          </p>
          <h2 className="fw-bold section-title mb-3" style={{ color: DARK }}>
            You don&apos;t have to do this alone
          </h2>
          <p style={{ color: '#3a2c22', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 760 }}>
            Like going to the gym — a personal coach and a friend who shows up with you makes all the difference. That&apos;s what DDJ is for. Our Discord community and team of senseis are with you every step of the way.
          </p>

          <Image
            src="/about_xmas.jpg"
            alt="DDJ community xmas"
            width={2203}
            height={1237}
            className="img-fluid rounded shadow mt-3 d-block mx-auto xmas-img"
            style={{ height: 'auto' }}
          />

          <div className="row text-center mt-4 g-4">
            <div className="col-4">
              <div className="fw-bold" style={{ color: ACCENT, fontSize: '2.2rem' }}>200+</div>
              <div style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>students taught</div>
            </div>
            <div className="col-4" style={{ borderLeft: '1px solid #eadfce', borderRight: '1px solid #eadfce' }}>
              <div className="fw-bold" style={{ color: ACCENT, fontSize: '2.2rem' }}>6</div>
              <div style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>native teachers</div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>🌍</div>
              <div className="mt-1" style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>students from around the world</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — What We Want For You (banner) */}
      <div style={{ background: '#3d1f0f' }}>
        <div className="container text-center py-5" style={{ maxWidth: 760 }}>
          <p className="mb-2 fw-semibold" style={{ color: '#e8c9a0', letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            WHAT WE WANT FOR YOU
          </p>
          <h2 className="fw-bold mb-3 section-title" style={{ color: '#fdf6ec' }}>
            We don&apos;t just want you to speak Japanese.
          </h2>
          <p className="mb-3" style={{ color: '#d9c4b0', fontSize: '1.05rem', lineHeight: 1.7 }}>
            We want you to feel the confidence that comes from being understood in another language. To have doors open that weren&apos;t open before. To find yourself genuinely enjoying something you once thought was too hard.
          </p>
          <p className="mb-4 fst-italic" style={{ color: '#e8c9a0' }}>
            Japanese is the vehicle. The destination is a richer life.
          </p>
          <BookButton
            location="about-banner"
            className="btn fw-bold px-5 py-3"
            style={{ background: '#d2691e', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1.1rem' }}
          >
            Book my free roadmap session →
          </BookButton>
          <p className="mt-3 mb-0" style={{ color: '#d9c4b0', fontSize: '0.9rem' }}>
            25 min · Free · No commitment
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
    </div>
  );
}
