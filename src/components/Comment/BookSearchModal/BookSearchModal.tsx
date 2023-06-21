import { ChangeEvent, useState } from 'react';
import BookSearchBar from './BookSearchBar';
import BookSearchCard from './BookSearchCard';
import { useQuery } from '@tanstack/react-query';
import { search } from '../../../apis/bookAPI';
import { Books, Book } from '../../../types';
import { AxiosResponse } from 'axios';
import BookSearchPagenation from './BookSearchPagenation';
import BookSearchManual from './BookSearchManual';

type BookSearchModalProps = {
  onClose: () => void;
};

export default function BookSearchModal({ onClose }: BookSearchModalProps) {
  const [keyword, setKeyword] = useState<string>('');

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery<AxiosResponse<Books<Book>, Error>>(
    ['books'],
    () => search({ keyword })
    // {
    //   enabled: !!keyword,
    // }
  );

  console.log(books);
  console.log(error);

  const lastIndex =
    books?.data?.itemsPerPage &&
    books?.data?.totalResults &&
    books.data.itemsPerPage <= books.data.totalResults
      ? Math.ceil(books.data.totalResults / books.data.itemsPerPage)
      : undefined;

  console.log(lastIndex);

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const removeKeyword = () => {
    setKeyword('');
  };

  return (
    <div className="relative flex flex-col h-full md:h-fit bg-white overflow-hidden md:rounded-2xl pt-5 md:pt-14 lg:pt-16 ">
      <div className="p-5 md:pb-9 md:px-12 lg:px-13">
        <h2 className="md:hidden my-7 text-center font-semibold text-lg">
          도서 검색하기
        </h2>
        <div
          onClick={onClose}
          className="absolute top-12 right-5 md:top-5 md:right-7 lg:top-6 lg:right-8 text-modal-black cursor-pointer"
        >
          닫기
        </div>
        <BookSearchBar
          keyword={keyword}
          onChange={handleKeyword}
          removeKeyword={removeKeyword}
        />
      </div>
      <div>
        {!keyword ? (
          <BookSearchManual />
        ) : (
          <>
            <ul className="max-h-[450px] overflow-y-auto border-t border-light-gray">
              {books?.data.item.map((book, index) => (
                <BookSearchCard
                  key={book.isbn}
                  index={index}
                  title={book.title}
                  author={book.authorTypeAuthor}
                  translator={book.authorTypeTranslator}
                  description={book.description}
                  cover={book.cover}
                />
              ))}
            </ul>
            <BookSearchPagenation
              startIndex={books?.data.startIndex}
              lastIndex={lastIndex}
            />
          </>
        )}
      </div>
    </div>
  );
}
