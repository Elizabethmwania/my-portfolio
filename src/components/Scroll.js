import { useEffect, useState } from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';

function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled down, hide when at the top
      setShowButton(window.scrollY > 100); // Adjust the threshold as needed
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
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
            color: '#EA580C',
            width: '50px',
            height: '50px',
            backgroundColor: '#ffffff',
            border: '1px solid #EA580C',
            borderRadius: '50%',
            cursor: 'pointer',
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
