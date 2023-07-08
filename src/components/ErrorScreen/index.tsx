import Icon from '../UI/Icon';

export default function ErrorScreen() {
  return (
    <div className="h-full flex flex-col items-center">
      <Icon
        src="/icon/error.png"
        alt="에러 메시지"
        className="w-12 md:w-16 lg:w-24 my-7 md:my-10 lg:my-12"
      />
      <h2 className="text-xl md:text-3xl lg:text-4xl">오류가 발생했습니다.</h2>
      <p className="text-dusty2-black my-3 lg:my-5">
        원활한 사용을 위해 새로고침을 진행해 주세요.
      </p>
    </div>
  );
}
