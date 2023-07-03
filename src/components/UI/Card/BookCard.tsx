import truncateText from '../../../utils/truncateText';
import Icon from '../Icon';

type BookCardProps = {
  colorCode: string;
  backgroundType: 'color' | 'blur';
  thumbnail?: string;
  title?: string;
  author?: string;
  comment?: string;
};

export default function BookCard({
  colorCode,
  backgroundType,
  thumbnail,
  title,
  author,
  comment,
}: BookCardProps) {
  const formattedTitle = truncateText(title, 13);
  const formattedauthor = truncateText(author, 7);

  return (
    <div className="flex justify-center">
      <div className="bg-bright-gray lg:mb-9 md:mb-7 w-[320px] h-[446px] md:w-[332px] md:h-[450px] flex-col flex items-center justify-center shadow-md">
        {!thumbnail && (
          <>
            <Icon
              src="/icon/book.png"
              alt="책 썸네일"
              className="w-6 md:w-7 mb-7 md:mb-11"
            />
            <span className="text-center text-lg lg:text-xl text-dusty-black">
              도서를 검색해주세요.
            </span>
          </>
        )}
        {thumbnail && (
          <>
            <div className="relative h-full flex flex-col w-full overflow-hidden">
              {backgroundType === 'color' ? (
                <div
                  style={{ backgroundColor: colorCode }}
                  className={`flex h-2/3 bg-no-repeat bg-contain`}
                ></div>
              ) : (
                <img
                  src={thumbnail}
                  alt="블러 배경"
                  className="flex h-2/3 bg-no-repeat bg-contain blur-2xl"
                />
              )}
              <img
                src={thumbnail}
                alt="책"
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-[264px] bg-no-repeat bg-contain"
              />
              <div className="relative flex h-1/3 bg-white p-4 ">
                <div className="break-words font-nanum-myeongjo md:text-lg h-20 overflow-y-hidden pt-1 md:pt-0">
                  {comment}
                </div>
                <div className="absolute bottom-4">
                  {`<${formattedTitle}> ${
                    formattedauthor ? `, ${formattedauthor}` : ''
                  }`}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
