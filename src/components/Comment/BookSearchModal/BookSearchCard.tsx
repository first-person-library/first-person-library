import Icon from '../../UI/Icon';

type BookSearchCardProps = {
  title: string;
  author: string;
  translator: string;
  description: string;
  cover: string;
};

export default function BookSearchCard({
  title,
  author,
  translator,
  description,
  cover,
}: BookSearchCardProps) {
  return (
    <div className="flex border-t py-10 md:px-12 lg:px-13 border-light-gray">
      <div className="w-2/5 md:w-1/5 flex items-center">
        <div className="w-3/4">
          <Icon src={cover} alt={title} className="aspect-w-2 aspect-h-3" />
        </div>
      </div>
      <div className="w-3/5 md:w-4/5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <span className="text-base md:text-lg font-bold text-dusty-black mb-2 md:mb-0">
              {title.length < 28 ? title : `${title.slice(0, 28)} ...`}
            </span>
            <p className="text-modal-black">
              {`${author} 지음`}
              {translator === '없음' ? '' : ` · ${translator} 옮김`}
            </p>
            <p className="text-xs leading-5 text-modal-black"></p>
          </div>
          <button className="btn-modal btn-main-green">선택하기</button>
        </div>
        <div className="none md:block">
          <p className="line-clamp-3 border border-light-gray text-modal-black p-1 mt-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
