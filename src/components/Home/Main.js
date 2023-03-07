import { Link } from "react-router-dom";

import chef from "./../../assets/chef.png";
import arrow from "./../../assets/arrow.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={chef} alt="chef" />
      </div>
      <div>
        <div className={styles.text}>
          <span>THE TASTE YOU NEED THE TASTE YOU GET.</span>
        </div>
        <div className={styles.text}>
          <span>ONLY HERE!</span>
        </div>
        <div>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <button className={styles.btn}>
              Order Now <img src={arrow} className={styles.img} alt="arrow" />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
