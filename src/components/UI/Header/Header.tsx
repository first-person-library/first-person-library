import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import ToggleDarkMode from './ToggleDarkMode';
import { useAuthContext } from '../../../contexts/AuthContext';
import DarkModeIcon from '../Icon/DarkModeIcon';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { user, login } = useAuthContext();
  const dropdownRef = useRef(null);
  const profileImgRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', handleDropdownClose);

    return () => {
      window.removeEventListener('click', handleDropdownClose);
    };
  }, []);

  const handleDropdownClose: EventListener = (e) => {
    if (
      e.target !== dropdownRef.current &&
      e.target !== profileImgRef.current
    ) {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleProfileImageClick = (e: MouseEvent) => {
    e.stopPropagation();
    toggleDropdown();
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white dark:bg-dark-bg border-dusty-gray dark:border-dusty-black text-sm backdrop-blur-lg bg-opacity-90">
      <div className="h-16 md:h-20 flex mx-auto justify-between items-center w-full lg:w-5/6 px-4">
        <Link to="/">
          <DarkModeIcon src="brand.png" alt="브랜드" className="h-7 md:h-9" />
        </Link>
        <nav className="flex">
          <div className="flex items-center gap-4 lg:gap-10 mr-4 lg:mr-8">
            {user && (
              <>
                <Link to="/comment/new" className="hidden md:flex btn-header">
                  코멘트 등록하기
                </Link>
                <Link to="/comment/new" className="flex md:hidden">
                  <DarkModeIcon
                    src="add.png"
                    alt="코멘트 등록하기"
                    className="icon h-6"
                  />
                </Link>
              </>
            )}
            <ToggleDarkMode />
          </div>
          <div className="relative">
            {!user && (
              <button type="button" onClick={login} className="btn-header">
                로그인
              </button>
            )}
            {user?.photoURL && (
              <button
                type="button"
                onClick={handleProfileImageClick}
                aria-label={showDropdown ? '드롭다운 닫기' : '드롭다운 열기'}
                className="relative flex items-center"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName!}
                  title={user?.displayName!}
                  ref={profileImgRef}
                  className="icon w-8 md:w-9 rounded-full cursor-pointer"
                />
                <span className="flex items-center text-dusty2-black dark:text-normal-gray text-xl ml-1 cursor-pointer">
                  {showDropdown ? '▴' : '▾'}
                </span>
              </button>
            )}
            {showDropdown && <ProfileDropdown dropdownRef={dropdownRef} />}
          </div>
        </nav>
      </div>
    </header>
  );
}
