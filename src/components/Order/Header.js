import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <span>Your Order</span>
      </div>
    </div>
  );
};

export default Header;
