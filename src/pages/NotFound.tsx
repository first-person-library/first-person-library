import DarkModeIcon from '../components/UI/DarkModeIcon';
import Icon from '../components/UI/Icon';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center">
      <Icon
        src="notfound.png"
        alt="페이지를 찾을 수 없습니다."
        className="h-40 md:h-64 lg:h-72 my-7 md:my-10 lg:my-12"
      />
      <h2 className="text-xl md:text-3xl lg:text-4xl">
        페이지를 찾을 수 없습니다.
      </h2>
    </div>
  );
}
