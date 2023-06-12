import { ReactNode, useState, createContext, useContext } from 'react';

type ModalContext = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

type Props = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContext>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

export function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
