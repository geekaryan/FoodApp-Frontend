import burger from "./../../../../assets/mobileburgerimage.png";
import styles from "./Detail.module.css";

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className={styles.containerflex}>
        <div>
          <img src={burger} alt="burger image" />
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
    </div>
  );
};

export default Detail;
