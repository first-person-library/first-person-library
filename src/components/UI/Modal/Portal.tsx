import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  selector?: string;
};

export default function Portal({ children, selector }: PortalProps) {
  const rootEl = selector && document.querySelector(selector);
  return <div>{rootEl ? createPortal(children, rootEl) : children}</div>;
}
