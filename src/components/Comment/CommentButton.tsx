import { useModal } from '../../contexts/ModalContext';
import LoadingSpinner from '../UI/LoadingSpinner';

type CommentButtonProps = {
  isUpdate: boolean;
  isUploading: boolean;
  isDisabled: boolean;
};

export default function CommentButton({
  isUpdate,
  isUploading,
  isDisabled,
}: CommentButtonProps) {
  const { handleOpen } = useModal();

  return (
    <div className="flex justify-center my-6 md:my-12 lg:my-16 space-x-5">
      <button
        type="submit"
        className={`btn-disabled btn-strong-black rounded-full ${
          isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
        } `}
        disabled={isDisabled || isUploading}
        aria-label={isUpdate ? '코멘트 수정하기' : '코멘트 발행하기'}
      >
        {isUploading ? <LoadingSpinner /> : isUpdate ? '수정하기' : '발행하기'}
      </button>
      {isUpdate && (
        <button
          type="button"
          onClick={handleOpen}
          className="btn-disabled btn-border-white rounded-full"
          aria-label="코멘트 삭제하기"
        >
          삭제하기
        </button>
      )}
    </div>
  );
}
