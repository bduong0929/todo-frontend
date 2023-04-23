import TODO_API from "@/utils/axios-config";
import { errorToaster, successToaster } from "@/utils/toaster";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type RegisterPayload = {
  username: string;
  password1: string;
  password2: string;
};

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validUsername, setValidUsername] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [validConfirmPassword, setValidConfirmPassword] =
    useState<boolean>(true);

  /**
   * Handle registering a new user
   * @param e - Form event
   * @returns - Promise<void>
   */
  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!isValidUsername(username)) {
      setValidUsername(false);
      errorToaster("Username is invalid!");
      return;
    } else {
      setValidUsername(true);
    }

    if (!isValidPassword(password)) {
      setValidPassword(false);
      errorToaster(
        "Password must be at least 1 letter, 1 number, and 1 special character."
      );
      return;
    } else {
      setValidPassword(true);
    }

    if (password !== confirmPassword) {
      setValidConfirmPassword(false);
      errorToaster("Password and confirm password must be the same!");
      return;
    } else {
      setValidConfirmPassword(true);
    }

    const payload: RegisterPayload = {
      username: username,
      password1: password,
      password2: confirmPassword,
    };

    try {
      await TODO_API.post("/auth/register", payload);
      successToaster("Register success!");
      resetForm();
    } catch (e: any) {
      errorToaster(e.response.data.message);
      setValidUsername(false);
    }
  };

  /**
   * Validate username
   *
   * @param username - username to validate
   * @returns boolean - true if valid, false otherwise
   */
  const isValidUsername = (username: string): boolean => {
    return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username);
  };

  /**
   * Validate password
   *
   * @param password - password to validate
   * @returns boolean - true if valid, false otherwise
   */
  const isValidPassword = (password: string): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  };

  /**
   * Reset form
   */
  const resetForm = (): void => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setValidUsername(true);
    setValidPassword(true);
    setValidConfirmPassword(true);
  };

  return (
    <>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s3840/CITYSCAPE1142023.png"
        alt="home_image"
      />

      <form
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-20 py-10 shadow-xl rounded-md backdrop-blur-lg font-mono text-white flex flex-col gap-10"
        onSubmit={handleRegister}
      >
        <h1 className="text-4xl font-bold">REGISTER</h1>
        <TextField
          label="Username"
          error={!validUsername}
          variant="standard"
          color="secondary"
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
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          error={!validPassword}
          variant="standard"
          color="secondary"
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
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          error={!validConfirmPassword}
          variant="standard"
          color="secondary"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            sx: {
              color: "white",
              "&:before": {
                borderBottomColor: "white",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="bg-slate-900"
        >
          Sign up
        </Button>
      </form>
    </>
  );
}
