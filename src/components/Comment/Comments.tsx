import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../apis/firebase';
import { Comment } from '../../types';
import ErrorScreen from '../ErrorScreen';
import LoadingSpinner from '../LoadingSpinner';
import CommentCard from '../UI/Card/CommentCard';

export default function Comments() {
  const {
    isLoading,
    isError,
    data: comments,
  } = useQuery<Comment[]>(['comments'], getComments);

  return (
    <div className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-5/6 md:px-4 p-6">
      <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mb-5 md:mb-9 lg:mb-20 text-center">
        도서 코멘트
      </h2>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorScreen />}
      <div className="flex flex-col">
        <ul className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 mb:gap-4 lg:gap-6 mx-auto">
          {comments &&
            comments.map((comment) => (
              <CommentCard key={comment?.id} comment={comment} />
            ))}
        </ul>
      </div>
    </div>
  );
}
