import DarkModeIcon from '../UI/Icon/DarkModeIcon';
import BookSearchHistory from './BookSearchHistory';

type BookSearchManualProps = {
  removeKeyword: (index: number) => void;
  discardKeywords: () => void;
  keywords: string[];
  searchSelectedKeyword: (keyword: string) => void;
};

export default function BookSearchManual({
  removeKeyword,
  discardKeywords,
  keywords,
  searchSelectedKeyword,
}: BookSearchManualProps) {
  return (
    <div className="h-[523px]">
      <div className="px-5 md:px-12 lg:px-13">
        <div className="md:flex mb-7">
          <div className="hidden mr-7 md:flex items-center justify-center">
            <DarkModeIcon src="manual.png" alt="매뉴얼" className="w-5" />
          </div>
          <div className="space-y-2">
            <p className="text-base md:text-lg font-bold text-dusty-black dark:text-white">
              어떤 도서를 검색해야 할지 고민되세요?
            </p>
            <p className="text-xs md:text-sm text-modal text-modal-black dark:text-normal-gray">
              다음과 같은 도서들도 검색해 보면 좋아요!{' '}
              <br className="block md:hidden" /> 어떤 종류의 도서 코멘트도
              환영입니다.
            </p>
          </div>
        </div>
        <PCManual />
        <MobileManual />
      </div>
      <BookSearchHistory
        removeKeyword={removeKeyword}
        discardKeywords={discardKeywords}
        keywords={keywords}
        searchSelectedKeyword={searchSelectedKeyword}
      />
    </div>
  );
}

function PCManual() {
  return (
    <div className="hidden md:block space-y-4 font-semibold text-center text-main-green dark:text-light-gray">
      <div className="py-4 bg-dusty-white dark:bg-dusty-black rounded-md">
        <p>예전에 읽었지만 ‘인생 책’이라 자부할 수 있는 도서</p>
      </div>
      <div className="py-4 bg-dusty-white dark:bg-dusty-black rounded-md">
        <p>읽다가 중도 포기했지만, 세 줄 코멘트 정도는 남길 수 있는 도서</p>
      </div>
      <div className="py-4 bg-dusty-white dark:bg-dusty-black rounded-md">
        <p>읽어 보고 싶은 도서</p>
      </div>
    </div>
  );
}

function MobileManual() {
  return (
    <div className="block md:hidden space-y-6 font-semibold text-center text-main-green dark:text-light-gray text-sm">
      <div className="py-3 bg-dusty-white dark:bg-dusty-black rounded-md shadow-sm">
        <p>‘인생 책’이라 자부할 수 있는 도서</p>
      </div>
      <div className="py-3 bg-dusty-white dark:bg-dusty-black rounded-md shadow-sm">
        <p>중도 포기했지만, 코멘트는 남길 수 있는 도서</p>
      </div>
      <div className="py-3 bg-dusty-white dark:bg-dusty-black rounded-md shadow-sm">
        <p>읽어 보고 싶은 도서</p>
      </div>
    </div>
  );
}
