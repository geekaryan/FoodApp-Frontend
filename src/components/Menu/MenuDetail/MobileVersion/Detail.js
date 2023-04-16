import burger from "./../../../../assets/mobileburgerimage.png";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <div className={styles.containerflex}>
        <div>
          <img src={burger} alt="" />
        </div>
        <div className={styles.flex}>
          <div>
            <span className={styles.priceText}>$10</span>
          </div>
          <div>
            <span>
              <span className={styles.rating}>Rating</span>: 4.5
            </span>
          </div>
        </div>
      </div>
      <div className={styles.titleDiv}>
        <div className={styles.title}>
          <span>Ham Burger</span>
        </div>
        <div className={styles.description}>
          <span>Ham Burger Description must be added in here</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
