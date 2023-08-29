import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { User } from 'firebase/auth';
import { login, logout, onUserStateChange } from '../apis/firebase';

interface AuthContextValue {
  user: User | null; // 현재 인증된 사용자의 정보
  login: () => void;
  logout: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onUserStateChange((user: User | null) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
