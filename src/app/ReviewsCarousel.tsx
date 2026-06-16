'use client';
import { useRef } from 'react';

const reviews = [
  { text: 'There\'s no shortcut to learning a language. Having a native speaking tutor helps with the confidence to speak in real situations and given that DDJ is such a vibrant community, there\'s so much to learn from the discord group as well!', author: 'Student' },
  { text: 'Im quite shy but easily got in a comfortable rhythm with Yuki. Yuki welcomes any and all questions I ask, and I\'m never left confused by the end of the lesson. She fits well to my pace of learning and gives really good everyday examples during my lessons.', author: 'Student' },
  { text: 'ryo is very encouraging when it comes to any topic. Whether it\'s a difficulty, interest or other, you can rely on her always wanting the best for you, pushing you towards your goal, very kindly and understanding, without any pressure. i feel very comfortable, even if i am nervous about doing something that I\'m not good at.', author: 'Student' },
  { text: 'Good', author: 'Review 4' },
  { text: 'Great', author: 'Review 5' },
  { text: 'Excellent', author: 'Review 6' },
  { text: 'Amazing', author: 'Review 7' },
  { text: 'Wonderful', author: 'Review 8' },
  { text: 'Fantastic', author: 'Review 9' },
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
              <p className="mb-3 small" style={{ color: '#3a2010', lineHeight: 1.6 }}>{review.text}</p>
              <p className="mb-0 small fw-semibold" style={{ color: '#7a6a5c' }}>— {review.author}</p>
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
