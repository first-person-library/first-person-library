import React from 'react';
import Portal from './Portal';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  selector?: string;
};

export default function Modal({
  isOpen,
  children,
  onClose,
  selector = '#modal-root',
}: Props) {
  return (
    <>
      {isOpen ? (
        <Portal selector={selector}>
          <div className="fixed z-50 inset-0 overflow-hidden flex items-center justify-center">
            <div
              onClick={onClose}
              className="fixed inset-0 bg-modal-black opacity-50"
            ></div>
            <div className="md:max-w-[720px] lg:max-w-3xl relative w-full">
              {children}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
}
