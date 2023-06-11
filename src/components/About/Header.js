import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./../../assets/ologo.png";
import profile from "./../../assets/profile.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
