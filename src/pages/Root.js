import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>
        <h1 style={{ color: "black" }}>Root</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
