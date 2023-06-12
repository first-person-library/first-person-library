import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  selector?: string;
};

export default function Portal({ children, selector }: Props) {
  const rootEl = selector && document.querySelector(selector);
  return (
    <div>{rootEl ? createPortal(children, rootEl) : children}</div>
  );
}
