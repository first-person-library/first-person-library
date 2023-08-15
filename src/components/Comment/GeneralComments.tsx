import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getComments } from '../../apis/firebase';
import { Comment } from '../../types';
import Comments from './Comments';

export default function GeneralComments() {
  const { title } = useParams();
  const HEADLINE = '도서 코멘트';

  const {
    isLoading,
    isError,
    data: comments = [],
  } = useQuery<Comment[]>(['comments', title], () => getComments({ title }));

  return (
    <Comments
      isLoading={isLoading}
      isError={isError}
      comments={comments ?? null}
      headline={HEADLINE}
      keyword={title}
    />
  );
}
