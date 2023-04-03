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
      <div className={styles.slider}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Main;
