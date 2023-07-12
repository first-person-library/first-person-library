import { useLocation } from 'react-router-dom';
import { Book, Comment } from '../../../types';
import truncateText from '../../../utils/truncateText';
import Icon from '../Icon';

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentCardProps) {
  const { backgroundColor, backgroundType, content } = comment;
  const { thumbnail, title, authors } = comment.book as Book;

  const baseFormattedTitle = truncateText(title, 10);
  const baseFormattedauthor = authors ? truncateText(authors[0], 5) : '';
  const mobileFormattedTitle = truncateText(title, 5);
  const mobileFormattedauthor = authors ? truncateText(authors[0], 3) : '';
  const bookInfo = `<${baseFormattedTitle}>${
    baseFormattedauthor && `, ${baseFormattedauthor}`
  }`;

  const location = useLocation();
  const { pathname } = location;
  const isHomePage = pathname === '/';

  const isMobile = window.innerWidth <= 1024;

  return (
    <div className="flex justify-center">
      <div
        className={`bg-bright-gray lg:mb-9 md:mb-7 flex-col flex items-center justify-center shadow-md   ${
          isHomePage
            ? 'w-[160px] h-[280px] md:w-[230px] md:h-[470px] lg:w-[280px] lg:h-[450px] xl:w-[266px] xl:h-[429px]' // grid
            : 'w-[320px] h-[446px] md:w-[332px] md:h-[450px]'
        }`}
      >
        {!title ? (
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
        ) : (
          <div className="relative h-full flex flex-col w-full overflow-hidden">
            {backgroundType === 'color' ? (
              <div
                style={{ backgroundColor }}
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
              src={thumbnail || '/icon/emptyimage.jpg'}
              alt={title}
              title={title}
              className={`absolute rounded-md top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-contain first-letter:
                ${
                  isHomePage
                    ? 'h-[119px] md:h-[200px] lg:h-[209px]'
                    : 'w-44 h-[264px]'
                }
                `}
            />
            <div
              className={`relative flex h-1/3 bg-white 
                ${isHomePage ? 'p-1 md:p-4' : 'p-4'}
              
              `}
            >
              <div
                className={`break-words font-nanum-myeongjo  overflow-y-hidden pt-1 md:pt-0 ${
                  isHomePage ? 'text-xs md:text-base' : 'md:text-lg h-20'
                }`}
              >
                {content}
              </div>
              <div
                className={`absolute ${
                  isHomePage
                    ? 'text-xs md:text-base bottom-1 md:bottom-4 '
                    : 'md:text-lg bottom-4'
                }`}
              >
                {isHomePage
                  ? isMobile
                    ? `<${mobileFormattedTitle}>${
                        mobileFormattedauthor && `, ${mobileFormattedauthor}`
                      }`
                    : bookInfo
                  : bookInfo}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
