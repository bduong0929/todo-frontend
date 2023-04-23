import withAuth from "@/components/with-auth";
import { AuthContext } from "@/contexts/auth-provider";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { FormEvent, useContext, useState } from "react";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const [task, setTask] = useState<string>("");

  const handleNewTask = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <>
      <img
        src="https://free4kwallpapers.com/uploads/originals/2021/10/05/cityscape-wallpaper.jpg"
        alt="home_wallpaper"
      />
      <div className="absolute flex flex-col gap-10 font-mono top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="backdrop-blur-lg rounded-md shadow-xl px-20 py-10 flex flex-col gap-10">
          <h1 className="font-bold text-2xl text-[#fff19f]">
            GODD EVENING {auth?.username.toLocaleUpperCase()}...
          </h1>
          <p className="text-white">
            You have <strong>0 task(s)</strong> to complete.
          </p>
        </div>

        <form
          onSubmit={handleNewTask}
          className="backdrop-blur-lg px-10 py-5 rounded-md shadow-xl"
        >
          <div className="flex items-center gap-7">
            <input
              className="px-5 py-2 rounded-md shadow-xl w-full"
              type="text"
              placeholder="Create A New Task"
            />
            <PlusCircleIcon className="w-16 h-16 text-white cursor-pointer" />
          </div>
        </form>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
