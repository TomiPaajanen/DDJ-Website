import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../Navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy — Daily Dose Japanese',
  description: 'How Daily Dose Japanese collects, uses, and protects your personal data.',
};

export default function Privacy() {
  return (
    <div className="container-fluid px-0">
      <Navbar />

      {/* Content */}
      <div className="py-5 px-4" style={{ background: '#fbf7f0', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="mb-4" style={{ color: '#b85c2a', fontSize: '2rem' }}>Privacy Policy</h1>
          <div style={{ color: '#4a3728', lineHeight: 1.8 }}>
            <p>
              <strong>Last updated: May 2026</strong>
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>1. Information We Collect</h4>
            <p>
              When you book a free consultation through Calendly, you provide us with your name, email address, and timezone. This information is collected by Calendly (our scheduling partner) and shared with us so we can contact you and schedule your lesson.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>2. How We Use Your Information</h4>
            <p>
              We use your information solely to:
            </p>
            <ul>
              <li>Schedule and conduct your free consultation</li>
              <li>Send you lesson reminders and updates</li>
              <li>Communicate about your learning progress and goals</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>3. Data Storage & Security</h4>
            <p>
              Your data is stored securely in Calendly and our lesson management systems. We take reasonable measures to protect your information from unauthorized access. However, no online system is 100% secure.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>4. Your Rights (GDPR)</h4>
            <p>
              If you're located in the EU, you have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <strong>dailydosejapanese@gmail.com</strong>.
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>5. Calendly's Privacy</h4>
            <p>
              Calendly also collects and processes your data. For details, see{' '}
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#b85c2a' }}>
                Calendly's Privacy Policy
              </a>
              .
            </p>

            <h4 style={{ color: '#b85c2a', marginTop: '2rem' }}>6. Contact</h4>
            <p>
              If you have questions about this Privacy Policy, contact us at <strong>dailydosejapanese@gmail.com</strong>.
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
