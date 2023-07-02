import Icon from '../../UI/Icon';

type BookPagenationProps = {
  currentPage?: number;
  isEnd?: boolean;
  totalPages?: number;
  nextPage: () => void;
  previousPage: () => void;
};

export default function BookPagenation({
  currentPage,
  isEnd,
  totalPages,
  nextPage,
  previousPage,
}: BookPagenationProps) {
  return (
    <div className="fix md:sticky border-t border-light-gray bottom-0 p-6 flex items-center justify-center">
      {currentPage === 1 ? (
        ''
      ) : (
        <Icon
          onClick={previousPage}
          src="/icon/modalleft.png"
          alt="왼쪽"
          className="w-5 cursor-pointer"
        />
      )}

      <div className="px-4 space-x-2">
        <span>{currentPage}</span>
        {!isEnd ? (
          <>
            <span className="text-light-gray">/</span>
            <span className="text-light-gray">{totalPages}</span>
          </>
        ) : (
          ''
        )}
      </div>
      {!isEnd ? (
        <Icon
          onClick={nextPage}
          src="/icon/modalright.png"
          alt="오른쪽"
          className="w-5 cursor-pointer"
        />
      ) : (
        ''
      )}
    </div>
  );
}
