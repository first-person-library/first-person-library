import { useState, useRef, ChangeEvent } from 'react';
import BookCard from '../components/UI/Card/BookCard';
import BackgroundSelector from '../components/Comment/BackgroundSelector';
import BookSelector from '../components/Comment/BookSelector';
import { useModal } from '../contexts/ModalContext';
import CommentSubmission from '../components/Comment/CommentSubmission';
import Modal from '../components/UI/Modal/Modal';
import BookSearchModal from '../components/Comment/BookSearchModal/BookSearchModal';
import { Book } from '../types';
import BookSelectionResult from '../components/Comment/BookSelectionResult';

const NewComment = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [backgroundType, setBackgroundType] = useState<'color' | 'blur'>(
    'color'
  );
  const [backgroundColor, setBackgroundColor] = useState<string>('#F7F7F7');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [comment, setComment] = useState<string>('');
  const colorPickerRef = useRef<HTMLInputElement | null>(null);

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
    setSelectedBook(book);
    handleClose();
  };

  const writeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputComment = e.target.value;
    const limitedComment = inputComment.slice(0, 50);

    setComment(limitedComment);
  };

  return (
    <>
      <main className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-4/6 md:px-4 p-6">
        <section className="bg-white rounded-xl lg:border border-dusty-gray">
          <div className="md:my-12 lg:mx-24">
            {true && (
              <>
                <BookCard
                  colorCode={backgroundColor}
                  backgroundType={backgroundType}
                  thumbnail={selectedBook?.thumbnail}
                  title={selectedBook?.title}
                  author={selectedBook?.authors[0]}
                  comment={comment}
                />
                {selectedBook ? (
                  <BookSelectionResult
                    book={selectedBook}
                    handleOpen={handleOpen}
                  />
                ) : (
                  <BookSelector handleOpen={handleOpen} />
                )}
                <BackgroundSelector
                  colorPickerRef={colorPickerRef}
                  handleColorPick={handleColorPicker}
                  handleColorClick={handleColorClick}
                  handleBlurClick={handleBlurClick}
                  thumbnail={selectedBook?.thumbnail}
                />
                <div className="relative">
                  <textarea
                    className="w-full border pl-5 md:pl-6 pt-3 md:pt-6 focus:outline-none text-sm md:text-xl text-strong-black placeholer-modal-black"
                    rows={3}
                    value={comment}
                    onChange={writeComment}
                    placeholder="50자 이내의 독서 코멘트를 남겨주세요."
                  />
                  <div className="absolute right-2 bottom-5 md:right-12 md:bottom-7 text-base md:text-xl">
                    <span>{`${comment?.length}`}</span>
                    <span className="text-dusty2-black">/50자</span>
                  </div>
                </div>
                <div className="flex justify-center my-6 md:my-12 lg:my-16">
                  <button className="btn btn-normal-gray rounded-full">
                    발행하기
                  </button>
                </div>
              </>
            )}
            {false && <CommentSubmission />}
          </div>
        </section>
      </main>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <BookSearchModal onClose={handleClose} onSelect={handleBookSelect} />
      </Modal>
    </>
  );
};

export default NewComment;
