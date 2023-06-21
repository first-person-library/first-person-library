import Icon from '../../UI/Icon';

export default function BookSearchManual() {
  const keywords: any[] = [
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

  return (
    <div className="h-[523px]">
      <div className="px-5 md:px-12 lg:px-13">
        <div className="md:flex mb-7">
          <div className="mr-7 flex items-center justify-center">
            <Icon
              src="/icon/manual.png"
              alt="메뉴얼"
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
      </div>
      <div>
        <div className="px-5 md:px-12 lg:px-13">
          <hr className="border-t border-light-gray my-6" />
          <div className="flex flex-col">
            <div className="flex justify-between w-full">
              <span className="font-semibold">최근 검색어</span>
              <span className="text-sm text-normal-gray">전체 삭제</span>
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
                  <div key={index} className="flex-shrink-0">
                    <button className="btn-keyword">{keyword}</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
