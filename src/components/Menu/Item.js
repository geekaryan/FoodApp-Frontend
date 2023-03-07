import burger from "./../../assets/burger.png";
import styles from "./Item.module.css";
import Card from "../../UI/Card";

const Item = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div>
          <img src={burger} alt="item" />
        </div>
        <div className={styles.text}>
          <span>Chilli Panner Burger</span>
        </div>
        <div className={styles.desc}>
          <span>
            CHILLI PANNER BURGER WITH EXTRA SPIECE AND HOT INGREDIENTS.
          </span>
        </div>
        <div>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </Card>
      <Card className={styles.card}>
        <div>
          <img src={burger} alt="item" />
        </div>
        <div className={styles.text}>
          <span>Chilli Panner Burger</span>
        </div>
        <div className={styles.desc}>
          <span>
            CHILLI PANNER BURGER WITH EXTRA SPIECE AND HOT INGREDIENTS.
          </span>
        </div>
        <div>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </Card>
      <Card className={styles.card}>
        <div>
          <img src={burger} alt="item" />
        </div>
        <div className={styles.text}>
          <span>Chilli Panner Burger</span>
        </div>
        <div className={styles.desc}>
          <span>
            CHILLI PANNER BURGER WITH EXTRA SPIECE AND HOT INGREDIENTS.
          </span>
        </div>
        <div>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </Card>
      <Card className={styles.card}>
        <div>
          <img src={burger} alt="item" />
        </div>
        <div className={styles.text}>
          <span>Chilli Panner Burger</span>
        </div>
        <div className={styles.desc}>
          <span>
            CHILLI PANNER BURGER WITH EXTRA SPIECE AND HOT INGREDIENTS.
          </span>
        </div>
        <div>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </Card>
      <Card className={styles.card}>
        <div>
          <img src={burger} alt="item" />
        </div>
        <div className={styles.text}>
          <span>Chilli Panner Burger</span>
        </div>
        <div className={styles.desc}>
          <span>
            CHILLI PANNER BURGER WITH EXTRA SPIECE AND HOT INGREDIENTS.
          </span>
        </div>
        <div>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
