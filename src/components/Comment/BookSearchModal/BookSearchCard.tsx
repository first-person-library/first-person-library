import DarkModeIcon from '../../UI/DarkModeIcon';
import { Book } from '../../../types';

type BookSearchCardProps = {
  book: Book;
  handleBookSelect: (book: Book) => void;
};

export default function BookSearchCard({
  book,
  handleBookSelect,
}: BookSearchCardProps) {
  const { title, thumbnail, authors, translators, contents } = book;
  const formatAuthorName = (author: string) => {
    return author.replace(/[\s]*엮음$/, '');
  };

  return (
    <div className="flex px-5 py-5 md:py-10 md:px-12 lg:px-13 first:border-t-0 border-t border-light-gray dark:border-dusty-black">
      <div className="w-2/5 md:w-1/5 flex items-center">
        <div className="w-3/4">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              title={title}
              className="w-full aspect-w-2 aspect-h-3"
            />
          ) : (
            <DarkModeIcon
              src={'emptyimage.jpg'}
              alt="도서 이미지 없음"
              title={title}
              className="w-full aspect-w-2 aspect-h-3"
            />
          )}
        </div>
      </div>
      <div className="w-3/5 md:w-4/5">
        <div className="flex flex-col justify-between h-full md:h-auto md:flex-row md:justify-between">
          <div>
            <p className="mb-2 md:mb-0 text-base md:text-lg font-bold text-dusty-black dark:text-white line-clamp-1">
              {title}
            </p>
            <div className="text-sm md:text-base text-modal-black dark:text-normal-gray">
              {0 < authors.length ? (
                <p>
                  {`${formatAuthorName(authors[0])} 지음${
                    0 < translators.length ? ` · ${translators[0]} 옮김` : ''
                  }`}
                </p>
              ) : (
                <p>해당 정보가 없습니다.</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleBookSelect(book)}
            className="shrink-0 w-[110px] md:w-auto mt-auto md:mt-0 btn-modal btn-main-green"
          >
            선택하기
          </button>
        </div>
        {contents && (
          <div className="hidden md:block">
            <p className="line-clamp-4 border border-light-gray dark:border-dusty2-black text-modal-black dark:text-normal-gray mt-2.5 text-sm">
              {contents}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
