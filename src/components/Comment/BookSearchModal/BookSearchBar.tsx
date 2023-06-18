import Icon from '../../UI/Icon';

export default function BookSearchBar() {
  return (
    <form>
      <label htmlFor="searchInput" className="sr-only">
        도서 검색창
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          id="searchInput"
          placeholder="도서 제목을 입력해주세요."
          className="w-full h-12 flex items-center px-5 rounded bg-dusty-green focus:outline-none"
        />
        <Icon
          src="/icon/remove.png"
          alt="도서 검색"
          className="absolute right-5 w-4"
        />
      </div>
    </form>
  );
}
