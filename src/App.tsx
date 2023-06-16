import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import { OfficialInfoProvider } from './contexts/OfficialInfoContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <OfficialInfoProvider>
        <Header />
        <ModalProvider>
          <Outlet />
        </ModalProvider>
        <Footer />
      </OfficialInfoProvider>
    </>
  );
}

export default App;
