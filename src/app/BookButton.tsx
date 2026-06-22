'use client';
import { track } from '@vercel/analytics';

const CALENDLY = 'https://calendly.com/daily_dose_japanese/roadmap_session';

interface BookButtonProps {
  children: React.ReactNode;
  location: string;          // where the button is (hero, navbar, banner…) — sent as event data
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BookButton({ children, location, href = CALENDLY, className, style }: BookButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => track('Book Session', { location })}
    >
      {children}
    </a>
  );
}
