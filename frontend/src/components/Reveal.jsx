import { useEffect, useRef, useState } from 'react';

const delayClasses = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
  4: 'reveal-delay-4',
};

// Fades + slides children into view the first time they cross into the viewport.
// Wrap a section heading, card grid, or hero block with it for a subtle scroll entrance.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClasses[delay] || ''} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
