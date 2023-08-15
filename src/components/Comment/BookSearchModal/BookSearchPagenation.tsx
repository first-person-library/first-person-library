import LoadingSpinner from '../../LoadingSpinner';
import DarkModeIcon from '../../UI/DarkModeIcon';

type BookPagenationProps = {
  isLoading: boolean;
  isError: boolean;
  currentPage?: number;
  isEnd?: boolean;
  totalPages?: number;
  nextPage: () => void;
  previousPage: () => void;
};

export default function BookPagenation({
  isLoading,
  isError,
  currentPage,
  isEnd,
  totalPages,
  nextPage,
  previousPage,
}: BookPagenationProps) {
  const isPreviousPageAvailable = currentPage !== 1;
  const isNextPageAvailable = !isEnd;

  return (
    <div className="h-[72px] fix md:sticky border-t border-light-gray dark:border-dusty-black bottom-0 flex items-center justify-center">
      {isLoading && <LoadingSpinner />}
      {isError && null}
      {totalPages === 0
        ? ''
        : !(isLoading || isError) && (
            <div className="m-6 flex">
              {isPreviousPageAvailable && (
                <button
                  onClick={previousPage}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="이전 페이지"
                >
                  <DarkModeIcon src="modalleft.png" alt="왼쪽 화살표" />
                </button>
              )}
              <div className="px-4 space-x-2">
                <span>{currentPage}</span>
                {isNextPageAvailable && (
                  <>
                    <span className="text-light-gray dark:text-white">/</span>
                    <span className="text-light-gray">{totalPages}</span>
                  </>
                )}
              </div>
              {isNextPageAvailable && (
                <button
                  onClick={nextPage}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="다음 페이지"
                >
                  <DarkModeIcon src="modalright.png" alt="오른쪽 화살표" />
                </button>
              )}
            </div>
          )}
    </div>
  );
}
