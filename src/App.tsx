import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './contexts/AuthContext';
import { DarkModeContextProvider } from './contexts/DarkModeContext';
import ScrollToTopButton from './components/UI/ScrollToTopButton';
import ScrollToTop from './utils/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthContextProvider>
        <DarkModeContextProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <ModalProvider>
              <ScrollToTop />
              <Outlet />
              <ScrollToTopButton />
            </ModalProvider>
          </QueryClientProvider>
          <Footer />
        </DarkModeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
