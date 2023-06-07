// import { useState } from "react";
import { useCookies } from "react-cookie";

import burger from "./../../../../assets/mobileburgerimage.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  // console.log(data);

  const [cookies] = useCookies(["jwt", "name"]);
  console.log(cookies.jwt);

  const buyHandler = async () => {
    try {
      const response = await fetch("", {
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
        console.log("API is not working properly");
      }

      const result = response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
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
      {/* <div>

      </div> */}
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
