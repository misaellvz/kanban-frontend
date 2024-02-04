import { PropsWithChildren, ReactNode, createContext, useState } from "react";
import { User } from "interfaces/user";
import AuthService from "services/auth.service";
import { getAuthenticatedUser } from "utils/authenticated-user";

interface AuthUserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthUserContext = createContext<AuthUserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthUserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getAuthenticatedUser());

  const logout = () => {
    setUser(null);
    AuthService.logout();
  };
  const login = (user: User) => setUser(user);

  return (
    <AuthUserContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
}
