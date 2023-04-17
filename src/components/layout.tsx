import Head from "next/head";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Minimal Todo</title>
      </Head>

      <header></header>

      <main>{children}</main>

      <footer></footer>
    </>
  );
};

export default Layout;
