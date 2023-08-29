import { useNavigate } from 'react-router-dom';
import { deleteMyComment } from '../../apis/firebase';

interface DeleteCommentModalProps {
  onClose: () => void;
  commentID: string;
}

export default function CommentDeleteModal({
  onClose,
  commentID,
}: DeleteCommentModalProps) {
  const navigate = useNavigate();
  const handleDelete = () => {
    onClose();
    navigate('/my', { replace: true });
    deleteMyComment(commentID);
  };

  return (
    <div className="flex flex-col justify-center bg-white dark:bg-dark-point overflow-hidden rounded-2xl w-[320px] md:w-[648px]">
      <div className="m-5 lg:m-12">
        <div className="flex flex-col items-center">
          <h2 className="text-lg lg:text-2xl my-3 md:my-5 font-semibold">
            코멘트 삭제
          </h2>
          <p className="text-sm md:text-base mb-9 md:mb-10 text-dusty-black dark:text-light-gray">
            정말 코멘트를 삭제하시겠어요?
          </p>
        </div>
        <div>
          <div className="w-full space-y-4 mb:space-y-6 flex flex-col">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-border-main-green"
              aria-label="코멘트 삭제 취소 버튼"
            >
              취소하기
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="w-full btn btn-main-green"
              aria-label="코멘트 삭제 버튼"
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
