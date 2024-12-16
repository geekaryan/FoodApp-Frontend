import { useState } from "react";
import { Link } from "react-router-dom";
// import { Spinner } from "@chakra-ui/react";
import burger from "./../../assets/burger.png";

// import Item from "./Item";
import styles from "./Index.module.css";

const Index = (props) => {
  console.log(props.data);

  //adding the filtereing functionality so that user can filter out food items
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  const HandleInputData = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setQuery(value);
    filterRowFunction(value);
  };

  const filterRowFunction = (value) => {
    if (!value) {
      setFilteredData(props.data);
      return;
    }
    console.log(value);

    const filtered = props.data.filter(
      (dz) => dz.name.toLowerCase().includes(value) //used .includes here
    );
    setFilteredData(filtered);
  };
  console.log("props data checking", props);

  console.log("filtered data", filteredData);

  return (
    <div>
      <div className={styles.srcDiv}>
        <input
          type="text"
          placeholder="Search food items.."
          className={styles.searchinput}
          value={query}
          onChange={HandleInputData}
        />
      </div>
      <div className={styles.apiContainer}>
        {props.isLoading &&
          // <Spinner
          //   thickness="4px"
          //   speed="0.65s"
          //   emptyColor="gray.200"
          //   color="blue.500"
          //   size="xl"
          // />
          ""}
        {filteredData.map((menu) => {
          return (
            <div key={menu._id}>
              <Link to={menu._id}>
                <div className={styles.eachitem}>
                  <div>
                    <img src={burger} alt="burger" />
                  </div>
                  <div className={styles.everTexts}>{menu.name}</div>

                  <div className={styles.everText}>₹ {menu.price}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
