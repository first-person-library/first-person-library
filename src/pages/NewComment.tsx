import { useEffect } from 'react';
import CommentEditor from '../components/Comment/CommentEditor';
import { useDarkModeContext } from '../contexts/DarkModeContext';
import { Color } from '../types';

export default function NewComment() {
  const { darkMode } = useDarkModeContext();
  let backgroundColor = '';

  useEffect(() => {
    backgroundColor = darkMode ? Color.Dark : Color.Light;
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
    backgroundColor,
    backgroundType: '',
    book: bookInitial,
    uid: '',
    createdAt: '',
    updatedAt: '',
  };

  return (
    <CommentEditor
      commentInitial={commentInitial}
      bookInitial={bookInitial}
      backgroundTypeInitial={null}
      backgroundColorInitial={backgroundColor}
      contentInitial=""
      isUpdate={false}
    />
  );
}
