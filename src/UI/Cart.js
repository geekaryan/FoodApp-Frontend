import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../store/cart-slice";
import styles from "./Cart.module.css";

const Card = (props) => {
  const cartslice = useSelector((state) => state.count.items);
  console.log(cartslice);
  const placedSlicecustomer = useSelector((state) => state.placed.customer_id);
  const placedSliceitems = useSelector((state) => state.placed.items);
  const placedSlicequantity = useSelector((state) => state.placed.quantity);
  const placedSliceprice = useSelector((state) => state.placed.price);
  console.log("I am form placedSlice", placedSlicecustomer);
  console.log("I am from placedSlice", placedSliceitems);
  console.log("I am from placedSlice", placedSlicequantity);
  console.log("I am from placedSlice", placedSliceprice);
  const uid = useSelector((state) => state.user.uid);
  console.log(uid);
  const dispatch = useDispatch();
  const { name, price, quantity, totalPrice, id } = props;
  const removeItemHanlder = () => {
    dispatch(counterActions.removeItemFromCart(id));
  };
  const addItemHandler = () => {
    dispatch(
      counterActions.addItemToCart({
        id,
        title: name,
        price,
      })
    );
  };

  //portal fucntioning is going to add soon
  return (
    <div className={styles.carts}>
      <div key={id} className={styles.cart}>
        <div className={styles.fooddetail}>
          <div>
            <p>{name}</p>
          </div>
          <div>
            ₹ {totalPrice}
            <p>(₹ {price} )</p>
          </div>
        </div>
        <div className={styles.fooddetails}>
          <div>
            <p>X{quantity}</p>
          </div>
          <div className="flex items-center">
            <div className="ml-[22px] mr-[22px]">
              <button onClick={removeItemHanlder} className={styles.btn}>
                -
              </button>
            </div>
            <div>
              <button onClick={addItemHandler} className={styles.btn}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-slate-200 rounded-md pt-2 pb-2 pl-2 pr-2 hover:bg-blue-500">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Card;

//now there is thing i have to change the schema of orders
//orders include a customer_id and items he had bss toh items ka ek array send krunga
