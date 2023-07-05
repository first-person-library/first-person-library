import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ProfileDropdown from './ProfileDropdown';
import DarkmodeIcon from './DarkmodeIcon';
import Icon from '../UI/Icon';
import { useAuthContext } from '../../contexts/AuthContext';

export function Header() {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { user, login } = useAuthContext();

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-dusty-gray text-sm">
      <div className="h-16 md:h-[120px] flex mx-auto justify-between items-center w-full lg:w-4/6 px-4">
        <button
          className="md:hidden flex items-center w-6 h-6"
          onClick={() => setMobileNavbar((prev) => !prev)}
        >
          {mobileNavbar ? (
            <Icon src="/icon/exit.png" alt="모바일 메뉴 닫기" />
          ) : (
            <Icon src="/icon/more.png" alt="모바일 메뉴 열기" />
          )}
        </button>
        <Link to="/">
          <Icon src="/icon/brand.png" alt="brand" className="h-7 md:h-9" />
        </Link>
        <nav className="flex">
          <ul className="hidden md:flex items-center md:gap-7 lg:gap-10 md:mr-8">
            <li>
              <div className="w-64">
                <Search />
              </div>
            </li>
            {user && (
              <>
                <li className="md:flex lg:hidden">
                  <Icon
                    src="/icon/add.png"
                    alt="코멘트 등록하기"
                    className="icon w-7"
                  />
                </li>

                <li className="hidden lg:flex">
                  <Link to="/comment/new" className="">
                    코멘트 등록하기
                  </Link>
                </li>
              </>
            )}
            <li>
              <DarkmodeIcon />
            </li>
          </ul>
          <div className="flex items-center relative">
            {!user && (
              <button
                onClick={login}
                className="hover:text-dusty2-black hover:border-b border-dusty2-black"
              >
                로그인
              </button>
            )}
            {user && (
              <Icon
                src={user?.photoURL || '/icon/my.png'}
                alt={user?.displayName || '프로필 이미지'}
                onClick={handleDropdown}
                className="icon w-8 md:w-9 rounded-full"
              />
            )}
            {dropdown && <ProfileDropdown setDropdown={setDropdown} />}
          </div>
        </nav>
      </div>
      {mobileNavbar && (
        <nav className="md:hidden mx-auto w-4/5">
          <ul className="flex flex-col gap-3 mb-5">
            <li>
              <Search />
            </li>
            {user && (
              <li>
                <Link to="/comments/new">코멘트 등록하기</Link>
              </li>
            )}
            <li>
              <DarkmodeIcon />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
