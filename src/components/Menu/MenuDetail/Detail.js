import ReactStars from "react-rating-stars-component";
import burger from "./../../../assets/burgerdetail.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  console.log(data);
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
        <div className="flex gap-[78px] ">
          <div>
            <button>+</button>
          </div>
          <div></div>
          <div>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
