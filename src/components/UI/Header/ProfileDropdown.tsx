import { RefObject } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { OFFICIAL_EMAIL } from '../../../constants/officialInfo';
import DarkModeIcon from '../Icon/DarkModeIcon';

type ProfileDropdownProps = {
  dropdownRef: RefObject<HTMLDivElement>;
};

export default function ProfileDropdown({ dropdownRef }: ProfileDropdownProps) {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleContactClick = () => {
    const isMobile = window.innerWidth <= 1023;
    const link = document.getElementById('emailEnquiry');

    if (isMobile) {
      link?.setAttribute('href', `mailto:${OFFICIAL_EMAIL}`);
    } else {
      link?.setAttribute(
        'href',
        `https://mail.google.com/mail/?view=cm&fs=1&to=${OFFICIAL_EMAIL}`
      );
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute top-12 right-0 py-3 w-36 md:w-44 rounded-lg bg-white dark:bg-dark-point z-40 shadow-lg"
    >
      <Link to="/my" className="dropdown-li">
        <DarkModeIcon
          src="mycomment.png"
          alt="내가 쓴 코멘트"
          className="icon w-6 mr-2"
        />
        내가 쓴 코멘트
      </Link>
      <a
        id="emailEnquiry"
        onClick={handleContactClick}
        target="_blank"
        rel="noopener noreferrer"
        className="dropdown-li"
      >
        <DarkModeIcon src="help.png" alt="문의하기" className="icon w-6 mr-2" />
        문의하기
      </a>
      <div className="dropdown-li" onClick={handleLogout}>
        <DarkModeIcon
          src="logout.png"
          alt="로그아웃"
          className="icon w-6 mr-2"
        />
        로그아웃
      </div>
    </div>
  );
}
