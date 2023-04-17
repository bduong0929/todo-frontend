import { Button } from "@mui/material";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-3 shadow-xl font-mono">
        <ul className="flex items-center gap-5">
          <Link href="/">
            <p className="text-4xl font-bold">TODO</p>
          </Link>
        </ul>

        <ul className="flex items-center gap-3">
          {/* Login */}
          <Link href="/login">
            <Button
              variant="contained"
              color="primary"
              className="bg-[#0077b6]"
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Link>

          {/* Signup */}
          <Button
            variant="contained"
            color="secondary"
            className="bg-slate-800 hover:bg-slate-700"
            style={{ textTransform: "none" }}
          >
            Signup
          </Button>
          <UserIcon className="h-7 w-7 cursor-pointer" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
