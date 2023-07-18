import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import ToggleDarkMode from './ToggleDarkMode';
import DarkModeIcon from '../UI/DarkModeIcon';
import { useAuthContext } from '../../contexts/AuthContext';

export function Header() {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { user, login } = useAuthContext();

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-dusty-gray dark:border-modal-black text-sm dark:bg-dark-bg">
      <div className="h-16 md:h-[120px] flex mx-auto justify-between items-center w-full lg:w-5/6 px-4">
        <button
          type="button"
          className="md:hidden flex items-center w-6 h-6"
          onClick={() => setMobileNavbar((prev) => !prev)}
        >
          {mobileNavbar ? (
            <DarkModeIcon src="exit.png" alt="모바일 메뉴 닫기" />
          ) : (
            <DarkModeIcon src="more.png" alt="모바일 메뉴 열기" />
          )}
        </button>
        <Link to="/">
          <DarkModeIcon src="brand.png" alt="브랜드" className="h-7 md:h-9" />
        </Link>
        <nav className="flex">
          <ul className="hidden md:flex items-center md:gap-7 lg:gap-10 md:mr-8">
            {user && (
              <>
                <li className="md:block lg:hidden">
                  <Link to="/comment/new">
                    <DarkModeIcon
                      src="add.png"
                      alt="코멘트 등록하기"
                      className="icon w-7"
                    />
                  </Link>
                </li>
                <li className="hidden lg:block btn-header">
                  <Link to="/comment/new">코멘트 등록하기</Link>
                </li>
              </>
            )}
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
          <div className="flex items-center relative">
            {!user && (
              <button type="button" onClick={login} className="btn-header">
                로그인
              </button>
            )}
            {user &&
              (user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName!}
                  title={user?.displayName!}
                  onClick={handleDropdown}
                  className="icon w-8 md:w-9 rounded-full"
                />
              ) : (
                <DarkModeIcon
                  src={'my.png'}
                  alt={'프로필 이미지'}
                  title={'프로필 이미지'}
                  onClick={handleDropdown}
                  className="icon w-8 md:w-9 rounded-full"
                />
              ))}
            {dropdown && <ProfileDropdown handleDropdown={handleDropdown} />}
          </div>
        </nav>
      </div>
      {mobileNavbar && (
        <nav className="md:hidden mx-auto w-4/5 ">
          <ul className="flex flex-col gap-3 mb-5">
            {user && (
              <li>
                <Link to="/comment/new">코멘트 등록하기</Link>
              </li>
            )}
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
