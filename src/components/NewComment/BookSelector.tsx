import search from '../../assets/icon/search2.png';

type Props = {
  handleOpen: () => void;
};

export default function BookSelector({ handleOpen }: Props) {
  return (
    <>
      {false && (
        <div className="md:flex my-7 md:my-12 lg:my-10">
          <div className="md:w-1/4 flex items-center">
            <div className="md:text-left text-base md:text-xl mb-3 md:mb-0">
              도서 검색하기
            </div>
          </div>
          <div className="relative md:w-3/4 flex items-center">
            <div
              className="border border-dusty-gray w-full h-12 flex items-center right-4 rounded-full focus:bg-white cursor-pointer"
              onClick={handleOpen}
            >
              <img
                src={search}
                alt="검색"
                className="absolute right-6 w-6 h-6"
              />
            </div>
          </div>
        </div>
      )}
      {true && (
        <div className="md:flex my-7 md:my-8 lg:my-10">
          <div className="md:w-1/4 flex">
            <div className="md:text-left text-base md:text-xl mb-3 md:mb-0">
              도서 선택하기
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <span className="text-xl">인간 실격</span>
              <span onClick={handleOpen} className="text-sm text-normal-gray">
                다시 선택하기
              </span>
            </div>
            <div className="flex flex-col w-full mt-2 text-base md:text-lg space-y-2 border-y border-light-gray py-4">
              <div className="flex items-center w-full">
                <span className="w-1/6 flex items-center text-normal-gray font">
                  저자
                </span>
                <span className="w-5/6 flex items-center">디자이 오사무</span>
              </div>
              <div className="flex items-center w-full">
                <span className="w-1/6 flex items-center text-normal-gray">
                  출판사
                </span>
                <span className="w-5/6 flex items-center">민음사</span>
              </div>
              <div className="flex items-center w-full">
                <span className="w-1/6 flex items-center text-normal-gray">
                  출간일
                </span>
                <span className="md:w-5/6 flex items-center">2004년 5월</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
