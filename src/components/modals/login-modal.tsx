import { FC, FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";

interface LoginModalProps {
  setModal: (value: boolean) => void;
}

const LoginModal: FC<LoginModalProps> = ({ setModal }) => {
  const modalRef = useRef<HTMLFormElement>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="fixed bg-black w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <form
        ref={modalRef}
        className="fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 shadow-xl px-20 py-10 rounded-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-4xl font-bold text-black">LOGIN</h1>
        <TextField label="Username" variant="standard" />
        <TextField label="Password" type="password" variant="standard" />
        <Button
          variant="contained"
          color="primary"
          className="bg-slate-700"
          style={{ textTransform: "none" }}
        >
          Sign in
        </Button>
      </form>
    </>
  );
};

export default LoginModal;
