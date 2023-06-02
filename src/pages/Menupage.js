import { useState, useEffect } from "react";
import Menu from "./../components/Menu/Index";

const MenuPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const menuDataHandler = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/menu");
        if (!response.ok) {
          console.log("Api is not working");
        }
        const data = await response.json();
        // console.log(data);
        setData(data.data.menuItems);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    menuDataHandler();
  }, []);
  return <Menu data={data} isLoading={isLoading} />;
};

export default MenuPage;
