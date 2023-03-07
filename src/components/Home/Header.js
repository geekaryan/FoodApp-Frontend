import { Link } from "react-router-dom";
import user from "./../../assets/user.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className={styles.text}>
          <span>Home</span>
        </div>
      </Link>

      <Link to="/menu" style={{ textDecoration: "none", color: "white" }}>
        <div className={styles.text}>
          <span>Menu</span>
        </div>
      </Link>

      <Link to="/order" style={{ textDecoration: "none", color: "white" }}>
        <div className={styles.text}>
          <span>Order</span>
        </div>
      </Link>

      <div className={styles.text}>
        <span>About Us</span>
      </div>
      <div>
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
