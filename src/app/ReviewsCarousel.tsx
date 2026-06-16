'use client';
import { useRef } from 'react';

const reviews = [
  { text: 'There\'s no shortcut to learning a language. Having a native speaking tutor helps with the confidence to speak in real situations and given that DDJ is such a vibrant community, there\'s so much to learn from the discord group as well!', author: 'Student' },
  { text: 'Im quite shy but easily got in a comfortable rhythm with Yuki. Yuki welcomes any and all questions I ask, and I\'m never left confused by the end of the lesson. She fits well to my pace of learning and gives really good everyday examples during my lessons.', author: 'Student' },
  { text: 'I\'ve learned more in 3 months with DDJ than I did in the previous 6 months trying to memorize Hiragana and Katakana by myself. 😊', author: 'Student' },
  { text: 'DDJ has been a part of my Japanese learning journey for almost 10 months now. During that time, a lot has happened in my life, but thanks to DDJ, I\'ve been able to stay consistent with my Japanese studies. I always look forward to each lesson and the opportunity to learn something new. My goal is to be able to communicate with locals when I visit Japan for the first time, and thanks to the support of the DDJ team, I\'m confident that goal is within reach.', author: 'Student' },
  { text: 'I genuinely love my lessons with DDJ. Even on days when I\'m tired before class, the lessons always end up being the highlight of my day. They\'re fun, engaging, and leave me feeling motivated to keep learning. I always finish each lesson with a smile and can\'t wait for the next one!', author: 'Student' },
  { text: 'DDJ has been an amazing experience from the very beginning. I look forward to every class each week. The teachers are incredibly kind, patient, and supportive. They create a comfortable learning environment where making mistakes feels like a natural part of learning rather than something to be embarrassed about.', author: 'Student' },
  { text: 'I\'ve been learning Japanese with DDJ for over six months, and I\'ve made more progress than I ever expected. The lessons are structured, practical, and enjoyable, which has helped me stay motivated and consistent. I\'m genuinely excited to continue learning and seeing how much further I can go.', author: 'Student' },
  { text: 'I really enjoyed learning with Yuki-sensei. Her encouragement, clear explanations, and fun cultural insights made every lesson engaging and enjoyable. Beyond learning Japanese, I appreciated the connection we built during our lessons. Having a teacher you feel comfortable with makes a huge difference, and it kept me motivated to continue learning.', author: 'Student' },
];

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth; // scroll by one visible width (2 cards)
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 5,
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '1px solid #eee',
    background: '#fff',
    color: '#b85c2a',
    fontSize: '1.4rem',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        aria-label="Previous review"
        onClick={() => scroll('left')}
        style={{ ...arrowStyle, left: -18 }}
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="no-scrollbar d-flex gap-3"
        style={{ overflowX: 'auto', scrollSnapType: 'x mandatory' }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="review-card"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="p-3 bg-white h-100" style={{ borderRadius: 10, border: '1.5px solid #e0c9b0' }}>
              <div className="mb-2" style={{ fontSize: '1.1rem' }}>⭐⭐⭐⭐⭐</div>
              <p className="mb-0 small" style={{ color: '#3a2010', lineHeight: 1.6 }}>{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Next review"
        onClick={() => scroll('right')}
        style={{ ...arrowStyle, right: -18 }}
      >
        ›
      </button>
    </div>
  );
}
