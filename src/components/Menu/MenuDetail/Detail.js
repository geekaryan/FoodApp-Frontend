import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../store/cart-slice";
import { placedActions } from "../../../store/placed-slice";
// import { sumActions } from "../../../store/counter-slice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

import ReactStars from "react-rating-stars-component";
import burger from "./../../../assets/burgerdetail.png";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const [cookies] = useCookies(["jwt", "name"]);
  console.log(cookies.jwt);
  console.log(cookies.name);
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.sum.counter);
  console.log(counter);
  const auth = useSelector((state) => state.auth.login);
  // console.log("what my auth currently holds", auth);

  const navigate = useNavigate();

  // const num = data.name;
  // console.log

  // const incrementHanlder = () => {
  //   dispatch(sumActions.increment());
  // };

  // const decrementHanlder = () => {
  //   dispatch(sumActions.decrement());
  // };

  // const apiHandler = async () => {
  //   try {
  //     const response = await fetch("/api/order/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${cookies.jwt}`,
  //       },
  //       body: JSON.stringify({
  //         itemName: props.title,
  //         itemPrice: props.price,
  //         itemQuantity: 2,
  //       }),
  //     });

  //     if (!response.ok) {
  //       console.log("Api is not working properly");
  //     }
  //     const hope = await response.json();
  //     console.log(hope);
  //   } catch (err) {
  //     console.log(err.message);
  //     setError("Please Login or Singup...");
  //     navigate("/register");
  //   }
  // };

  console.log("Menu detail page console", props);

  const uid = useSelector((state) => state.user.uid);
  const items = useSelector((state) => state.placed.items);
  const quantity = useSelector((state) => state.placed.quantity);
  const price = useSelector((state) => state.placed.price);

  const movetoLoginHandler = () => {
    navigate("/register");
  };

  const updatedItems = [...items];
  const updatedQuantity = [...quantity];
  const updatedPrice = [...price];

  const addToHanlder = () => {
    dispatch(
      counterActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );

    //here i have to add my 2nd add to handler

    const existingItem = updatedItems.findIndex((i) => i === props.id);
    if (existingItem !== -1) {
      updatedQuantity[existingItem] += 1;
    } else {
      updatedItems.push(props.id);
      updatedQuantity.push(1);
      updatedPrice.push(props.price);
    }

    dispatch(
      placedActions.placeOrder({
        customer_id: uid,
        items: updatedItems,
        quantity: updatedQuantity,
        price: updatedPrice,
      })
    );
    console.log("data is sent successfully");
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.img}>
          <img src={burger} alt="burger" />
        </div>
        <div className={styles.price}>
          <span>₹ {props.price}</span>
        </div>
      </div>

      <div>
        <div className={styles.name}>
          <span>{props.title}</span>
        </div>
        <div className={styles.item}>
          <div>
            <span>Bun: {props.description}</span>
          </div>
          <div>
            <span>veggie: {props.description}</span>
          </div>
          <div>
            <span>Cheese: {props.description}</span>
          </div>
          <div>
            <span>Pickle: {props.description}</span>
          </div>
        </div>
        <div className={styles.ratingDiv}>
          <div>
            {" "}
            <span className={styles.rtext}>Ratings</span>{" "}
            <span className={styles.ntext}>: {props.ratings}</span>{" "}
          </div>
          <div>
            <ReactStars
              value={props.ratings}
              count={5}
              size={100}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
        </div>
        {/* <div className="flex gap-[78px] items-center justify-center ">
          <div>
            <button
              onClick={decrementHanlder}
              className="border-solid border-2 border-gray-600 text-2xl rounded p-2"
            >
              -
            </button>
          </div>
          <div className="font-custom text-3xl">{counter}</div>
          <div>
            <button
              onClick={incrementHanlder}
              className="border-solid border-2 border-gray-600 text-2xl rounded p-2"
            >
              +
            </button>
          </div>
        </div> */}
        <div className="mt-[34px] flex justify-center">
          {auth ? (
            <button
              onClick={addToHanlder}
              className=" border-solid border-2 border-black pt-[12px] pb-[12px] px-[42px] py-[42px] rounded bg-yellow-300 hover:bg-white font-custom"
            >
              Add to cart
            </button>
          ) : (
            <button
              onClick={movetoLoginHandler}
              className=" border-solid border-2 border-black pt-[12px] pb-[12px] px-[42px] py-[42px] rounded bg-yellow-300 hover:bg-white font-custom"
            >
              {" "}
              Add to cart
            </button>
          )}
        </div>
        {/* <div className="font-custom flex justify-center mt-2 text-2xl ">
          {error}
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
