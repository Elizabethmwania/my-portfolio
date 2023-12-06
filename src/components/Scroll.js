import { useEffect, useState } from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';

function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          color: 'gray', 
          background: 'transparent',
        }}
        aria-label="Scroll to top"
        >
          <ArrowCircleUpIcon />
        </button>
      )}
    </div>
  );
}

export default Scroll;
