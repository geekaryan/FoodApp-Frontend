import { Link } from "react-router-dom";
import Homelogo from "./../../../assets/homelogo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Link to="/">
      <div>
        <img src={Homelogo} alt="homelogo" className={styles.image} />
      </div>
    </Link>
  );
};

export default Header;
