import { Link } from "react-router-dom";
import Slider from "./../../UI/Coursel";
import arrow from "./../../assets/arrow.png";
import styles from "./Main.module.css";
import chef1 from "./../../assets/chef.png";
import chef2 from "./../../assets/chef2main.png";
import chef3 from "./../../assets/chef3main.png";

const Main = () => {
  const slides = [
    {
      image: chef1,
      title: "chef1",
    },
    {
      image: chef2,
      title: "chef3",
    },
    {
      image: chef3,
      title: "chef2",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.text}>
          <span>
            <span style={{ color: "#E50E00" }}>No</span> cooking,
          </span>
        </div>
        <div className={styles.text}>
          <span>
            No <span style={{ color: "#E50E00" }}>hassle,</span>
          </span>
        </div>
        <div className={styles.text}>
          <span>
            just{" "}
            <span style={{ color: "#EBC80F", textDecoration: "underline" }}>
              order.
            </span>
          </span>
        </div>
        <div className={styles.longtext}>
          <span>
            Best cooks and best delivery guys all at you service. Hot tasty food
            will reach you in 60 minutes..
          </span>
        </div>
        <div>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <button className={styles.btn}>
              Order Now <img src={arrow} className={styles.img} alt="arrow" />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Main;
