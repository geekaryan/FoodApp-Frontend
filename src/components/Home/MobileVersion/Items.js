import styles from "./Items.module.css";
import pizza from "./../../../assets/homepizza.png";
import burger from "./../../../assets/homeburger.png";
import chicken from "./../../../assets/homechicken.png";
import drink from "./../../../assets/homedrink.png";

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={burger} alt="burger" />
      </div>
      <div className={styles.box}>
        <img src={pizza} alt="pizza" />
      </div>
      <div className={styles.box}>
        <img src={chicken} alt="chicken" />
      </div>
      <div className={styles.box}>
        <img src={drink} alt="drink" />
      </div>
    </div>
  );
};

export default Item;
