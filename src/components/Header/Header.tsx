import { useState } from 'react';
import { Link } from 'react-router-dom';
import exit from '../../assets/icon/exit.png';
import more from '../../assets/icon/more.png';
import brand from '../../assets/icon/brand.png';
import my from '../../assets/icon/my.png';
import add from '../../assets/icon/add.png';
import Search from './Search';
import ProfileDropdown from './ProfileDropdown';
import DarkmodeIcon from './DarkmodeIcon';

const Header = () => {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-dusty-gray text-sm">
      <div className="h-16 md:h-[120px] flex mx-auto justify-between items-center w-full lg:w-4/6 px-4">
        <button
          className="md:hidden flex items-center w-6 h-6"
          onClick={() => setMobileNavbar((prev) => !prev)}
        >
          {mobileNavbar ? (
            <img src={exit} alt="모바일 메뉴 닫기" />
          ) : (
            <img src={more} alt="모바일 메뉴 열기" />
          )}
        </button>
        <Link to="/">
          <img src={brand} alt="brand" className="h-7 md:h-9" />
        </Link>
        <nav className="flex">
          <ul className="hidden md:flex items-center md:gap-7 lg:gap-10 md:mr-8">
            <li>
              <Search />
            </li>
            <li className="md:flex lg:hidden">
              <img
                src={add}
                alt="코멘트 등록하기"
                className="w-7 h-6 bg-no-repeat bg-contain cursor-pointer"
              />
            </li>
            <li className="hidden lg:flex">
              <Link to="/comment/new" className="">
                코멘트 등록하기
              </Link>
            </li>
            <li>
              <DarkmodeIcon />
            </li>
          </ul>
          <div className="flex items-center relative">
            {true && (
              <Link to="/">
                <button className="hover:text-dusty2-black hover:border-b border-dusty2-black">
                  로그인
                </button>
              </Link>
            )}
            {false && (
              <img
                src={my}
                alt="프로필 이미지"
                onClick={() => setDropdown((prev) => !prev)}
                className="w-8 h-8 md:w-9 md:h-9 bg-no-repeat bg-contain cursor-pointer"
              />
            )}
            {dropdown && <ProfileDropdown />}
          </div>
        </nav>
      </div>
      {mobileNavbar && (
        <nav className="md:hidden mx-auto w-4/5">
          <ul className="flex flex-col gap-3 mb-5">
            <li>
              <Search />
            </li>
            <li>
              <Link to="/comments/new">코멘트 등록하기</Link>
            </li>
            <li>
              <DarkmodeIcon />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
