import Icon from '../UI/Icon';

export default function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Icon src="/icon/loadingspinner.gif" alt="로딩중" />
    </div>
  );
}
