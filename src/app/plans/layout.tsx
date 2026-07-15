import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japanese Lesson Plans & Pricing — Private & Group Classes',
  description: 'Choose the right Japanese lesson plan for your level and goals — private and group classes with native teachers. Flexible monthly pricing.',
};

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return children;
}
