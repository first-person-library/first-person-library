import { useEffect, useState } from 'react';
import DarkModeIcon from '../Icon/DarkModeIcon';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showButton]);

  return (
    <button
      aria-label="맨 위로 가기"
      className={`fixed bottom-4 right-4 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 h-9 md:h-12 ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={handleScrollToTop}
    >
      <DarkModeIcon
        src="scroll-to-top.png"
        alt="맨 위로 가기"
        className="h-full cursor-pointer"
      />
    </button>
  );
}
