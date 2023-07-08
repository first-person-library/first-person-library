import { useState, useRef, ChangeEvent, useEffect, FormEvent } from 'react';
import BookCard from '../components/UI/Card/BookCard';
import BackgroundSelector from '../components/Comment/BackgroundSelector';
import BookSelector from '../components/Comment/BookSelector';
import { useModal } from '../contexts/ModalContext';
import CommentSubmission from '../components/Comment/CommentSubmission';
import Modal from '../components/UI/Modal/Modal';
import BookSearchModal from '../components/Comment/BookSearchModal/BookSearchModal';
import { Book, Comment } from '../types';
import BookSelectionResult from '../components/Comment/BookSelectionResult';
import { addNewComment } from '../apis/firebase';

export default function NewComment() {
  const [comment, setComment] = useState<Comment | null>({
    id: '',
    content: '',
    backgroundColor: '#f7f7f7',
    backgroundType: '',
    isbn: '',
    uid: '',
  });
  const { isOpen, handleOpen, handleClose } = useModal();
  const [backgroundType, setBackgroundType] = useState<'color' | 'blur' | null>(
    null
  );
  const [backgroundColor, setBackgroundColor] = useState<string>('#f7f7f7');
  const [book, setBook] = useState<Book | null>(null);
  const [content, setContent] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const colorPickerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setComment(
      (prevComment) =>
        ({
          ...prevComment,
          content,
          backgroundType,
          backgroundColor,
        } as Comment | null)
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

    if (comment) {
      try {
        const isbn = book?.isbn.split(' ')[0];
        await addNewComment(comment, isbn!);
        setIsSuccess(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <>
      <main className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-4/6 md:px-4 p-6">
        <section className="bg-white rounded-xl lg:border border-dusty-gray">
          <div className="md:my-12 lg:mx-24">
            {!isSuccess && (
              <form onSubmit={handleSubmit}>
                <BookCard
                  colorCode={backgroundColor}
                  backgroundType={backgroundType}
                  thumbnail={book?.thumbnail}
                  title={book?.title}
                  author={book?.authors[0]}
                  content={content}
                />
                {book ? (
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
                    rows={3}
                    id="content"
                    value={content}
                    onChange={handleContent}
                    placeholder="50자 이내의 독서 코멘트를 남겨주세요."
                    className="w-full border pl-5 md:pl-6 pt-3 md:pt-6 focus:outline-none text-sm md:text-xl text-strong-black placeholder-modal-black"
                    required
                  />
                  <div className="absolute right-2 bottom-5 md:right-12 md:bottom-7 text-base md:text-xl">
                    <span className="text-main-green">{`${
                      content.length || 0
                    }`}</span>
                    <span className="text-dusty2-black">/50자</span>
                  </div>
                </div>
                <div className="flex justify-center my-6 md:my-12 lg:my-16">
                  <button
                    className={`btn btn-normal-gray rounded-full`}
                    disabled={isUploading}
                  >
                    {isUploading ? '열심히 로딩중💨' : '발행하기'}
                  </button>
                </div>
              </form>
            )}
            {isSuccess && <CommentSubmission />}
          </div>
        </section>
      </main>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <BookSearchModal onClose={handleClose} onSelect={handleBookSelect} />
      </Modal>
    </>
  );
}
