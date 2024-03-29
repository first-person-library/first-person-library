import { ReactNode } from 'react';
import Portal from './Portal';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  selector?: string;
}

export default function Modal({
  isOpen,
  children,
  onClose,
  selector = '#modal-root',
}: ModalProps) {
  return (
    <>
      {isOpen ? (
        <Portal selector={selector}>
          <div className="fixed z-50 inset-0 overflow-hidden flex items-center justify-center">
            <div
              onClick={onClose}
              className="fixed inset-0 bg-modal-black opacity-50"
            ></div>
            <div
              className="flex justify-center w-full md:max-w-[720px] lg:max-w-3xl relative max-h-full overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {children}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
}
