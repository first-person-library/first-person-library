import { useQuery } from '@tanstack/react-query';
import { getMyComments } from '../../apis/firebase';
import { Comment } from '../../types';
import Comments from './Comments';

export default function MyComments() {
  const {
    isLoading,
    isError,
    data: comments = [],
  } = useQuery<Comment[]>(['comments'], getMyComments);

  return (
    <Comments
      isLoading={isLoading}
      isError={isError}
      comments={comments}
      headline={'내가 쓴 코멘트'}
      keyword={'나의'}
    />
  );
}