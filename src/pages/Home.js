import { useState, useEffect } from "react";
import DesktopVersion from "./../components/Home/Home";
import MobileVersion from "./../components/Home/MobileVersion/Index";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    //Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileVersion /> : <DesktopVersion />;
};

export default HomePage;
