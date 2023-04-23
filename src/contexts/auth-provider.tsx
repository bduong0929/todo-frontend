// contexts/auth-provider.tsx
import { Auth } from "@/models/auth";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
  loading: boolean;
};

type AuthProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
  loading: true,
});

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
    setLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth, loading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
