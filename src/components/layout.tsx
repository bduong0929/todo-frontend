import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Minimal Todo</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer className="flex justify-center py-5">
        <p>&copy; {currentYear} Minimal Todo. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
