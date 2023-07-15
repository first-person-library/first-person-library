import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  selector?: string;
};

export default function Portal({ children, selector }: PortalProps) {
  const rootEl = selector && document.querySelector(selector);
  return <div>{rootEl ? createPortal(children, rootEl) : children}</div>;
}
