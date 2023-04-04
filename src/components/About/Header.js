import styles from "./Header.module.css";
import logo from "./../../assets/ologo.png";
import profile from "./../../assets/profile.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
