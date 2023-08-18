import { FormEvent, RefObject } from 'react';
import DarkModeIcon from '../UI/Icon/DarkModeIcon';

type BookSearchBarProps = {
  inputRef: RefObject<HTMLInputElement>;
  onChange: (query: string) => void;
  addKeyword: (query: string) => void;
};

export default function BookSearchBar({
  inputRef,
  onChange,
  addKeyword,
}: BookSearchBarProps) {
  const clearQuery = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = '';
      onChange('');
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current !== null && inputRef.current.value !== '') {
      onChange(inputRef.current.value);
      addKeyword(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between w-full">
      <div className="relative flex items-center w-3/4 md:w-5/6">
        <label htmlFor="searchInput" className="sr-only">
          도서 검색창
        </label>
        <input
          type="text"
          id="searchInput"
          ref={inputRef}
          placeholder="검색어를 입력해 주세요."
          className="w-full h-12 flex items-center px-5 rounded placeholder:text-dusty-black dark:placeholder:text-normal-gray bg-dusty-green dark:bg-inherit dark:border dark:border-dusty2-black focus:outline-none"
        />
        <button
          type="button"
          onClick={clearQuery}
          className="absolute right-5 w-4"
          role="button"
          aria-label="검색어 지우기"
        >
          <DarkModeIcon src="remove.png" alt="지우기" />
        </button>
      </div>
      <button
        type="submit"
        className="rounded-sm bg-light-gray text-main-green dark:bg-black dark:text-white px-5 md:px-6"
      >
        검색
      </button>
    </form>
  );
}
