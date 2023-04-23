import { Button } from "@mui/material";
import {
  ArrowLeftOnRectangleIcon,
  CogIcon,
  LockClosedIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import LoginModal from "./login-modal";
import { Transition } from "@headlessui/react";
import { AuthContext } from "@/contexts/auth-provider";
import { useRouter } from "next/router";

const Navbar = () => {
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [userDropdown, setUserDropdown] = useState<boolean>(false);
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userDropdownRef &&
        !userDropdownRef.current?.contains(e.target as Node)
      ) {
        setUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginModal, userDropdown]);

  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const handleLogout = (): void => {
    window.localStorage.removeItem("auth");
    setAuth(null);
    router.push("/");
  };

  return (
    <>
      <nav className="flex justify-between px-20 py-5 shadow-xl font-mono bg-gradient-to-r from-cyan-900 to-slate-900 text-white">
        <ul className="flex items-center gap-5">
          <Link href="/">
            <p className="text-4xl font-bold italic">TODO</p>
          </Link>
        </ul>

        <ul className="flex items-center gap-3">
          {/* Login */}
          {!auth && (
            <Button
              variant="contained"
              color="primary"
              className="bg-[#EDC951]"
              style={{ textTransform: "none" }}
              onClick={handleLoginModal}
            >
              Login
            </Button>
          )}
          <div
            ref={userDropdownRef}
            onClick={handleUserDropdown}
            className="flex flex-col items-end"
          >
            {auth && <UserIcon className="h-7 w-7 cursor-pointer" />}

            <Transition
              show={userDropdown}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              className="absolute py-5 bg-white rounded-md mt-10 text-black flex flex-col gap-3"
            >
              <Link
                href="/profile"
                className="flex items-center gap-3 pl-5 pr-16 cursor-pointer ease-out duration-300 hover:scale-110 hover:font-bold"
              >
                <UserIcon className="w-5 h-5" />
                <p className="">Profile</p>
              </Link>
              <Link
                href="/tag"
                className="flex items-center gap-3 pl-5 pr-16 cursor-pointer ease-out duration-300 hover:scale-110 hover:font-bold"
              >
                <TagIcon className="w-5 h-5" />
                <p className="">Tags</p>
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-3 pl-5 pr-16 cursor-pointer ease-out duration-300 hover:scale-110 hover:font-bold"
              >
                <LockClosedIcon className="w-5 h-5" />
                <p className="">Privacy</p>
              </Link>
              <Link
                href="/setting"
                className="flex items-center gap-3 pl-5 pr-16 cursor-pointer ease-out duration-300 hover:scale-110 hover:font-bold"
              >
                <CogIcon className="w-5 h-5" />
                <p className="">Settings</p>
              </Link>
              <div
                className="flex items-center gap-3 pl-5 pr-16 cursor-pointer ease-out duration-300 hover:scale-110 hover:font-bold"
                onClick={handleLogout}
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                <p>Log out</p>
              </div>
            </Transition>
          </div>

          {loginModal && <LoginModal setModal={setLoginModal} />}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
