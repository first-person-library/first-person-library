import { Book } from '../../../types';

export default function BookSearchCard({
  title,
  author,
  pubDate,
  description,
  cover,
}: Book) {
  return (
    <div className="flex mt-4 md:mt-10 border-t py-10 border-light-gray">
      <div className="w-2/5 md:w-1/5">
        <svg className="w-28 h-40 bg-no-repeat bg-contain bg-bookcover2"></svg>
      </div>
      <div className="w-3/5 md:w-4/5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <span className="text-base md:text-lg font-bold text-dusty-black mb-2 md:mb-0">
              {title}
            </span>
            <p className="text-xs leading-5 md:text-sm text-modal-black">
              {author} 지음
            </p>
            <p className="text-xs leading-5 md:text-sm text-modal-black">
              {/* 있는경우 옮김 없는경우 칸채우기 */}
            </p>
          </div>
          <span className="mt-2 md:mt-0 flex items-center justify-center text-base font-bold text-white bg-light-gray hover:bg-main-green cursor-pointer w-28 h-8 transition duration-300 ease-out">
            선택하기
          </span>
        </div>
        <div className="hidden md:block w-full h-20 border border-light-gray overflow-hidden text-xs text-modal-black p-2 mt-3">
          {description}
        </div>
      </div>
    </div>
  );
}
