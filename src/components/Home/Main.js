import { Link } from "react-router-dom";
import Slider from "../../UI/Coursel";
// import arrow from "./../../assets/arrow.png";
import styles from "./Main.module.css";
// import chef1 from "./../../assets/chef.png";
// import chef2 from "./../../assets/chef2main.png";
// import chef3 from "./../../assets/chef3main.png";
import cs from "./../../assets/cs.png";
import cs2 from "./../../assets/cs2.png";
import cs3 from "./../../assets/cs3.png";

const Main = () => {
  const slides = [
    {
      image: cs,
      title: "cs",
    },
    {
      image: cs2,
      title: "cs2",
    },
    {
      image: cs3,
      title: "cs3",
    },
    {
      image: cs2,
      title: "cs2",
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
            <button className={styles.btn}>Order Here</button>
          </Link>
        </div>
      </div>
      <div className={styles.outermost}>
        <div className={styles.innermost}>
          <div className={styles.slider}>
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
