import {useEffect} from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';
function Scroll() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          color: '#EA580C',
          width: '50px',
          height: '50px',
        }}
      >
        <ArrowCircleUpIcon />
      </button>
    </div>
  );
}
export default Scroll