const Search = () => (
  <form>
    <div className="relative flex items-center">
      <img
        src="/icon/search.png"
        alt="search"
        className="absolute h-4 w-4 left-4 text-lg"
      />
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="코멘트 검색하기"
        className="w-full h-[36px] rounded-full border border-main-green outline-none pl-10 placeholder-dusty2-black text-"
      />
    </div>
  </form>
);
export default Search;
