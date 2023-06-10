import { Link } from 'react-router-dom';
import help from '../../assets/icon/help.png';
import logout from '../../assets/icon/logout.png';
import mycomment from '../../assets/icon/mycomment.png';
import settings from '../../assets/icon/settings.png';

const ProfileDropdown = () => (
  <ul
    id="user-info-ul"
    className="absolute right-0 top-full py-3 w-40 rounded-lg bg-white z-40 shadow-lg"
  >
    <li className="flex items-center px-7 py-3 hover:bg-bright-gray cursor-pointer">
      <img
        src={mycomment}
        alt="My 코멘트"
        className="bg-no-repeat bg-contain w-6 h-6 mr-2"
      />
      <Link to="/">My 코멘트</Link>
    </li>
    <li className="flex items-center px-7 py-3 hover:bg-bright-gray cursor-pointer">
      <img
        src={settings}
        alt="정보수정"
        className="bg-no-repeat bg-contain w-6 h-6 mr-2"
      />
      <Link to="/">정보수정</Link>
    </li>
    <li className="flex items-center px-7 py-3 hover:bg-bright-gray cursor-pointer">
      <img
        src={help}
        alt="문의하기"
        className="bg-no-repeat bg-contain w-6 h-6 mr-2"
      />
      <Link to="/">문의하기</Link>
    </li>
    <li className="flex items-center px-7 py-3 hover:bg-bright-gray cursor-pointer">
      <img
        src={logout}
        alt="로그아웃"
        className="bg-no-repeat bg-contain w-6 h-6 mr-2"
      />
      <Link to="/">로그아웃</Link>
    </li>
  </ul>
);

export default ProfileDropdown;
