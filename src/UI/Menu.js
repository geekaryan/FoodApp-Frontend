import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={`${styles.card} ${styles.className}`}>{props.children}</div>
  );
};

export default Menu;
