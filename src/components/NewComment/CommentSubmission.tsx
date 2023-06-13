import complete from '../../assets/icon/complete.png';

export default function CommentSubmission() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="flex-col my-14 md:my-20 flex items-center justify-center">
          <img
            src={complete}
            alt="코멘트 작성 완료"
            className="w-12 h-11 lg:w-16 lg:h-14 bg-contain bg-no-repeat mb-12"
          />
          <p className="text-center text-lg lg:text-2xl">
            코멘트 작성이 완료되었어요.
          </p>
          <div className="w-full mt-16 mb:mt-20 space-y-6 mb:space-y-4 font-semibold flex flex-col">
            <div className="py-3 flex items-center justify-center rounded-full text-white bg-strong-black">
              내가 쓴 코멘트 보기
            </div>
            <div className="py-3 flex items-center justify-center rounded-full border text-strong-black border-dusty-black">
              메인화면
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
