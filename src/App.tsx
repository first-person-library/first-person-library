import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </>
  );
}

export default App;
