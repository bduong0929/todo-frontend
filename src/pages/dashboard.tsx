import withAuth from "@/components/with-auth";
import { AuthContext } from "@/contexts/auth-provider";
import { useContext } from "react";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <img
        src="https://images.hdqwalls.com/wallpapers/darling-in-the-franxx-warrior-4k-6l.jpg"
        alt="home_wallpaper"
      />
    </>
  );
};

export default withAuth(Dashboard);
