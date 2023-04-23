// hoc/withoutAuth.tsx
import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/auth-provider";

const withoutAuth = (WrappedComponent: NextComponentType) => {
  const NoAuthComponent: NextComponentType<NextPageContext, any, {}> = (
    props
  ) => {
    const { auth, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && auth) {
        router.push("/dashboard");
      }
    }, [auth, loading]);

    return <>{(!auth || loading) && <WrappedComponent {...props} />}</>;
  };

  return NoAuthComponent;
};

export default withoutAuth;
