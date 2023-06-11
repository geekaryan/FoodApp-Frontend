// import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../../store/cart-slice";

import burger from "./../../../../assets/mobileburgerimage.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  // console.log(data);

  const dispatch = useDispatch();
  const showcounter = useSelector((state) => state.count.counter);
  console.log(showcounter);

  const [cookies] = useCookies(["jwt", "name"]);
  console.log(cookies.jwt);

  const buyHandler = async () => {
    try {
      const response = await fetch("/api/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.jwt}`,
        },
        body: JSON.stringify({
          itemName: data.name,
          itemPrice: data.price,
          itemQuantity: 2,
        }),
      });

      if (!response.ok) {
        console.log("Api is not working properly");
      }
      const hope = await response.json();
      console.log(hope);
    } catch (err) {
      console.log(err.message);
      // setError("Please Login or Singup...");
      // navigate("/register");
    }
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <div className={styles.containerflex}>
        <div>
          <img src={burger} alt="burger" />
        </div>

        <div className={styles.flex}>
          <div>
            <span className={styles.priceText}>₹ {data.price}</span>
          </div>
          <div>
            <span>
              <span className={styles.rating}>Rating</span>: {data.ratings}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.titleDiv}>
        <div className={styles.title}>
          <span>{data.name}</span>
        </div>
        <div className={styles.description}>
          <span>{data.description}</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[44px] mt-[24px] mb-[24px]">
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
      </div>
      <div className="flex justify-center mt-[22px]">
        <button
          onClick={buyHandler}
          className="border-solid border-2 border-black pt-[12px] pb-[12px] px-[32px] py-[32px] bg-yellow-300 hover:bg-white font-custom"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Detail;
