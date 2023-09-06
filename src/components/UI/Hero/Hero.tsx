import { useNavigate } from 'react-router-dom';
import { OFFICIAL_NAME } from '../../../constants/officialInfo';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useDarkModeContext } from '../../../contexts/DarkModeContext';
import DarkModeIcon from '../Icon/DarkModeIcon';

export default function Hero() {
  const { user, login } = useAuthContext();
  const { darkMode } = useDarkModeContext();
  const navigate = useNavigate();
  const commentButtonText = '코멘트 등록하기';

  const handleCommentButton = () => {
    if (user) {
      navigate('/comment/new');
    } else {
      login();
    }
  };

  return (
    <section
      className={`min-w-max bg-cover h-[190px] md:h-[326px] lg:h-[533px] ${
        darkMode
          ? 'hidden dark:block bg-dark-hero-sm md:bg-dark-hero-md lg:bg-dark-hero-lg'
          : 'block dark:hidden bg-hero-sm md:bg-hero-md lg:bg-hero-lg'
      } `}
    >
      <div className="w-full mx-auto px-6 lg:w-5/6 py-7 md:px-4 md:py-9 lg:py-24 flex">
        <div className="flex-1">
          <h1 className="hidden md:block md:text-5xl lg:text-6xl font-semibold">
            {`${OFFICIAL_NAME}, 나만의 도서 코멘트.`}
          </h1>
          <h1 className="block md:hidden text-3xl">
            <span className="block">{`${OFFICIAL_NAME},`}</span>
            <span className="font-thin">나만의 도서 코멘트.</span>
          </h1>
          <div className="hidden md:block text-modal-black dark:text-normal-gray text-lg md:text-base lg:text-xl my-8 lg:my-12">
            <p className="md:leading-6 lg:leading-8">
              {`${OFFICIAL_NAME}는 독서의 즐거움을 공유하는 독특한 서재입니다.`}
              <br />
              어떤 책을 읽을지 고민되시나요?
              <br />
              도서 코멘트를 통해 여러분의 독서 경험을 공유하고 더불어 추천도
              받아보세요.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCommentButton}
            className="btn-white p-3 text-xs md:text-lg md:p-4 lg:text-2xl lg:p-5 rounded-lg mt-4"
            aria-label={commentButtonText}
          >
            {commentButtonText}
          </button>
        </div>
        <div className="hidden lg:block">
          <DarkModeIcon
            src="heroLettering.png"
            alt="나만의 도서 코멘트."
            className="h-[374px]"
          />
        </div>
      </div>
    </section>
  );
}
