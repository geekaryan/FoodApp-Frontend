// import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../../store/cart-slice";
// import { sumActions } from "../../../../store/counter-slice";
import { useNavigate } from "react-router-dom";

import burger from "./../../../../assets/mobileburgerimage.png";
import styles from "./Detail.module.css";

const Detail = (props) => {
  // console.log(data);

  const dispatch = useDispatch();
  const showcounter = useSelector((state) => state.sum.counter);
  console.log(showcounter);
  const auth = useSelector((state) => state.auth.login);
  console.log("Mobile version auth token", auth);

  const [cookies] = useCookies(["jwt", "name"]);
  console.log(cookies.jwt);

  const navigate = useNavigate();

  // const buyHandler = async () => {
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
  //     // setError("Please Login or Singup...");
  //     // navigate("/register");
  //   }
  // };

  // ---> 15-09-2023 i have just commented it Don't know the reason yet!!
  // const incrementHandler = () => {
  //   dispatch(sumActions.increment());
  // };
  // const decrementHandler = () => {
  //   dispatch(sumActions.decrement());
  // };

  const addToHanlder = () => {
    dispatch(
      counterActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  const movetoLoginHandler = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className={styles.containerflex}>
        <div>
          <img src={burger} alt="burger" />
        </div>

        <div className={styles.flex}>
          <div>
            <span className={styles.priceText}>₹ {props.price}</span>
          </div>
          <div>
            <span>
              <span className={styles.rating}>Rating</span>: {props.ratings}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.titleDiv}>
        <div className={styles.title}>
          <span>{props.title}</span>
        </div>
        <div className={styles.description}>
          <span>{props.description}</span>
        </div>
      </div>
      {/* <div className="flex justify-center items-center gap-[44px] mt-[24px] mb-[24px]">
        <div>
          <button
            onClick={decrementHandler}
            className="border-solid border-2 border-gray-600 text-2xl rounded p-2"
          >
            -
          </button>
        </div>
        <div className="font-custom text-2xl">{showcounter}</div>
        <div>
          <button
            className="border-solid border-2 border-gray-600 text-2xl rounded p-2"
            onClick={incrementHandler}
          >
            +
          </button>
        </div>
      </div> */}
      {auth ? (
        <div className="flex justify-center mt-[22px]">
          <button
            onClick={addToHanlder}
            className="border-solid border-2 border-black pt-[12px] pb-[12px] px-[32px] py-[32px] bg-yellow-300 hover:bg-white font-custom"
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-[22px]">
          <button
            onClick={movetoLoginHandler}
            className="border-solid border-2 border-black pt-[12px] pb-[12px] px-[32px] py-[32px] bg-yellow-300 hover:bg-white font-custom"
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Detail;
