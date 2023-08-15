import { useLocation, useNavigate } from 'react-router-dom';
import { Book, Comment } from '../../../types';
import DarkModeIcon from '../DarkModeIcon';

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentCardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { backgroundColor, backgroundType, content, id, book } = comment;
  const { thumbnail, title } = book as Book;

  const isHomePage = pathname === '/';
  const isMyPage = pathname.includes('/my');
  const isWritePage = ['/my/', '/new'].some((path) => pathname.includes(path));
  const isCommentsPage = pathname.includes('/comments');
  const hasComments = isHomePage || isCommentsPage || isMyPage;

  const handleClick = () => {
    if (isCommentsPage || isWritePage) return;

    if (isMyPage) {
      navigate(`/my/${id}`, { state: { savedComment: comment } });
    } else {
      navigate(`/comments/${title}`);
    }
  };

  return (
    <div className="flex justify-center my-3 md:my-0">
      <div
        className={`bg-bright-gray dark:bg-modal-black lg:mb-9 md:mb-7 flex-col flex items-center justify-center shadow-md ${
          hasComments
            ? 'w-[160px] h-[280px] md:w-[230px] md:h-[470px] lg:w-[280px] lg:h-[450px] xl:w-[266px] xl:h-[429px]'
            : 'w-[320px] h-[446px] md:w-[332px] md:h-[450px]'
        }
        `}
      >
        {!title ? (
          <>
            <DarkModeIcon
              src="book.png"
              alt="책 썸네일이 없습니다."
              className="w-6 md:w-7 mb-7 md:mb-11"
            />
            <span className="text-center text-lg lg:text-xl text-dusty-black dark:text-bright-gray">
              도서를 검색해주세요.
            </span>
          </>
        ) : (
          <div
            onClick={handleClick}
            className={`comment-card relative h-full flex flex-col w-full overflow-hidden ${
              !(isCommentsPage || isWritePage) &&
              'cursor-pointer hover:text-main-green dark:hover:text-dark-main-green hover:font-semibold'
            }`}
          >
            {backgroundType === 'color' ? (
              <div
                style={{ backgroundColor }}
                className={`flex h-2/3 bg-no-repeat bg-contain`}
              ></div>
            ) : (
              <img
                src={thumbnail}
                alt="블러 배경"
                className="flex h-2/3 bg-no-repeat bg-contain blur-xl"
              />
            )}
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                title={title}
                className={`absolute rounded-md top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-contain first-letter:
                ${
                  hasComments
                    ? 'h-[119px] md:h-[200px] lg:h-[209px]'
                    : 'w-44 h-[264px]'
                }
                `}
              />
            ) : (
              <DarkModeIcon
                src={'emptyimage.jpg'}
                alt={title}
                title={title}
                className={`absolute rounded-md top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-contain first-letter:
                  ${
                    hasComments
                      ? 'h-[119px] md:h-[200px] lg:h-[209px]'
                      : 'w-44 h-[264px]'
                  }
                  `}
              />
            )}
            <div
              className={`relative flex h-1/3 bg-white dark:bg-dark-point
                ${hasComments ? 'p-1 md:p-4' : 'p-4'}
              
              `}
            >
              <p
                className={`break-words font-nanum-myeongjo  overflow-y-hidden pt-1 md:pt-0 ${
                  hasComments ? 'text-xs md:text-base' : 'md:text-lg h-20'
                }`}
              >
                {content}
              </p>
              <div
                className={`absolute bottom-0 ${
                  hasComments ? 'text-xs md:text-base' : 'md:text-lg'
                }`}
              >
                <p
                  className={`line-clamp-1 ${
                    hasComments ? 'my-1 mr-1 md:my-4 md:mr-4' : 'my-4 mr-4'
                  }`}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
