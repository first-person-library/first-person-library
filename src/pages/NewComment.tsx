import CommentEditor from '../components/Comment/CommentEditor';

export default function NewComment() {
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
    backgroundColor: '#f7f7f7',
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
        backgroundColorInitial={'#f7f7f7'}
        contentInitial={''}
        isUpdate={false}
      />
    </>
  );
}
