import burger from "./../../../assets/burgerdetail.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={burger} alt="burger" />
      </div>
      <div>
        <div className={styles.name}>
          <span>{data.name}</span>
        </div>
        <div className={styles.item}>
          <div>
            <span>Bun: {data.description}</span>
          </div>
          <div>
            <span>veggie: {data.name}</span>
          </div>
          <div>
            <span>Cheese: {data.name}</span>
          </div>
          <div>
            <span>Pickle: {data.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
