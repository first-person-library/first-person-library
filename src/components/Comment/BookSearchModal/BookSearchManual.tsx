import { useState } from 'react';
import Icon from '../../UI/Icon';
import BookSearchHistory from './BookSearchHistory';

type BookSearchManualProps = {
  //selectKeyword: (keyword: string) => void;
  keywords: string[];
};

export default function BookSearchManual({ keywords }: BookSearchManualProps) {
  /*
  = [
    '리더의 탄생',
    '넛지',
    '데미안',
    '미움받을 용기',
    '1984',
    '토지',
    '노르웨이의 숲',
    '마인드셋',
    '사피엔스',
  ];
  */

  return (
    <div className="h-[523px]">
      <div className="px-5 md:px-12 lg:px-13">
        <div className="md:flex mb-7">
          <div className="mr-7 flex items-center justify-center">
            <Icon
              src="/icon/manual.png"
              alt="매뉴얼"
              className="hidden w-5 md:block"
            />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold text-dusty-black">
              어떤 도서를 검색해야 할지 고민되세요?
            </p>
            <p className="text-sm text-modal text-modal-black">
              다음과 같은 도서들도 검색해 보면 좋아요! 어떤 종류의 독서 코멘트도
              환영입니다.
            </p>
          </div>
        </div>
        <PCManual />
        <MobileManual />
      </div>
      <BookSearchHistory keywords={keywords} />
    </div>
  );
}

function PCManual() {
  return (
    <div className="hidden md:block space-y-4 font-semibold text-center text-main-green">
      <div className="py-4 bg-dusty-white rounded-md">
        <p>예전에 읽었지만 ‘인생 책’이라 자부할 수 있는 도서</p>
      </div>
      <div className="py-4 bg-dusty-white rounded-md">
        <p>읽다가 중도 포기했지만, 세 줄 코멘트 정도는 남길 수 있는 도서</p>
      </div>
      <div className="py-4 bg-dusty-white rounded-md">
        <p>읽어 보고 싶은 도서</p>
      </div>
    </div>
  );
}

function MobileManual() {
  return (
    <div className="block md:hidden space-y-6 font-semibold text-center text-main-green">
      <div className="py-3 bg-dusty-white rounded-md shadow-sm">
        <p>예전에 읽었지만 ‘인생 책’이라 자부할 수 있는 도서</p>
      </div>
      <div className="py-3 bg-dusty-white rounded-md shadow-sm">
        <p>중도 포기했지만, 코멘트는 남길 수 있는 도서</p>
      </div>
      <div className="py-3 bg-dusty-white rounded-md shadow-sm">
        <p>읽어 보고 싶은 도서</p>
      </div>
    </div>
  );
}
