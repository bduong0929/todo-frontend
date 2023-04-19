import { Button } from "@mui/material";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "./modals/login-modal";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);

  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleSignupModal = () => {
    setSignupModal(!signupModal);
  };

  return (
    <>
      <nav className="flex justify-between px-10 py-5 shadow-xl font-mono bg-gradient-to-r from-cyan-900 to-slate-900 text-white">
        <ul className="flex items-center gap-5">
          <Link href="/">
            <p className="text-4xl font-bold italic">TODO</p>
          </Link>
        </ul>

        <ul className="flex items-center gap-3">
          {/* Login */}
          <Button
            variant="contained"
            color="primary"
            className="bg-[#EDC951]"
            style={{ textTransform: "none" }}
            onClick={handleLoginModal}
          >
            Login
          </Button>

          {/* Signup */}
          <Button
            variant="contained"
            color="secondary"
            className="bg-[#EB6841] hover:bg-slate-700"
            style={{ textTransform: "none" }}
          >
            Signup
          </Button>
          <UserIcon className="h-7 w-7 cursor-pointer" />

          {loginModal && <LoginModal setModal={setLoginModal} />}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
