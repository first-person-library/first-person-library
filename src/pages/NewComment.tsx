import { useEffect } from 'react';
import CommentEditor from '../components/Comment/CommentEditor';
import { useDarkModeContext } from '../contexts/DarkModeContext';

export default function NewComment() {
  const { darkMode } = useDarkModeContext();
  let color = '';
  useEffect(() => {
    color = darkMode ? '#757575' : '#f7f7f7';
  }, [darkMode]);

  const bookInitial = {
    authors: [],
    contents: '',
    datetime: '',
    isbn: '',
    price: 0,
    publisher: '',
    sale_price: 0,
    status: '',
    thumbnail: '',
    title: '',
    translators: [],
    url: '',
  };

  const commentInitial = {
    id: '',
    content: '',
    backgroundColor: color,
    backgroundType: '',
    book: bookInitial,
    uid: '',
    createdAt: '',
    updatedAt: '',
  };

  return (
    <>
      <CommentEditor
        commentInitial={commentInitial}
        bookInitial={bookInitial}
        backgroundTypeInitial={null}
        backgroundColorInitial={color}
        contentInitial={''}
        isUpdate={false}
      />
    </>
  );
}
