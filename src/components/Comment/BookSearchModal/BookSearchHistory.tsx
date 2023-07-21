import React from 'react';
import DarkModeIcon from '../../UI/DarkModeIcon';

type BookSearchHistoryProps = {
  removeKeyword: (index: number) => void;
  discardKeywords: () => void;
  keywords: string[];
  searchSelectedKeyword: (keyword: string) => void;
};

export default function BookSearchHistory({
  removeKeyword,
  discardKeywords,
  keywords,
  searchSelectedKeyword,
}: BookSearchHistoryProps) {
  const handleClick = (keyword: string) => {
    searchSelectedKeyword(keyword);
  };

  const handleRemoveKeyword = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    removeKeyword(index);
  };

  return (
    <div>
      <div className="px-5 md:px-12 lg:px-13">
        <hr className="border-t border-light-gray dark:border-dusty-black my-6" />
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
                <DarkModeIcon
                  src="nokeyword.png"
                  alt="최근 검색어가 없습니다."
                  className="w-5"
                ></DarkModeIcon>
                <p className="mt-2 text-sm text-normal-gray dark:text-modal-black">
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
                  <div className="text-sm px-5 py-1.5 cursor-pointer rounded-full bg-bright-gray dark:border dark:border-modal-black dark:bg-inherit my-2 mr-3">
                    {keyword}
                    <span
                      onClick={(event) => handleRemoveKeyword(event, index)}
                      className="px-1 text-normal-gray"
                    >
                      ✖
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
