import { useNavigate } from 'react-router-dom';
import { deleteMyComment } from '../../apis/firebase';

type DeleteCommentModalProps = {
  onClose: () => void;
  commentId: string;
};

export default function DeleteCommentModal({
  onClose,
  commentId,
}: DeleteCommentModalProps) {
  const navigate = useNavigate();
  const handleDelete = () => {
    onClose();
    navigate('/my', { replace: true });
    deleteMyComment(commentId);
  };

  return (
    <div className="flex flex-col justify-center bg-white overflow-hidden rounded-2xl w-[320px] md:w-[648px]">
      <div className="m-5 lg:m-12">
        <div className="flex flex-col items-center">
          <h2 className="text-lg lg:text-2xl my-3 md:my-5 font-semibold">
            코멘트 삭제
          </h2>
          <p className="text-sm md:text-base mb-9 md:mb-10 text-dusty-black">
            정말 코멘트를 삭제하시겠어요?
          </p>
        </div>
        <div>
          <div className="w-full space-y-4 mb:space-y-6 flex flex-col">
            <button
              onClick={handleDelete}
              className="w-full btn btn-main-green"
            >
              삭제하기
            </button>
            <button onClick={onClose} className="btn btn-border-main-green">
              취소하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
