import { Outlet } from "react-router-dom";

const EventRoot = () => {
  return (
    <>
      <h1>Menu navigation</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRoot;
