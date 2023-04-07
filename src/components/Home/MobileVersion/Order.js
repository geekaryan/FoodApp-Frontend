import styles from "./Order.module.css";

const Order = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.text}>
        <span>
          Best cooks and best delivery guys all at you service. Hot tasty food
          will reach you in 60 minutes..
        </span>
      </div>
      <div>
        <button className={styles.btn}>Order Here</button>
      </div>
    </div>
  );
};

export default Order;
