import { Auth } from "@/models/auth";
import { FC, ReactNode, createContext, useState } from "react";

type AuthContextType = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
};

type AuthProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
