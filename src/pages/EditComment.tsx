import { useLocation } from 'react-router-dom';
import CommentEditor from '../components/Comment/CommentEditor';

export default function EditComment() {
  const {
    state: { savedComment },
  } = useLocation();

  return (
    <>
      <CommentEditor
        commentInitial={savedComment}
        bookInitial={savedComment.book}
        backgroundTypeInitial={savedComment.backgroundType}
        backgroundColorInitial={savedComment.backgroundColor}
        contentInitial={savedComment.content}
        isUpdate={true}
      />
    </>
  );
}
