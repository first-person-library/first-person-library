import { Book } from '../../types';

type BookSelectionResultProps = {
  book: Book;
  handleOpen: () => void;
};

export default function BookSelectionResult({
  book,
  handleOpen,
}: BookSelectionResultProps) {
  const { title, publisher, year, month, authorTypeAuthor: author } = book;
  const formattedMonth = month.replace(/^0/, '');

  return (
    <div className="md:flex my-7 md:my-8 lg:my-10">
      <div className="md:w-1/4 flex justify-between md:justify-normal">
        <label
          className="md:text-left text-base md:text-xl mb-3 md:mb-0"
          htmlFor="my-textfield"
        >
          도서 선택완료
        </label>
        <span
          onClick={handleOpen}
          className="block md:hidden text-sm text-normal-gray cursor-pointer shrink-0"
        >
          다시 선택하기
        </span>
      </div>
      <div className="md:w-3/4 flex flex-col items-center justify-start mt-8 md:mt-0">
        <div className="flex justify-between w-full">
          <span className="text-base md:text-xl line-clamp-1">{title}</span>
          <span
            onClick={handleOpen}
            className="hidden md:block text-sm text-normal-gray cursor-pointer shrink-0"
          >
            다시 선택하기
          </span>
        </div>
        <div className="flex flex-col w-full mt-2 text-base md:text-lg space-y-2 border-t md:border-b border-light-gray py-4">
          <div className="flex items-center w-full">
            <span className="w-1/6 flex items-center text-normal-gray font">
              저자
            </span>
            <span>{author}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="w-1/6 flex items-center text-normal-gray">
              출판사
            </span>
            <span className="">{publisher}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="w-1/6 flex items-center text-normal-gray">
              출간일
            </span>
            <span className="">
              {year}년 {formattedMonth}월
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}