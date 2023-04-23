import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="flex justify-center py-10">
          <p>&copy; {currentYear} Minimal Todo. All rights reserved.</p>
        </footer>
      </div>

      <ToastContainer />
    </>
  );
};

export default Layout;
