import { useEffect } from "react";

const Kartik = () => {
  //   const data = useState([]);

  const fetchData = async () => {
    try {
      const url = await fetch(
        "https://healthkangaroo.com/api/HkUser/searchMedicineData"
      );
      const res = await url.json();

      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h1>hi</h1>;
};

export default Kartik;
