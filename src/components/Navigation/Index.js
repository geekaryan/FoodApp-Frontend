import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo2.png";
import user from "./../../assets/user.png";
import cart from "./../../assets/cart.png";
import styles from "./Index.module.css";

const Index = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.cartIsVisible);
  const cartQuantity = useSelector((state) => state.count.totalQuantity);

  const toggleHandler = () => {
    console.log("Hi from the toggle button");
    dispatch(uiActions.toggle());
  };
  return (
    <div>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.img}>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className={styles.flex}>
          <div className={styles.text}>
            <h1>Order</h1>
          </div>
          <div className={styles.text} style={{ display: "flex" }}>
            <button onClick={toggleHandler}>
              <img src={cart} alt="cart" />
            </button>
            <div className="mx-2">
              <p>{cartQuantity}</p>
            </div>
          </div>
          <div className={styles.text}>
            <h1>Menu</h1>
          </div>
          <div className={styles.userProfile}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
      <div className={styles.secondFlex}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.userDetail}>
          <img src={user} alt="user" />
        </div>
      </div>

      {toggle && (
        <div className={styles.cart}>
          <div className={styles.fooddetail}>
            <div>
              <p>Hamburger</p>
            </div>
            <div>$10.00</div>
          </div>
          <div className={styles.fooddetails}>
            <div>
              <p>X2</p>
            </div>
            <div className="flex items-center">
              <div className="ml-[22px] mr-[22px]">
                <button className={styles.btn}>-</button>
              </div>
              <div>
                <button className={styles.btn}>+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
