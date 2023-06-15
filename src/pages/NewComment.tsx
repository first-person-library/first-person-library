import { useEffect, useState, useRef } from 'react';
import BookCard from '../components/Card/BookCard';
import BackgroundSelector from '../components/NewComment/BackgroundSelector';
import BookSelector from '../components/NewComment/BookSelector';
import { useModal } from '../contexts/ModalContext';
import CommentSubmission from '../components/NewComment/CommentSubmission';

const NewComment = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [color, setColor] = useState<string>('#F7F7F7');
  const colorPickerRef = useRef<HTMLInputElement | null>(null);

  const handleColorPick = () => {
    setColor(colorPickerRef.current?.value || '');
  };

  const handleColorClick = () => {
    if (colorPickerRef.current) colorPickerRef.current.click();
  };

  return (
    <>
      <main className="w-full mx-auto lg:pt-24 lg:pb-44 lg:w-4/6 md:px-4 p-5">
        <section className="bg-white rounded-xl lg:border border-dusty-gray">
          <div className="md:my-12 lg:mx-24">
            {true && (
              <>
                <BookCard color={color} />
                <BookSelector handleOpen={handleOpen} />
                <BackgroundSelector
                  colorPickerRef={colorPickerRef}
                  handleColorPick={handleColorPick}
                  handleColorClick={handleColorClick}
                />
                <textarea
                  className="w-full border pl-5 md:pl-6 pt-3 md:pt-6 focus:outline-none text-sm md:text-xl text-strong-black placeholer-modal-black"
                  rows={3}
                  placeholder="50자 이내의 독서 코멘트를 남겨주세요."
                ></textarea>
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
    </>
  );
};

export default NewComment;
