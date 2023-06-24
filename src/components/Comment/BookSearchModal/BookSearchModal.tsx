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
};

export default function BookSearchModal({ onClose }: BookSearchModalProps) {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [keywords, setKeywords] = useState<string[]>(initialKeywords);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const {
    isLoading,
    isError,
    data: books,
  } = useQuery<AxiosResponse<Books<Book>, Error>>(
    ['books', query],
    () => search({ query, page }),
    {
      enabled: !!query,
    }
  );

  const lastIndex =
    books?.data?.itemsPerPage &&
    books?.data?.totalResults &&
    books.data.itemsPerPage <= books.data.totalResults
      ? Math.ceil(books.data.totalResults / books.data.itemsPerPage)
      : undefined;

  const handleChange = (query: string) => {
    setQuery(query);
  };

  const searchSelectedKeyword = (keyword: string) => {
    setQuery(keyword);

    if (inputRef.current !== null) {
      inputRef.current.value = keyword;
    }
  };

  const addKeyword = (query: string) => {
    setKeywords((prevKeywords) => {
      if (10 <= prevKeywords.length) {
        const newKeywords = prevKeywords.slice(1);
        return [...newKeywords, query];
      }

      return [...prevKeywords, query];
    });
  };

  const discardKeywords = () => {
    setKeywords([]);
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
          inputRef={inputRef}
          onChange={handleChange}
          addKeyword={addKeyword}
        />
      </div>
      <div>
        {!query ? (
          <BookSearchManual
            keywords={keywords}
            discardKeywords={discardKeywords}
            searchSelectedKeyword={searchSelectedKeyword}
          />
        ) : (
          <>
            <div className="max-h-[450px] overflow-y-auto border-t border-light-gray">
              {isLoading && <LoadingSpinner />}
              {isError && <ErrorScreen />}
              {books && (
                <ul>
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
              )}
            </div>
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

const keywordsString = localStorage.getItem('keywords');
const initialKeywords = keywordsString ? JSON.parse(keywordsString) : [];
