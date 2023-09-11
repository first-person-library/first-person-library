import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';

interface ModalContextValue {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContextValue>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.overflowY = 'scroll';
    return currentScrollY;
  };

  const allowScroll = () => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScrollY);
  };

  useEffect(() => {
    // 모달이 열릴 때에만 실행
    if (isOpen) {
      const currentScrollY = preventScroll();
      setPrevScrollY(currentScrollY);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    allowScroll(); // 모달이 닫힐 때에만 실행
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
