import styles from "./Dropdown.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const loginNavigation = () => {
    navigate("/register");
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.txt} onClick={loginNavigation}>
        <p>Login</p>
      </div>
      <div className={styles.txt} onClick={loginNavigation}>
        <p>Sign Up</p>
      </div>
      <div className={styles.txt} onClick={showCartHandler}>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default DropDown;
