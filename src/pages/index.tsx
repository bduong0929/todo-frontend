import { Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s3840/CITYSCAPE1142023.png"
        alt="home_image"
      />

      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-20 py-10 shadow-xl rounded-md backdrop-blur-lg font-mono text-white flex flex-col gap-10">
        <h1 className="text-4xl font-bold">REGISTER</h1>
        <TextField
          label="Username"
          variant="standard"
          color="secondary"
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
          variant="standard"
          color="secondary"
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
          variant="standard"
          color="secondary"
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

        <Button variant="contained" color="secondary" className="bg-slate-900">
          Sign up
        </Button>
      </form>
    </>
  );
}
