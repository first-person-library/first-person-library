import { FormEvent, useRef } from 'react';
import Icon from '../../UI/Icon';

type BookSearchBarProps = {
  removeKeyword: () => void;
  onChange: (text: string) => void;
};

export default function BookSearchBar({
  onChange,
  removeKeyword,
}: BookSearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current !== null) {
      onChange(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <label htmlFor="searchInput" className="sr-only">
        도서 검색창
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          id="searchInput"
          ref={inputRef}
          placeholder="검색어를 입력해 주세요."
          className="w-full h-12 flex items-center px-5 rounded bg-dusty-green focus:outline-none"
        />
        {/* {!keyword.length ? ( */}
        {true ? (
          ''
        ) : (
          <Icon
            src="/icon/remove.png"
            alt="키워드 제거"
            onClick={removeKeyword}
            className="icon absolute right-5 w-4"
          />
        )}
      </div>
      <button type="submit" className="bg-red-200 px-2">
        검색
      </button>
    </form>
  );
}
