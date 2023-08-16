import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './contexts/AuthContext';
import { DarkModeContextProvider } from './contexts/DarkModeContext';
import ScrollToTop from './utils/ScrollToTop';
import ScrollToTopButton from './components/UI/Button/ScrollToTopButton';
import Footer from './components/UI/Footer/Footer';
import Header from './components/UI/Header/Header';

const queryClient = new QueryClient();

function App() {
  return (
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
  );
}

export default App;
