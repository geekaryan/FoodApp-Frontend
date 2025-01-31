import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../store/cart-slice";
import styles from "./Cart.module.css";
import { placedActions } from "../store/placed-slice";

const Card = (props) => {
  const cartslice = useSelector((state) => state.count.items);
  console.log(cartslice);
  const uid = useSelector((state) => state.user.uid);
  const items = useSelector((state) => state.placed.items);
  const quantitys = useSelector((state) => state.placed.quantity);
  const prices = useSelector((state) => state.placed.price);

  console.log("This is the cart", uid);
  console.log("This is the cart", items);
  console.log("This is the cart", quantitys);
  console.log("This is the cart", prices);

  console.log(uid);
  const dispatch = useDispatch();
  const { name, price, quantity, totalPrice, id } = props;
  const removeItemHanlder = () => {
    dispatch(counterActions.removeItemFromCart(id));
    dispatch(placedActions.removeOrder(id));
    console.log("Item must be removed");
  };

  const updatedItems = [...items];
  const updatedQuantity = [...quantitys];
  const updatedPrice = [...prices];
  const addItemHandler = () => {
    dispatch(
      counterActions.addItemToCart({
        id,
        title: name,
        price,
      })
    );

    const existingItem = updatedItems.findIndex((i) => i === id);
    if (existingItem !== -1) {
      updatedQuantity[existingItem] += 1;
    } else {
      updatedItems.push(id);
      updatedQuantity.push(1);
      updatedPrice.push(price);
    }

    dispatch(
      placedActions.placeOrder({
        customer_id: uid,
        items: updatedItems,
        quantity: updatedQuantity,
        price: updatedPrice,
      })
    );
  };

  const placedOrderHandler = async () => {
    try {
      //here I have to write a post request
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: uid,
          order: [{ items, quantity: quantitys, price: prices }],
        }),
      });
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
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
        <button
          onClick={placedOrderHandler}
          className="bg-slate-200 rounded-md pt-2 pb-2 pl-2 pr-2 hover:bg-blue-500"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Card;

//now there is thing i have to change the schema of orders
//orders include a customer_id and items he had bss toh items ka ek array send krunga

//now next thing is I have to add to my backend only the rest of process is done
