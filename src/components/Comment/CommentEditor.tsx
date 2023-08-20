import { FormEvent, useEffect, useRef, useState } from 'react';
import { addNewComment, updateMyComment } from '../../apis/firebase';
import { useModal } from '../../contexts/ModalContext';
import { Book, Comment } from '../../types';
import CommentCard from '../UI/Card/CommentCard';
import Modal from '../UI/Modal/Modal';
import BookSearchModal from '../BookSearchModal/BookSearchModal';
import CommentSubmission from './CommentSubmission';
import CommentDeleteModal from './CommentDeleteModal';
import CommentBookSelectionResult from './CommentBookSelectionResult';
import CommentBookSelector from './CommentBookSelector';
import CommentBookBackground from './CommentBookBackground';
import CommentContent from './CommentContent';
import CommentButton from './CommentButton';

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
  const [isInputValid, setInputValid] = useState<boolean>(false);
  const isDisabled = !isInputValid || isUploading;

  useEffect(() => {
    if (content.length !== 0 && book.title) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [content, book.title]);

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
    if (backgroundType === 'blur') {
      setBackgroundColor(backgroundColorInitial);
      setBackgroundType('color');
    } else {
      setBackgroundType('blur');
    }
  };

  const handleBookSelect = (book: Book) => {
    setBook(book);
    setBackgroundType('color');
    handleClose();
  };

  const handleContent = (newContent: string) => {
    setContent(newContent);
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
      <main className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-4/6 md:px-4 p-6 lg:h-auto">
        <section className="rounded-xl lg:border border-dusty-gray dark:border-dusty2-black">
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
                  <CommentBookSelectionResult
                    book={book}
                    handleOpen={handleOpen}
                  />
                ) : (
                  <CommentBookSelector handleOpen={handleOpen} />
                )}
                <CommentBookBackground
                  backgroundType={backgroundType}
                  colorPickerRef={colorPickerRef}
                  handleColorPick={handleColorPicker}
                  handleColorClick={handleColorClick}
                  handleBlurClick={handleBlurClick}
                  thumbnail={book?.thumbnail}
                />
                <CommentContent
                  content={content}
                  handleContent={handleContent}
                />
                <CommentButton
                  isUpdate={isUpdate}
                  isUploading={isUploading}
                  isDisabled={isDisabled}
                />
              </form>
            )}
            <div>{isSuccess && <CommentSubmission />}</div>
          </div>
        </section>
      </main>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {isUpdate ? (
          <CommentDeleteModal onClose={handleClose} commentID={comment.id} />
        ) : (
          <BookSearchModal onClose={handleClose} onSelect={handleBookSelect} />
        )}
      </Modal>
    </>
  );
}
