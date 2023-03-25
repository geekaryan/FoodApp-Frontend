import { useState, useEffect } from "react";
import Menu from "./../components/Menu/Index";

const MenuPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const menuDataHandler = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/menu");
        if (!response.ok) {
          console.log("Api is not working");
        }
        const data = await response.json();
        // console.log(data);
        setData(data.data.menuItems);
      } catch (err) {
        console.log(err);
      }
    };
    menuDataHandler();
  }, []);
  return <Menu data={data} />;
};

export default MenuPage;
