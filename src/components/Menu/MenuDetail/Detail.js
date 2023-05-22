import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../../store";

import ReactStars from "react-rating-stars-component";
import burger from "./../../../assets/burgerdetail.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHanlder = () => {
    dispatch(counterActions.increment());
  };

  const decrementHanlder = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.img}>
          <img src={burger} alt="burger" />
        </div>
        <div className={styles.price}>
          <span>₹ {data.ratings}</span>
        </div>
      </div>

      <div>
        <div className={styles.name}>
          <span>{data.name}</span>
        </div>
        <div className={styles.item}>
          <div>
            <span>Bun: {data.description}</span>
          </div>
          <div>
            <span>veggie: {data.name}</span>
          </div>
          <div>
            <span>Cheese: {data.name}</span>
          </div>
          <div>
            <span>Pickle: {data.name}</span>
          </div>
        </div>
        <div className={styles.ratingDiv}>
          <div>
            {" "}
            <span className={styles.rtext}>Ratings</span>{" "}
            <span className={styles.ntext}>: {data.ratings}</span>{" "}
          </div>
          <div>
            <ReactStars
              value={data.ratings}
              count={5}
              size={100}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
        </div>
        <div className="flex gap-[78px] items-center justify-center ">
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
        </div>
        <div className="mt-[34px] flex justify-center">
          <button className=" border-solid border-2 border-black pt-[12px] pb-[12px] px-[42px] py-[42px] rounded bg-yellow-300 hover:bg-white font-custom">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
