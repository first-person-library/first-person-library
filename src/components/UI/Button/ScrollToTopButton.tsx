import { useEffect, useState } from 'react';
import DarkModeIcon from '../Icon/DarkModeIcon';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showButton]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="맨 위로 가기"
      className={`hidden lg:block fixed bottom-20 right-20 h-9 md:h-12 ${
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
