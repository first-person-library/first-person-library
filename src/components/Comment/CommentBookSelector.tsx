import DarkModeIcon from '../UI/Icon/DarkModeIcon';

interface BookSelectorProps {
  handleOpen: () => void;
}

export default function CommentBookSelector({ handleOpen }: BookSelectorProps) {
  return (
    <div className="md:flex my-7 md:my-12 lg:my-10">
      <div className="md:w-1/4 flex items-center">
        <div className="dark:text-dusty-white md:text-left text-base md:text-xl mb-3 md:mb-0">
          도서 검색하기
        </div>
      </div>
      <div className="relative md:w-3/4 flex items-center">
        <div
          className="border border-dusty-gray dark:border-normal-gray w-full h-10 md:h-12 flex items-center right-4 rounded-full focus:bg-white cursor-pointer"
          onClick={handleOpen}
        >
          <DarkModeIcon
            src="search.png"
            alt="검색"
            className="absolute right-6 w-6"
          />
        </div>
      </div>
    </div>
  );
}
