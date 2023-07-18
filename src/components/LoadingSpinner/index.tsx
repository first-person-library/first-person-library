import Icon from '../UI/Icon';

export default function LoadingSpinner() {
  return (
    <div className="h-full flex items-start justify-center">
      <Icon src="loadingspinner.gif" className="max-h-full" alt="로딩중" />
    </div>
  );
}
