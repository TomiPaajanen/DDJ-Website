import Link from 'next/link';

export default function Terms() {
  return (
    <div className="container-fluid px-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom shadow-sm px-4 py-3" style={{ background: '#f5ede0' }}>
        <Link href="/" className="navbar-brand d-flex flex-column" style={{ fontFamily: 'var(--font-kaisei-decol)', color: '#b85c2a', fontSize: '1.2rem', fontWeight: 700 }}>
          <span>Daily Dose Japanese</span>
          <span style={{ fontSize: '0.6rem', fontWeight: 400 }}>Online Japanese School</span>
        </Link>
        <div className="ms-auto">
          <ul className="nav gap-1">
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" href="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" href="/plans">Plans</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" href="/#faq">FAQ</Link>
            </li>
            <li className="nav-item ms-2">
              <a
                href="https://calendly.com/daily_dose_japanese/roadmap_session"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm px-3 fw-bold"
                style={{ background: 'linear-gradient(to right, #b85c2a, #f3c789)', color: '#fff', borderRadius: 50, border: 'none' }}
              >
                Book My Free Session
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="py-5 px-4" style={{ background: '#fbf7f0', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="mb-4" style={{ color: '#b85c2a', fontSize: '2rem' }}>Terms of Service</h1>
          <div style={{ color: '#4a3728', lineHeight: 1.8 }}>
            <p>
              <strong>Last updated: May 2026</strong>
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>1. Acceptance of Terms</h4>
            <p>
              By accessing and using the Daily Dose Japanese website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>2. Website Use</h4>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe upon others' rights or restrict their use and enjoyment. Prohibited behaviors include harassing or causing distress or inconvenience to any person, disrupting the normal flow of dialogue within our website, and more.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>3. Intellectual Property</h4>
            <p>
              All content on this website — including text, images, lesson materials, and curriculum — is the property of Daily Dose Japanese and is protected by copyright law. You may not reproduce, distribute, or transmit this content without our written permission.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>4. Lessons & Rescheduling</h4>
            <p>
              When you enroll in lessons:
            </p>
            <ul>
              <li>Lessons are 50 minutes each.</li>
              <li>You can reschedule lessons up to 12 hours in advance.</li>
              <li>Unused lessons roll over within the same month.</li>
              <li>Cancellation and refund terms are in your enrollment agreement.</li>
            </ul>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>5. Disclaimer of Liability</h4>
            <p>
              Daily Dose Japanese provides its website and services on an "as-is" basis. We do not warrant that the site will be uninterrupted or error-free. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including any implied warranties of merchantability or fitness for a particular purpose.
            </p>
            <p>
              We are not responsible for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or services.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>6. Limitation of Liability</h4>
            <p>
              Our total liability to you for any claim arising out of or relating to this agreement shall not exceed the amount you paid for lessons in the past 12 months, or $100, whichever is less.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>7. Changes to Terms</h4>
            <p>
              We may update these Terms of Service at any time. Changes become effective when posted to the site. Your continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>8. Governing Law</h4>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Japan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>9. Contact</h4>
            <p>
              If you have questions about these Terms of Service, contact us at <strong>contact@dailydosejapanese.com</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top small" style={{ background: '#fff' }}>
        <div className="mb-2">
          <Link href="/privacy" className="text-muted text-decoration-none mx-2">Privacy Policy</Link>
          <Link href="/terms" className="text-muted text-decoration-none mx-2">Terms of Service</Link>
        </div>
        © {new Date().getFullYear()} Daily Dose Japanese. All rights reserved.
      </footer>
    </div>
  );
}
