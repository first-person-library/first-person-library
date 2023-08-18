import { useState, useRef, useEffect } from 'react';
import BookSearchBar from './BookSearchBar';
import BookSearchCard from './BookSearchCard';
import { useQuery } from '@tanstack/react-query';
import { Books, Book } from '../../types';
import BookSearchPagenation from './BookSearchPagenation';
import BookSearchManual from './BookSearchManual';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorScreen from '../UI/ErrorScreen';
import { search } from '../../apis/bookAPI';

type BookSearchModalProps = {
  onClose: () => void;
  onSelect: (book: Book) => void;
};

export default function BookSearchModal({
  onClose,
  onSelect,
}: BookSearchModalProps) {
  const PER_PAGE = 10;
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [keywords, setKeywords] = useState<string[]>(() => {
    const keywordsString = localStorage.getItem('keywords');
    return keywordsString ? JSON.parse(keywordsString) : [];
  });

  const {
    isLoading,
    isError,
    data: books,
  } = useQuery<Books<Book>>(
    ['books', query, page, PER_PAGE],
    () => search({ query, page, size: PER_PAGE }),
    {
      enabled: !!query,
    }
  );

  const meta = books?.meta;
  const totalPages = meta?.pageable_count
    ? Math.ceil(meta.pageable_count / PER_PAGE)
    : 0;

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const previousPage = () => {
    setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChange = (query: string) => {
    setQuery(query);
    setPage(1);
  };

  const searchSelectedKeyword = (keyword: string) => {
    setQuery(keyword);

    if (inputRef.current !== null) {
      inputRef.current.value = keyword;
    }
  };

  const addKeyword = (query: string) => {
    setKeywords((prevKeywords) => {
      if (prevKeywords.includes(query)) return prevKeywords;

      if (10 <= prevKeywords.length) {
        const newKeywords = prevKeywords.slice(1);
        return [...newKeywords, query];
      }

      return [...prevKeywords, query];
    });
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const discardKeywords = () => {
    setKeywords([]);
  };

  const handleBookSelect = (book: Book) => {
    onSelect(book);
  };

  return (
    <div className="relative flex flex-col w-full h-full md:h-fit bg-white dark:bg-dark-point dark:border dark:border-dusty-black overflow-hidden md:rounded-2xl pt-5 md:pt-14 lg:pt-16">
      <div className="p-5 md:pb-9 md:px-12 lg:px-13">
        <h2 className="md:hidden my-7 text-center font-semibold text-lg">
          도서 검색하기
        </h2>
        <div
          onClick={onClose}
          className="absolute top-12 right-5 md:top-5 md:right-7 lg:top-6 lg:right-8 text-modal-black dark:text-white cursor-pointer"
        >
          닫기
        </div>
        <BookSearchBar
          inputRef={inputRef}
          onChange={handleChange}
          addKeyword={addKeyword}
        />
      </div>
      <div>
        {!query ? (
          <BookSearchManual
            keywords={keywords}
            removeKeyword={removeKeyword}
            discardKeywords={discardKeywords}
            searchSelectedKeyword={searchSelectedKeyword}
          />
        ) : (
          <>
            <div className="h-[450px] overflow-y-auto border-t border-light-gray dark:border-dusty-black">
              {isLoading && <LoadingSpinner />}
              {isError && <ErrorScreen />}
              {books?.documents.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center">
                    <p className="mt-6 text-base md:text-xl text-normal-gray">
                      등록된 {`(${query}) `} 도서가 없습니다.
                    </p>
                  </div>
                </div>
              )}
              {books && (
                <ul>
                  {books.documents.map((book, index) => (
                    <BookSearchCard
                      key={`${book.isbn}-${index}`}
                      book={book}
                      handleBookSelect={handleBookSelect}
                    />
                  ))}
                </ul>
              )}
            </div>
            <BookSearchPagenation
              isLoading={isLoading}
              isError={isError}
              currentPage={page}
              isEnd={meta?.is_end}
              totalPages={totalPages}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
