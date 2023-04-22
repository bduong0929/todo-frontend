import { FC, FormEvent, useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import TODO_API from "@/utils/axios-config";
import { AuthContext } from "@/contexts/auth-provider";
import { useRouter } from "next/router";
import { errorToaster, successToaster } from "@/utils/toaster";

interface LoginModalProps {
  setModal: (value: boolean) => void;
}

type LoginPayload = {
  username: string;
  password: string;
};

const LoginModal: FC<LoginModalProps> = ({ setModal }) => {
  const modalRef = useRef<HTMLFormElement>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuth } = useContext(AuthContext);
  const router = useRouter();

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

  /* ---------------------------- FUNCTIONS ---------------------------- */

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const payload: LoginPayload = {
      username: username,
      password: password,
    };

    try {
      const { data } = await TODO_API.post("/auth/login", payload);
      setAuth(data);
      setModal(false);
      successToaster("Login success!");
      router.push("/home");
    } catch (e: any) {
      console.log(e);
      errorToaster(e.response.data.message);
    }
  };

  return (
    <>
      <div className="z-10 fixed bg-black w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <form
        ref={modalRef}
        className="z-10 fixed bg-gradient-to-b to-[#E53F71] from-slate-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 shadow-xl px-20 py-10 rounded-md text-white"
        onSubmit={handleLogin}
      >
        <h1 className="text-4xl font-bold">LOGIN</h1>
        <TextField
          label="Username"
          type="text"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            sx: {
              color: "white",
              "&:before": {
                borderBottomColor: "white",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "&:after": {
                borderBottomColor: "#F89F5B",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
              "&.Mui-focused": {
                color: "#F89F5B",
              },
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            sx: {
              color: "white",
              "&:before": {
                borderBottomColor: "white",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
              "&:after": {
                borderBottomColor: "#F89F5B",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
              "&.Mui-focused": {
                color: "#F89F5B",
              },
            },
          }}
        />
        <Button
          type="submit"
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
