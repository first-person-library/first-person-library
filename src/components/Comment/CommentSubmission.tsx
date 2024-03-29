import { Link } from 'react-router-dom';
import DarkModeIcon from '../UI/Icon/DarkModeIcon';

export default function CommentSubmission() {
  return (
    <div className="flex flex-col justify-center lg:h-full mx-auto md:w-[350px] lg:w-[400px]">
      <div className="my-14 lg:my-20 w-full md:w-auto">
        <div className="flex flex-col items-center">
          <DarkModeIcon
            src="comments.png"
            alt="코멘트 작성 완료"
            className="icon w-12 lg:w-16 mb-12"
          />
          <p className="text-center text-lg lg:text-2xl">
            코멘트 작성이 완료되었어요.
          </p>
        </div>
        <div>
          <div className="mt-16 mb:mt-20 space-y-6 mb:space-y-4 flex flex-col">
            <Link to="/my">
              <button
                type="button"
                className="btn btn-strong-black rounded-full w-full"
              >
                내가 쓴 코멘트 보기
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className="btn btn-border-white rounded-full w-full"
              >
                메인화면
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
