import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../Navbar';
import CalendlyEmbed from '../CalendlyEmbed';
import HowItWorks from '../HowItWorks';

export const metadata: Metadata = {
  title: 'Book Your Session — Daily Dose Japanese',
  description: 'Pick a date and time for your Japanese roadmap session and tell us about your goals.',
};

export default function CalendlyPage() {
  return (
    <div className="container-fluid px-0" style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <div className="container py-5" style={{ maxWidth: 1000 }}>
        <div className="text-center mb-4">
          <p className="mb-2 fw-semibold" style={{ color: '#b85c2a', letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            BOOK YOUR SESSION
          </p>
          <h1 className="fw-bold section-title" style={{ color: '#2a1a0e' }}>
            Pick a time that works for you
          </h1>
          <p style={{ color: '#7a6a5c' }}>
            Choose a slot below and fill in your details — it only takes a minute.
          </p>
        </div>

        <CalendlyEmbed />
      </div>

      <HowItWorks />

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
