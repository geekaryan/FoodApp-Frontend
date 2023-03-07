import styles from "./Order.module.css";
import OrderCard from "../../UI/OrderCard";

const Order = () => {
  return (
    <div className={styles.container}>
      <OrderCard className={styles.card}>
        <table>
          <thead>
            <tr className={styles.flex}>
              <th>Item</th>
              <th>Qunatity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.flex}>
              <td>Burger</td>
              <td>2</td>
              <td className={styles.left}>200</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button className={styles.btn}>Place Order</button>
        </div>
      </OrderCard>
    </div>
  );
};

export default Order;
