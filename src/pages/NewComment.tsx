import CommentEditor from '../components/Comment/CommentEditor';
import { useDarkModeContext } from '../contexts/DarkModeContext';

export default function NewComment() {
  const { darkMode } = useDarkModeContext();
  const backgroundColor = darkMode ? darkColor : lightColor;

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

const darkColor = '#757575';
const lightColor = '#f7f7f7';
