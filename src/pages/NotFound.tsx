import DarkModeIcon from '../components/UI/DarkModeIcon';
import Icon from '../components/UI/Icon';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center">
      <Icon
        src="notfound.png"
        alt="페이지를 찾을 수 없습니다."
        className="w-52 md:w-64 lg:w-72 my-7 md:my-10 lg:my-12"
      />
      <h2 className="text-xl md:text-3xl lg:text-4xl">
        페이지를 찾을 수 없습니다.
      </h2>
      <p className="hidden md:block text-dusty2-black dark:text-normal-gray my-3 lg:my-5">
        찾으시는 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시길
        바랍니다.
      </p>
    </div>
  );
}
