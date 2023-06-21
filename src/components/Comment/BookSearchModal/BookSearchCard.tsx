import Icon from '../../UI/Icon';

type BookSearchCardProps = {
  index: number;
  title: string;
  author: string;
  translator: string;
  description: string;
  cover: string;
};

export default function BookSearchCard({
  index,
  title,
  author,
  translator,
  description,
  cover,
}: BookSearchCardProps) {
  return (
    <div
      className={`flex px-5 py-5 md:py-10 md:px-12 lg:px-13 ${
        index === 0 ? 'border-t-0' : 'border-t border-light-gray'
      }`}
    >
      <div className="w-2/5 md:w-1/5 flex items-center">
        <div className="w-3/4">
          <Icon src={cover} alt={title} className="aspect-w-2 aspect-h-3" />
        </div>
      </div>
      <div className="w-3/5 md:w-4/5">
        <div className="flex flex-col justify-between h-full md:h-auto md:flex-row md:justify-between">
          <div className="mt-0 mb-auto md:mb-0">
            <p className="mb-2 md:mb-0 text-base md:text-lg font-bold text-dusty-black">
              {title.length < 28 ? title : `${title.slice(0, 28)} ...`}
            </p>
            <p className="text-sm md:text-base text-modal-black">
              {`${author} 지음`}
              {translator === '없음' ? '' : ` · ${translator} 옮김`}
            </p>
            <p className="text-xs leading-5 text-modal-black"></p>
          </div>
          <button className="w-[110px] md:w-auto mt-auto md:mt-0 btn-modal btn-main-green">
            선택하기
          </button>
        </div>
        <p className="hidden md:block line-clamp-3 border border-light-gray text-modal-black p-1 mt-5 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
