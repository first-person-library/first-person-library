import BookSearchBar from './BookSearchBar';
import BookSearchCard from './BookSearchCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { search } from '../../../apis/bookAPI';
import { Books, Book } from '../../../types';
import { AxiosResponse } from 'axios';
import Icon from '../../UI/Icon';

type BookSearchModalProps = {
  onClose: () => void;
};

export default function BookSearchModal({ onClose }: BookSearchModalProps) {
  const keyword = useParams();

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery<AxiosResponse<Books<Book>, Error>>(
    ['books', keyword],
    () => search(keyword),
    { enabled: !!keyword }
  );

  return (
    <div className="relative h-screen md:h-fit bg-white overflow-hidden md:rounded-2xl">
      <div className="p-5 md:pt-14 md:pb-20 md:px-12 lg:pt-16 lg:pb-10 lg:px-13">
        <h2 className="md:hidden my-7 text-center font-semibold text-lg">
          도서 검색하기
        </h2>
        <div
          onClick={onClose}
          className="absolute top-12 right-5 md:top-5 md:right-7 lg:top-6 lg:right-8 text-modal-black cursor-pointer"
        >
          닫기
        </div>
        <BookSearchBar />
      </div>
      <ul className="search-modal max-h-[450px] overflow-y-auto">
        {books?.data.item.map((book) => (
          <BookSearchCard
            key={book.isbn}
            title={book.title}
            author={book.authorTypeAuthor}
            translator={book.authorTypeTranslator}
            description={book.description}
            cover={book.cover}
          />
        ))}
      </ul>
      <footer className="sticky bottom-0 border-t border-light-gray h-20 flex items-center justify-center">
        {books?.data.startIndex === '1' ? (
          ''
        ) : (
          <Icon src="/icon/modalright.png" alt="왼쪽" className="w-5" />
        )}
        <div className="px-4">
          <span>{books?.data.startIndex}</span>
          <span></span>
        </div>
        <Icon src="/icon/modalright.png" alt="오른쪽" className="w-5" />
      </footer>
    </div>
  );
}
