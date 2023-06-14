import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <ModalProvider>
        <Outlet />
      </ModalProvider>
      <Footer />
    </>
  );
}

export default App;
