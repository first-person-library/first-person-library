import { useState, useRef, useEffect } from 'react';
import BookSearchBar from './BookSearchBar';
import BookSearchCard from './BookSearchCard';
import { useQuery } from '@tanstack/react-query';
import { search } from '../../../apis/bookAPI';
import { Books, Book } from '../../../types';
import { AxiosResponse } from 'axios';
import BookSearchPagenation from './BookSearchPagenation';
import BookSearchManual from './BookSearchManual';
import LoadingSpinner from '../../LoadingSpinner';
import ErrorScreen from '../../ErrorScreen';

type BookSearchModalProps = {
  onClose: () => void;
  onSelect: (book: Book) => void;
};

export default function BookSearchModal({
  onClose,
  onSelect,
}: BookSearchModalProps) {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [keywords, setKeywords] = useState<string[]>(() => {
    const keywordsString = localStorage.getItem('keywords');
    return keywordsString ? JSON.parse(keywordsString) : [];
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const { isLoading, isError, data } = useQuery<
    AxiosResponse<Books<Book>, Error>
  >(['books', query, page], () => search({ query, page }), {
    enabled: !!query,
  });

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setPage((prev) => prev - 1);
  };

  const PER_PAGE = 10;

  const books = data?.data;
  const meta = books?.meta;
  const totalPages = meta?.pageable_count
    ? Math.ceil(meta.pageable_count / PER_PAGE)
    : 0;

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
    <div className="relative flex flex-col h-full md:h-fit bg-white overflow-hidden md:rounded-2xl pt-5 md:pt-14 lg:pt-16">
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
            <div className="h-[450px] overflow-y-auto border-t border-light-gray">
              {isLoading && <LoadingSpinner />}
              {isError && <ErrorScreen />}
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
