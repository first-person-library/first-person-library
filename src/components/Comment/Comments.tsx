import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getComments } from '../../apis/firebase';
import { Comment } from '../../types';
import ErrorScreen from '../ErrorScreen';
import LoadingSpinner from '../LoadingSpinner';
import CommentCard from '../UI/Card/CommentCard';
import Icon from '../UI/Icon';

export default function Comments() {
  const { title } = useParams();

  const {
    isLoading,
    isError,
    data: comments,
  } = useQuery<Comment[]>(['comments', title], () => getComments({ title }));

  return (
    <section className="lg:pt-24 lg:pb-44">
      <h2 className="font-bold text-xl md:text-2xl lg:text-4xl my-5 md:my-9 lg:my-20 text-center">
        도서 코멘트
      </h2>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorScreen />}
      {comments?.length === 0 ? (
        <div className="text-center">
          <div className="flex flex-col items-center justify-center">
            <Icon
              src="/icon/nocomments.png"
              alt="등록된 코멘트가 없습니다."
              className="h-5 md:h-11"
            />
            <p className="mt-6 text-base md:text-xl text-light-gray">
              등록된 코멘트가 없습니다.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 mb:gap-4 lg:gap-6 mx-auto">
            {comments &&
              comments.map((comment) => (
                <CommentCard key={comment?.id} comment={comment} />
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
