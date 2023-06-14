import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import burger from "./../../assets/burger.png";

// import Item from "./Item";
import styles from "./Index.module.css";

const Index = (props) => {
  console.log(props.data);
  return (
    <div>
      <div className={styles.srcDiv}>
        <input
          type="text"
          placeholder="Search food items.."
          className={styles.searchinput}
        />
      </div>
      <div className={styles.menubar}>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
      </div>
      <div className={styles.apiContainer}>
        {props.isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {props.data.map((menu) => {
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
