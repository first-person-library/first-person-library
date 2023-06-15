import Icon from '../UI/Icon';

type Props = {
  color?: string;
};

export default function BookCard({ color }: Props) {
  return (
    <div className="flex justify-center">
      <div className="bg-bright-gray lg:mb-9 md:mb-7 w-[320px] h-[446px] md:w-[332px] md:h-[450px] flex-col flex items-center justify-center shadow-md">
        {true && (
          <>
            <Icon
              src="/icon/book.png"
              alt="책 썸네일"
              className="icon w-6 md:w-7 mb-7 md:mb-11"
            />
            <span className="text-center text-lg lg:text-xl text-dusty-black">
              도서를 검색해주세요.
            </span>
          </>
        )}
        {false && (
          <>
            <div className="relative h-full flex flex-col w-full overflow-hidden">
              <img
                src="/icon/bookcover.png"
                alt="블러 배경"
                className="flex h-2/3 bg-no-repeat bg-contain blur-2xl"
              />
              <img
                src="/icon/bookcover.png"
                alt="책"
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-[264px] bg-no-repeat bg-contain"
              />
              <div className="relative flex h-1/3 w-full bg-white p-4 ">
                <div className="break-words font-nanum-myeongjo md:text-lg">
                  한국에서 가장 유명한 다자이 오사무의 저서로 인생의 염증을 느낄
                  때 한번쯤 읽어볼만한 책
                </div>
                <div className="absolute bottom-4">
                  &lt;인간실격&gt;, 다자이 오사무 {color}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
