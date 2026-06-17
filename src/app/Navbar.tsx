'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  background?: string;
  brandFontSize?: string;
  subtitleFontSize?: string;
  paddingY?: string;
  highlightPlans?: boolean;
}

const ACCENT = '#b85c2a';
const BUTTON_COLOR = '#b85c2a';

export default function Navbar({
  background = '#f5ede0',
  brandFontSize = '1.1rem',
  subtitleFontSize = '0.8rem',
  paddingY = '0.75rem',
  highlightPlans = false,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkClass = 'nav-link fw-medium text-dark';
  const buttonStyle = {
    background: BUTTON_COLOR,
    color: '#fff',
    borderRadius: 8,
    border: 'none',
  };

  return (
    <nav className="navbar navbar-light border-bottom shadow-sm px-4" style={{ background, paddingTop: paddingY, paddingBottom: paddingY }}>
      <div className="container-fluid px-0 d-flex align-items-center">
        <Link href="/" className="navbar-brand d-flex flex-column" style={{ fontFamily: 'var(--font-kaisei-decol)', color: ACCENT, fontSize: brandFontSize, fontWeight: 700 }}>
          <span>Daily Dose Japanese</span>
          <span style={{ fontSize: subtitleFontSize, fontWeight: 400 }}>Online Japanese School</span>
        </Link>

        {/* Desktop menu */}
        <div className="d-none d-lg-flex ms-auto gap-3 align-items-center">
          <Link className={linkClass} href="/plans">About</Link>
          <Link className={linkClass} href="/#teachers">Teachers</Link>
          <Link className={linkClass} href="/plans">Information</Link>
          <Link className={linkClass} href="/plans" style={highlightPlans ? { color: ACCENT } : undefined}>Plans</Link>
          <Link className={linkClass} href="/#faq">FAQ</Link>
          <a
            href="https://calendly.com/daily_dose_japanese/roadmap_session"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm px-3 fw-bold"
            style={buttonStyle}
          >
            Book Session
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="d-lg-none ms-auto border-0 bg-transparent"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          style={{ padding: '0.5rem' }}
        >
          <span style={{ display: 'block', width: 28, height: 3, background: ACCENT, margin: '5px 0', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 28, height: 3, background: ACCENT, margin: '5px 0', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 28, height: 3, background: ACCENT, margin: '5px 0', borderRadius: 2 }}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="d-lg-none w-100">
          <div className="d-flex flex-column gap-2 pt-3 pb-2">
            <Link className={linkClass} href="/plans" onClick={() => setOpen(false)}>About</Link>
            <Link className={linkClass} href="/#teachers" onClick={() => setOpen(false)}>Teachers</Link>
            <Link className={linkClass} href="/plans" onClick={() => setOpen(false)}>Information</Link>
            <Link className={linkClass} href="/plans" style={highlightPlans ? { color: ACCENT } : undefined} onClick={() => setOpen(false)}>Plans</Link>
            <Link className={linkClass} href="/#faq" onClick={() => setOpen(false)}>FAQ</Link>
            <a
              href="https://calendly.com/daily_dose_japanese/roadmap_session"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm px-3 fw-bold align-self-start"
              style={buttonStyle}
            >
              Book Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
