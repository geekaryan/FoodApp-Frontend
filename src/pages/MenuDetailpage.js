import { useState, useEffect } from "react";
import { useLoaderData, json } from "react-router-dom";

import DesktopVersion from "./../components/Menu/MenuDetail/Index";
import MobileVersion from "./../components/Menu/MenuDetail/MobileVersion/Index";

const MenuDetailpage = () => {
  const data = useLoaderData();
  // console.log(data.data);
  // return (
  //   <div>
  //     <Menu data={data.data.menuItem} />
  //   </div>
  // );
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    //Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <MobileVersion data={data.data.menuItem} />
  ) : (
    <DesktopVersion data={data.data.menuItem} />
  );
};

export default MenuDetailpage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:7000/api/menu/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch detail" }, { status: 500 });
  } else {
    return response;
  }
}
