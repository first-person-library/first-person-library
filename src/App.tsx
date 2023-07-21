import { Outlet } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext';
import { OfficialInfoProvider } from './contexts/OfficialInfoContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './contexts/AuthContext';
import { DarkModeContextProvider } from './contexts/DarkModeContext';
import ScrollToTopButton from './components/UI/ScrollToTopButton';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthContextProvider>
        <DarkModeContextProvider>
          <OfficialInfoProvider>
            <QueryClientProvider client={queryClient}>
              <Header />
              <ModalProvider>
                <Outlet />
                <ScrollToTopButton />
              </ModalProvider>
            </QueryClientProvider>
            <Footer />
          </OfficialInfoProvider>
        </DarkModeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
