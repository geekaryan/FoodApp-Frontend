import { useState, useEffect } from "react";
import DesktopView from "./../components/Signal/Signal";

const NoSignal = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return width < breakpoint ? <DesktopView /> : <DesktopView />;
};

export default NoSignal;
