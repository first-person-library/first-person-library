import { useEffect, useState } from 'react';
import DarkModeIcon from './DarkModeIcon';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight / 2);
    };
    console.log('df');
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showButton]);

  return (
    <DarkModeIcon
      src={'scroll-to-top.png'}
      alt="맨 위로 가기"
      className={`fixed bottom-4 right-4 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 h-9 md:h-12 hover:cursor-pointer ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={handleScrollToTop}
    />
  );
}
