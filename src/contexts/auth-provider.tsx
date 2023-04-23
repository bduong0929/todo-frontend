import { Auth } from "@/models/auth";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuth(JSON.parse(auth));
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
