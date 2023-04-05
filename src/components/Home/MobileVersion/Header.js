import Homelogo from "./../../../assets/homelogo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div>
        <img src={Homelogo} alt="homelogo" className={styles.image} />
      </div>
    </div>
  );
};

export default Header;
