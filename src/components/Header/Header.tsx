import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import ToggleDarkMode from './ToggleDarkMode';
import DarkModeIcon from '../UI/DarkModeIcon';
import { useAuthContext } from '../../contexts/AuthContext';

export function Header() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { user, login } = useAuthContext();

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-dusty-gray dark:border-dusty-black text-sm backdrop-blur-xl">
        <div className="h-16 md:h-20 flex mx-auto justify-between items-center w-full lg:w-5/6 px-4">
          <div className="md:hidden flex-1 items-center">
            {user && (
              <Link to="/comment/new">
                <DarkModeIcon
                  src="add.png"
                  alt="코멘트 등록하기"
                  className="icon h-6"
                />
              </Link>
            )}
          </div>
          <Link to="/">
            <DarkModeIcon
              src="brand.png"
              alt="브랜드"
              className="h-7 md:h-9 shrink-0"
            />
          </Link>
          <nav className="flex-1 flex items-center justify-end">
            <div className="flex items-center gap-7 lg:gap-10 md:mr-8">
              {user && (
                <Link to="/comment/new" className="hidden md:flex btn-header">
                  코멘트 등록하기
                </Link>
              )}
              <div className="flex justify-center mr-2 md:mr-0">
                <ToggleDarkMode />
              </div>
            </div>
            <div className="flex items-center relative">
              {!user && (
                <button type="button" onClick={login} className="btn-header">
                  로그인
                </button>
              )}
              <>
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
                {dropdown && (
                  <ProfileDropdown handleDropdown={handleDropdown} />
                )}
              </>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
