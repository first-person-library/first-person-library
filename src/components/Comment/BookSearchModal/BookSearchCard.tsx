import Icon from '../../UI/Icon';
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

  return (
    <div className="flex px-5 py-5 md:py-10 md:px-12 lg:px-13 first:border-t-0 border-t border-light-gray">
      <div className="w-2/5 md:w-1/5 flex items-center">
        <div className="w-3/4">
          <Icon src={thumbnail} alt={title} className="aspect-w-2 aspect-h-3" />
        </div>
      </div>
      <div className="w-3/5 md:w-4/5">
        <div className="flex flex-col justify-between h-full md:h-auto md:flex-row md:justify-between">
          <div className="mt-0 mb-auto md:mb-0">
            <p className="mb-2 md:mb-0 text-base md:text-lg font-bold text-dusty-black line-clamp-1">
              {title}
            </p>
            {0 < authors.length ? (
              <p className="text-sm md:text-base text-modal-black">
                {`${authors[0]} 지음${
                  0 < translators.length ? ` · ${translators[0]} 옮김` : ''
                }`}
              </p>
            ) : (
              <p className="mb-5"></p>
            )}
            <p className="text-xs leading-5 text-modal-black"></p>
          </div>
          <button
            onClick={() => handleBookSelect(book)}
            className="shrink-0 w-[110px] md:w-auto mt-auto md:mt-0 btn-modal btn-main-green"
          >
            선택하기
          </button>
        </div>
        {contents && (
          <div className="hidden md:block">
            <p className="line-clamp-4 border border-light-gray text-modal-black mt-2.5 text-sm">
              {contents}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
