import { Outlet } from "react-router-dom";
import Navigation from "./../components/Navigation/Index";

const EventRoot = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRoot;
