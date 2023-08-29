import { useNavigate } from 'react-router-dom';
import usePageFlags from '../../../hooks/usePageFlags';
import { Comment } from '../../../types';
import DarkModeIcon from '../Icon/DarkModeIcon';

export default function CommentCard({ comment }: { comment: Comment }) {
  const navigate = useNavigate();
  const { backgroundColor, backgroundType, content, id, book } = comment;
  const { thumbnail, title } = book;
  const { HAS_COMMENTS, IS_COMMENTS_PAGE, IS_MYCOMMENTS_PAGE, IS_WRITE_PAGE } =
    usePageFlags();

  const handleClick = () => {
    if (IS_COMMENTS_PAGE || IS_WRITE_PAGE) return;

    if (IS_MYCOMMENTS_PAGE) {
      navigate(`/my/${id}`, { state: { savedComment: comment } });
    } else {
      navigate(`/comments/${title}`);
    }
  };

  return (
    <div className="flex justify-center my-3 md:my-0">
      <div
        className={`bg-bright-gray dark:bg-modal-black lg:mb-9 md:mb-7 flex-col flex items-center justify-center shadow-md ${
          HAS_COMMENTS
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
              !(IS_COMMENTS_PAGE || IS_WRITE_PAGE) &&
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
                  HAS_COMMENTS
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
                    HAS_COMMENTS
                      ? 'h-[119px] md:h-[200px] lg:h-[209px]'
                      : 'w-44 h-[264px]'
                  }
                  `}
              />
            )}
            <div
              className={`relative flex h-1/3 bg-white dark:bg-dark-point
                ${HAS_COMMENTS ? 'p-1 md:p-4' : 'p-4'}
              
              `}
            >
              <p
                className={`break-words font-nanum-myeongjo  overflow-y-hidden pt-1 md:pt-0 ${
                  HAS_COMMENTS ? 'text-xs md:text-base' : 'md:text-lg h-20'
                }`}
              >
                {content}
              </p>
              <div
                className={`absolute bottom-0 ${
                  HAS_COMMENTS ? 'text-xs md:text-base' : 'md:text-lg'
                }`}
              >
                <p
                  className={`line-clamp-1 ${
                    HAS_COMMENTS ? 'my-1 mr-1 md:my-4 md:mr-4' : 'my-4 mr-4'
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
