import { Link } from "react-router-dom";
import user from "./../../assets/user.png";
import styles from "./Header.module.css";
import logo from "./../../assets/logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ marginLeft: "36px" }}
          // style={{ height: "100px", width: "100px" }}
        />
      </div>
      <div className={styles.flexbox}>
        {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.text}>
            <span>Home</span>
          </div>
        </Link> */}

        <Link to="/menu" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.text}>
            <span>Menu</span>
          </div>
        </Link>

        <Link to="/order" style={{ textDecoration: "none", color: "black" }}>
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
    </div>
  );
};

export default Header;
