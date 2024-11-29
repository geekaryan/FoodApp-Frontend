import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import user from "./../../assets/user.png";
import styles from "./Header.module.css";
import logo from "./../../assets/logo.png";
import DropDownItem from "./../Navigation/DropDown";
import stys from "./../Navigation/Dropdown.module.css";

const Header = () => {
  const [DropDown, setDropdown] = useState(false);

  const name = useSelector((state) => state.user.name);
  console.log(name);

  const showDropdownHandler = () => {
    setDropdown(!DropDown);
  };
  return (
    <div>
      <div className={styles.container}>
        <Link to="/">
          <div>
            <img
              src={logo}
              alt="logo"
              style={{ marginLeft: "36px" }}
              // style={{ height: "100px", width: "100px" }}
            />
          </div>
        </Link>

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
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>About Us</span>
            </Link>
          </div>
          <div onClick={showDropdownHandler}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
      {DropDown && (
        <div
          className={`absolute top-28 right-16 mt-6 z-50 bg-white shadow-lg rounded-lg ${stys.dropdown}`}
        >
          <DropDownItem />
        </div>
      )}
    </div>
  );
};

export default Header;
