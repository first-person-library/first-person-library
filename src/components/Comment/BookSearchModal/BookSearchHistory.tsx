import Icon from '../../UI/Icon';

type BookSearchHistoryProps = {
  discardKeywords: () => void;
  keywords: string[];
  searchSelectedKeyword: (keyword: string) => void;
};

export default function BookSearchHistory({
  discardKeywords,
  keywords,
  searchSelectedKeyword,
}: BookSearchHistoryProps) {
  const handleClick = (keyword: string) => {
    console.log(keyword);
    searchSelectedKeyword(keyword);
  };

  return (
    <div>
      <div className="px-5 md:px-12 lg:px-13">
        <hr className="border-t border-light-gray my-6" />
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <span className="font-semibold">최근 검색어</span>
            <span
              onClick={discardKeywords}
              className="text-xs md:text-sm text-normal-gray cursor-pointer"
            >
              전체 삭제
            </span>
          </div>
        </div>
        <div className="my-6">
          {keywords.length === 0 ? (
            <div className="text-center">
              <div className="flex flex-col items-center justify-center">
                <Icon
                  src="/icon/nokeyword.png"
                  alt="최근 검색어가 없습니다."
                  className="w-5"
                ></Icon>
                <p className="mt-2 text-sm text-light-gray">
                  최근 검색어가 없습니다.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap overflow-y-auto h-28">
              {keywords.map((keyword, index) => (
                <div
                  key={`${index}-${keyword}`}
                  onClick={() => handleClick(keyword)}
                >
                  <span className="flex text-sm px-5 py-1.5 cursor-pointer rounded-full bg-bright-gray my-2 mr-3">
                    {keyword}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
