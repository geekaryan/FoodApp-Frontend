import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { authActions } from "../../store/auth-slice";
import { userActions } from "../../store/user-slice";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import styles from "./Dropdown.module.css";

const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies();
  const name = useSelector((state) => state.user.name);
  const isLogin = useSelector((state) => state.auth.login);
  console.log("Is user Logged In", isLogin);

  const showCartHandler = () => {
    if (isLogin === false) {
      alert("Login First!");
    } else {
      dispatch(uiActions.toggle());
    }
  };

  const loginNavigation = () => {
    navigate("/register");
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(userActions.remove());
    Object.keys(cookies).forEach((cookieName) => {
      removeCookie(cookieName);
    });
    navigate("/");
  };

  const PlacedNavigation = () => {
    navigate("/order");
  };
  return (
    <div className={styles.mainDiv}>
      {isLogin ? (
        <div className="text-[16px]">{name.length > 0 ? name : ""}</div>
      ) : (
        ""
      )}
      {!isLogin ? (
        <div className={styles.txt} onClick={showCartHandler}>
          <p>Cart</p>
        </div>
      ) : (
        <div className={styles.txt} onClick={PlacedNavigation}>
          <p>Orders</p>
        </div>
      )}
      {!isLogin ? (
        <div className={styles.txt} onClick={loginNavigation}>
          <p>Login</p>
        </div>
      ) : (
        <div className={styles.txt} onClick={showCartHandler}>
          <p>Cart</p>
        </div>
      )}
      {!isLogin ? (
        <div className={styles.txt} onClick={loginNavigation}>
          <p>Sign Up</p>
        </div>
      ) : (
        <div className={styles.txt} onClick={logoutHandler}>
          <p>Logout</p>
        </div>
      )}
    </div>
  );
};

export default DropDown;
