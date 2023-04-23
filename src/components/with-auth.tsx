// hoc/withAuth.tsx
import { AuthContext } from "@/contexts/auth-provider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";

const withAuth = (WrappedComponent: NextComponentType) => {
  const AuthComponent: NextComponentType<NextPageContext, any, {}> = (
    props
  ) => {
    const { auth, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !auth) {
        router.push("/");
      } else {
        router.push("/dashboard");
      }
    }, [auth, loading]);

    return <>{auth && <WrappedComponent {...props} />}</>;
  };

  return AuthComponent;
};

export default withAuth;
