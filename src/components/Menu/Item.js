import burger from "./../../assets/burger.png";
import styles from "./Item.module.css";
import Card from "../../UI/Card";

const Item = ({ menu }) => {
  // console.log(menu.name);

  return (
    <div>
      <div className={styles.container}>
        {/* <Card className={styles.card}>
          <div>
            <img src={burger} alt="item" />
          </div>
          <div className={styles.text}>
            <span>{menu.name}</span>
          </div>
          <div className={styles.desc}>
            <span>{menu.description}</span>
          </div>
          <div>
            <button className={styles.btn}>Add to Cart</button>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Item;
