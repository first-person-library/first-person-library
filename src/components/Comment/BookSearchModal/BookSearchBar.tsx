import Icon from '../../UI/Icon';

type BookSearchBarProps = {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeKeyword: () => void;
};

export default function BookSearchBar({
  keyword,
  onChange,
  removeKeyword,
}: BookSearchBarProps) {
  return (
    <form>
      <label htmlFor="searchInput" className="sr-only">
        도서 검색창
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          id="searchInput"
          value={keyword}
          placeholder="검색어를 입력해 주세요."
          onChange={onChange}
          className="w-full h-12 flex items-center px-5 rounded bg-dusty-green focus:outline-none"
        />
        {!keyword.length ? (
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
    </form>
  );
}
