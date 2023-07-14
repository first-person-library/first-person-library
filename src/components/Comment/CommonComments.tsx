import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getComments } from '../../apis/firebase';
import { Comment } from '../../types';
import Comments from './Comments';

export default function CommonComments() {
  const { title } = useParams();

  const {
    isLoading,
    isError,
    data: comments = [],
  } = useQuery<Comment[]>(['comments', title], () => getComments({ title }));

  return (
    <Comments isLoading={isLoading} isError={isError} comments={comments} />
  );
}
