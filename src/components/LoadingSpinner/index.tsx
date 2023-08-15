import Icon from '../UI/Icon';

export default function LoadingSpinner() {
  return (
    <figure className="h-full flex items-start justify-center">
      <Icon src="loadingspinner.gif" className="max-h-full" alt="로딩 중" />
      <figcaption className="sr-only">페이지를 로딩 중입니다.</figcaption>
    </figure>
  );
}
