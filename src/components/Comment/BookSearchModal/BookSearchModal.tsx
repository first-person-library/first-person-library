import BookSearchBar from './BookSearchBar';
import BookSearchCard from './BookSearchCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { search } from '../../../apis/bookAPI';
import { Books, Book } from '../../../types';
import { AxiosResponse } from 'axios';

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
    <div className="h-screen md:h-fit bg-white overflow-hidden md:rounded-2xl">
      <div className="p-5 md:pt-14 md:pb-20 md:px-12 lg:pt-16 lg:pb-10 lg:px-13 ">
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
        <ul>
          {books?.data.item.map((book) => (
            <BookSearchCard
              key={book.isbn}
              title={book.title}
              author={book.author}
              pubDate={book.pubDate}
              description={book.description}
              cover={book.cover}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
