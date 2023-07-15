import LoadingSpinner from '../../LoadingSpinner';
import Icon from '../../UI/Icon';

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
    <div className="h-[72px] fix md:sticky border-t border-light-gray bottom-0 flex items-center justify-center">
      {isLoading && <LoadingSpinner />}
      {isError && null}
      {!isLoading && !isError && (
        <div className="m-6 flex">
          {isPreviousPageAvailable && (
            <Icon
              onClick={previousPage}
              src="/icon/modalleft.png"
              alt="왼쪽"
              className="w-5 cursor-pointer"
            />
          )}
          <div className="px-4 space-x-2">
            <span>{currentPage}</span>
            {isNextPageAvailable && (
              <>
                <span className="text-light-gray">/</span>
                <span className="text-light-gray">{totalPages}</span>
              </>
            )}
          </div>

          {isNextPageAvailable && (
            <Icon
              onClick={nextPage}
              src="/icon/modalright.png"
              alt="오른쪽"
              className="w-5 cursor-pointer"
            />
          )}
        </div>
      )}
    </div>
  );
}
