import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  const teachers = [1, 2, 3, 4, 5].map(n => ({
    id: n,
    name: `Sensei ${n}`,
    bio: 'Native speaker with 5+ years teaching experience in conversational and written Japanese.',
  }));

  return (
    <div className="container-fluid px-0">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4 py-3">
        <Link href="/" className="navbar-brand">
          <Image
            src="https://t4.ftcdn.net/jpg/06/96/89/13/240_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg"
            alt="Company Logo"
            height={40}
            width={120}
            className="d-inline-block"
          />
        </Link>
        <div className="ms-auto">
          <ul className="nav gap-1">
            {['About', 'Teachers', 'Booking', 'Plans', 'FAQ'].map(page => (
              <li key={page} className="nav-item">
                <a className="nav-link fw-medium text-dark" href={`/${page.toLowerCase()}`}>{page}</a>
              </li>
            ))}
            <li className="nav-item ms-2">
              <a href="/booking" className="btn btn-success btn-sm px-3">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-light py-5 px-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3">Learn Japanese with Native Speakers</h1>
              <p className="lead text-muted mb-4">
                From beginner hiragana to business-level fluency — live lessons, flexible scheduling, real progress.
              </p>
              <a href="/booking" className="btn btn-success btn-lg me-3">Get Started Free</a>
              <a href="/about" className="btn btn-outline-secondary btn-lg">Learn More</a>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <Image
                src="https://web-japan.org/kidsweb/explore/calendar/assets/img/april/schoolyear01.jpg"
                alt="Student Learning Japanese"
                width={500}
                height={350}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
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

      {/* Discord CTA */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 text-center mb-3 mb-md-0">
              <Image
                src="https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg"
                alt="Discord"
                width={80}
                height={80}
                className="rounded"
              />
            </div>
            <div className="col-md-7">
              <h3 className="fw-bold mb-1">Join our Discord Community</h3>
              <p className="mb-0 opacity-75">Connect with learners, get homework help, and practice 24/7.</p>
            </div>
            <div className="col-md-3 text-md-end mt-3 mt-md-0">
              <a href="/joinNow" className="btn btn-light btn-lg fw-semibold">Join Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Meet Our Teachers</h2>
        <div className="row justify-content-center g-4">
          {teachers.map(t => (
            <div key={t.id} className="col-6 col-md-4 col-lg-2 text-center">
              <Image
                src="https://cdn.vectorstock.com/i/500p/98/38/gray-female-head-placeholder-vector-23519838.jpg"
                alt={t.name}
                width={120}
                height={120}
                className="rounded-circle shadow mb-3"
              />
              <h6 className="fw-semibold mb-1">{t.name}</h6>
              <p className="text-muted small">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <div className="accordion col-lg-8 mx-auto" id="faqAccordion">
            {[
              { id: 'one', q: 'Do I need any prior Japanese knowledge?', a: 'Not at all — we welcome complete beginners and tailor lessons to your level.' },
              { id: 'two', q: 'How long are the lessons?', a: 'Standard lessons are 50 minutes, but we offer 25-minute sessions as well.' },
              { id: 'three', q: 'Can I switch teachers?', a: 'Yes, you can try different teachers and switch at any time.' },
            ].map(({ id, q, a }) => (
              <div key={id} className="accordion-item border-0 mb-2 shadow-sm rounded overflow-hidden">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-medium"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded="false"
                  >
                    {q}
                  </button>
                </h3>
                <div id={`collapse-${id}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top small">
        © {new Date().getFullYear()} Japanese School. All rights reserved.
      </footer>

    </div>
  );
}