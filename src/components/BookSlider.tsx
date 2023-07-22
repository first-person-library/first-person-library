import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Suggest } from '../types';
import { getSuggestBooks } from '../apis/firebase';
import LoadingSpinner from './LoadingSpinner';
import ErrorScreen from './ErrorScreen';
import { useOfficialInfo } from '../contexts/OfficialInfoContext';
import Icon from './UI/Icon';

export default function BookSlider() {
  const { officialName } = useOfficialInfo();
  const id = 'suggest-books-container';
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    data: books = [],
  } = useQuery<Suggest[]>(['suggest'], getSuggestBooks);

  const handleClick = (title: string) => {
    navigate(`/comments/${title}`);
  };

  const scrollLeft = (element: HTMLElement) => {
    element.scrollLeft -= window.innerWidth - 700;
  };

  const scrollRight = (element: HTMLElement) => {
    element.scrollLeft += window.innerWidth - 700;
  };

  return (
    <section className="w-full mx-auto">
      <div className="text-center my-5 md:my-9 lg:my-20">
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mb-2 lg:mb-4">
          {`${officialName} 추천 도서`}
        </h2>
        <p className="text-modal-black dark:text-normal-gray text-xs md:text-base lg:text-lg">
          {`${officialName}가 선택한 추천 도서를 소개해 드려요.`}
        </p>
      </div>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorScreen />}
      {books.length !== 0 && (
        <div className="relative">
          <div
            className="absolute h-full flex items-center z-10 left-0 top-0"
            onClick={() => scrollLeft(document.getElementById(id)!)}
          >
            <Icon
              src="arrowleft.png"
              alt="왼쪽화살표"
              className="arrow lg:h-16 cursor-pointer"
            />
          </div>
          <article
            id={id}
            className="books flex overflow-x-scroll overflow-y-hidden scroll py-5 scroll-smooth"
          >
            {books?.map((book) => (
              <img
                key={book.isbn}
                className="book w-full max-h-48 md:max-h-60 lg:max-h-80 mx-3 lg:mx-5 transition-transform duration-200 hover:scale-110 cursor-pointer"
                src={book.thumbnail}
                alt={book.title}
                onClick={() => handleClick(book.title)}
              />
            ))}
          </article>
          <div
            className="absolute h-full flex items-center z-10 right-0 top-0"
            onClick={() => scrollRight(document.getElementById(id)!)}
          >
            <Icon
              src="arrowright.png"
              alt="오른쪽화살표"
              className="arrow lg:h-16"
            />
          </div>
        </div>
      )}
    </section>
  );
}
