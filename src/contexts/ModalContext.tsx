import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';

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

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.overflowY = 'scroll';
    return currentScrollY;
  };

  const allowScroll = (prevScrollY: number) => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScrollY);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
