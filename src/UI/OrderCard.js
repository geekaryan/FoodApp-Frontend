import styles from "./OrderCard.module.css";

const OrderCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default OrderCard;
