import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Icon from './Icon';

export default function Hero() {
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  const handleCommentButton = () => {
    if (user) {
      navigate('/comment/new');
    } else {
      login();
    }
  };

  return (
    <section className="min-w-max bg-hero-sm md:bg-hero-md lg:bg-hero-lg bg-cover h-[190px] md:h-[326px] lg:h-[533px]">
      <div className="w-full mx-auto px-6 lg:w-5/6 py-7 md:px-4 md:py-9 lg:py-24 flex">
        <div className="flex-1 flex-col">
          <h1 className="hidden md:block md:text-5xl lg:text-6xl font-semibold">
            일인칭서재, 나만의 독서 코멘트.
          </h1>
          <h1 className="block md:hidden text-3xl">
            <span className="block">일인칭서재,</span>
            <span className="font-thin">나만의 독서 코멘트.</span>
          </h1>
          <div className="hidden md:block text-modal-black text-lg md:text-base lg:text-xl my-8 lg:my-12">
            <p className="md:leading-6 lg:leading-8">
              일인칭서재는 독서의 즐거움을 공유하는 독특한 서재입니다.
              <br />
              어떤 책을 읽을지 고민되시나요?
              <br />
              독서 코멘트를 통해 여러분의 독서 경험을 공유하고 더불어 추천도
              받아보세요.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCommentButton}
            className="btn-white p-3 text-xs md:text-lg md:p-4 lg:text-2xl lg:p-5 rounded-lg mt-4"
          >
            코멘트 등록하기
          </button>
        </div>
        <div className="hidden lg:flex">
          <Icon
            src="icon/heroLettering.png"
            alt="레터링"
            className="h-[402px]"
          />
        </div>
      </div>
    </section>
  );
}
