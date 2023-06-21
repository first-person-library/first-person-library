import Icon from '../../UI/Icon';

type BookPagenationProps = {
  startIndex?: number;
  lastIndex: number | undefined;
};

export default function BookPagenation({
  startIndex = 1,
  lastIndex,
}: BookPagenationProps) {
  return (
    <div className="fix md:sticky border-t border-light-gray bottom-0 p-6 flex items-center justify-center">
      {startIndex !== 1 ? (
        <Icon src="/icon/modalleft.png" alt="왼쪽" className="w-5" />
      ) : (
        ''
      )}

      <div className="px-4 space-x-2">
        <span>{startIndex}</span>
        {!lastIndex ? (
          ''
        ) : (
          <>
            <span className="text-light-gray">/</span>
            <span className="text-light-gray">{lastIndex}</span>
          </>
        )}
      </div>
      {lastIndex === startIndex || !lastIndex ? (
        ''
      ) : (
        <Icon src="/icon/modalright.png" alt="오른쪽" className="w-5" />
      )}
    </div>
  );
}
