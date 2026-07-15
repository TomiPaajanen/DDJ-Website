import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar';
import BookButton from '../BookButton';

export const metadata: Metadata = {
  title: 'Native Japanese Teachers — Online Conversation Lessons',
  description: 'Meet our native Japanese teachers, each with their own style and specialty. Find your perfect match for online conversation lessons.',
};

const ACCENT = '#b85c2a';
const DARK = '#2a1a0e';

const teachers = [
  {
    name: 'Yuki',
    image: 'yuki.png',
    location: 'Canada',
    badge: 'Structured & Fun',
    specialties: ['5 years teaching experience', 'Structured learning', 'Expat experience'],
    perfectFor: 'Learners who want organized, step-by-step lessons',
  },
  {
    name: 'Nanaka',
    image: 'nanaka.png',
    location: 'Japan',
    badge: 'Beginner-Friendly',
    specialties: ['Absolute beginners', 'Grammar in English'],
    perfectFor: 'Complete beginners who want clear English explanations',
  },
  {
    name: 'Riko',
    image: 'riko.png',
    location: 'Japan',
    badge: 'Casual & Modern',
    specialties: ['Casual conversation', 'Youth slang'],
    perfectFor: 'Learners who want to sound natural — not textbook Japanese',
  },
  {
    name: 'Airi',
    image: 'airi.png',
    location: 'Japan',
    badge: 'Flexible Schedule',
    specialties: ['Natural conversation', 'Midweek & weekends'],
    perfectFor: 'Busy learners who need flexible midweek or weekend slots',
  },
  {
    name: 'Kanata',
    image: 'kanata.png',
    location: 'Japan',
    badge: 'Visual Learners',
    specialties: ['Visual teaching', 'Motivation', 'Former elementary teacher'],
    perfectFor: 'Visual learners and anyone who struggled with traditional methods',
  },
];

export default function Teachers() {
  return (
    <div className="container-fluid px-0" style={{ background: '#ffffff' }}>
      <Navbar background="#FAF6F1" />

      {/* Header */}
      <div style={{ background: '#fbf7f0' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>
          <p className="mb-2 fw-semibold" style={{ color: ACCENT, letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            OUR TEACHERS
          </p>
          <h1 className="fw-bold section-title mb-3" style={{ color: DARK }}>
            Meet your future senseis
          </h1>
          <p className="mb-0" style={{ color: '#7a6a5c', fontSize: '1.05rem', maxWidth: 600 }}>
            Every teacher at DDJ is a native Japanese speaker with their own style and specialty. We&apos;ll match you with the right fit.
          </p>
        </div>
      </div>

      {/* Teacher cards */}
      <div style={{ background: '#ffffff' }}>
        <div className="container py-5" style={{ maxWidth: 900 }}>
          {teachers.map(t => (
            <div
              key={t.name}
              className="position-relative p-4 mb-4"
              style={{ background: '#faf6f1', borderRadius: 16 }}
            >
              {/* Badge */}
              <span
                className="position-absolute fw-medium"
                style={{ top: 16, right: 16, background: '#fbe9dc', color: ACCENT, fontSize: 12, padding: '4px 12px', borderRadius: 20 }}
              >
                {t.badge}
              </span>

              <div className="row g-4 align-items-start">
                {/* Avatar */}
                <div className="col-auto">
                  <div
                    style={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', border: '3px solid #e8c9b0' }}
                  >
                    <Image
                      src={`/${t.image}`}
                      alt={t.name}
                      width={90}
                      height={90}
                      style={{ objectFit: 'cover', width: '100%', height: '100%', transform: 'scale(1.35)' }}
                    />
                  </div>
                </div>

                {/* Name + specialties */}
                <div className="col-12 col-md">
                  <p className="mb-1">
                    <span className="fw-bold" style={{ color: DARK, fontSize: '1.3rem' }}>{t.name}</span>{' '}
                    <span style={{ color: ACCENT, fontSize: '0.9rem' }}>sensei</span>
                  </p>
                  <p className="mb-3" style={{ color: '#7a6a5c', fontSize: '0.9rem' }}>📍 {t.location}</p>
                  <p className="mb-2 fw-semibold" style={{ color: '#9a8a7c', fontSize: '0.7rem', letterSpacing: '0.1em' }}>SPECIALTIES</p>
                  <div className="d-flex flex-wrap gap-2">
                    {t.specialties.map(s => (
                      <span
                        key={s}
                        style={{ background: '#fff', border: '1px solid #e0d0c0', borderRadius: 20, fontSize: 13, padding: '5px 12px', color: '#4a3728' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Perfect for */}
                <div className="col-12 col-md-5">
                  <p className="mb-2 fw-semibold" style={{ color: '#9a8a7c', fontSize: '0.7rem', letterSpacing: '0.1em' }}>PERFECT FOR</p>
                  <p className="mb-0" style={{ color: '#3a2c22', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.perfectFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing banner */}
      <div style={{ background: '#3d1f0f' }}>
        <div className="container text-center py-5" style={{ maxWidth: 700 }}>
          <h2 className="fw-bold mb-3 section-title" style={{ color: '#fdf6ec' }}>
            Not sure which sensei is right for you?
          </h2>
          <p className="mb-4" style={{ color: '#d9c4b0', fontSize: '1.05rem' }}>
            That&apos;s what the free session is for. We&apos;ll match you with the perfect fit.
          </p>
          <BookButton
            location="teachers-banner"
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
