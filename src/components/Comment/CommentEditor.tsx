import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { addNewComment, updateMyComment } from '../../apis/firebase';
import { useModal } from '../../contexts/ModalContext';
import { Book, Comment } from '../../types';
import CommentCard from '../UI/Card/CommentCard';
import Modal from '../UI/Modal/Modal';
import BackgroundSelector from './BackgroundSelector';
import BookSearchModal from './BookSearchModal/BookSearchModal';
import BookSelectionResult from './BookSelectionResult';
import BookSelector from './BookSelector';
import CommentSubmission from './CommentSubmission';
import DeleteCommentModal from './DeleteCommentModal';

type CommentEditorProps = {
  commentInitial: Comment;
  bookInitial: Book;
  backgroundTypeInitial: 'color' | 'blur' | null;
  backgroundColorInitial: string;
  contentInitial: string;
  isUpdate: boolean;
};

export default function CommentEditor({
  commentInitial,
  bookInitial,
  backgroundTypeInitial,
  backgroundColorInitial,
  contentInitial,
  isUpdate,
}: CommentEditorProps) {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [comment, setComment] = useState<Comment>(commentInitial);
  const [book, setBook] = useState<Book>(bookInitial);
  const [backgroundType, setBackgroundType] = useState<'color' | 'blur' | null>(
    backgroundTypeInitial
  );
  const [backgroundColor, setBackgroundColor] = useState<string>(
    backgroundColorInitial
  );
  const [content, setContent] = useState<string>(contentInitial);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const colorPickerRef = useRef<HTMLInputElement | null>(null);
  const DISABLED = isUploading || (content.length !== 0 && !book.title);

  useEffect(() => {
    setComment(
      (prevComment) =>
        ({
          ...prevComment,
          content,
          backgroundType,
          backgroundColor,
        } as Comment)
    );
  }, [backgroundType, content, backgroundColor]);

  const handleColorPicker = () => {
    setBackgroundColor(colorPickerRef.current?.value || '');
  };

  const handleColorClick = () => {
    if (colorPickerRef.current) colorPickerRef.current.click();
    setBackgroundType('color');
  };

  const handleBlurClick = () => {
    setBackgroundType('blur');
  };

  const handleBookSelect = (book: Book) => {
    setBook(book);
    setBackgroundType('color');
    handleClose();
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value.slice(0, 50);
    setContent(content);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      if (isUpdate) {
        await updateMyComment(comment);
      } else {
        await addNewComment(comment, book);
      }
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <main className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-4/6 md:px-4 p-6">
        <section className="bg-white rounded-xl lg:border border-dusty-gray">
          <div className="md:my-12 lg:mx-24">
            {!isSuccess && (
              <form onSubmit={handleSubmit}>
                <CommentCard
                  comment={{
                    ...comment,
                    book,
                  }}
                />
                {book.title ? (
                  <BookSelectionResult book={book} handleOpen={handleOpen} />
                ) : (
                  <BookSelector handleOpen={handleOpen} />
                )}
                <BackgroundSelector
                  backgroundType={backgroundType}
                  colorPickerRef={colorPickerRef}
                  handleColorPick={handleColorPicker}
                  handleColorClick={handleColorClick}
                  handleBlurClick={handleBlurClick}
                  thumbnail={book?.thumbnail}
                />
                <div className="relative">
                  <label htmlFor="content" className="sr-only">
                    코멘트 작성란
                  </label>
                  <textarea
                    rows={4}
                    id="content"
                    value={content}
                    onChange={handleContent}
                    placeholder="50자 이내의 독서 코멘트를 남겨주세요."
                    className="w-full border p-3 md:p-6 focus:outline-none text-base md:text-xl text-strong-black placeholder-modal-black"
                    required
                  />
                  <div className="absolute right-2 bottom-5 md:right-12 md:bottom-7 text-base md:text-xl">
                    <span className="text-main-green">{`${
                      content.length || 0
                    }`}</span>
                    <span className="text-dusty2-black">/50자</span>
                  </div>
                </div>
                <div className="flex justify-center my-6 md:my-12 lg:my-16 space-x-5">
                  <button
                    type="submit"
                    className={`btn-disabled btn-strong-black rounded-full ${
                      content.length !== 0 && book.title
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed'
                    }`}
                    disabled={DISABLED}
                  >
                    {isUploading
                      ? '열심히 로딩중💨'
                      : isUpdate
                      ? '수정하기'
                      : '발행하기'}
                  </button>
                  {isUpdate && (
                    <button
                      type="button"
                      onClick={handleOpen}
                      className="btn-disabled btn-border-white rounded-full"
                    >
                      삭제하기
                    </button>
                  )}
                </div>
              </form>
            )}
            {isSuccess && <CommentSubmission />}
          </div>
        </section>
      </main>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {isUpdate ? (
          <DeleteCommentModal onClose={handleClose} commentId={comment.id} />
        ) : (
          <BookSearchModal onClose={handleClose} onSelect={handleBookSelect} />
        )}
      </Modal>
    </>
  );
}
