import styles from "./Feedback.module.css";
import customer from "./../../../../assets/customer.png";

const Feedback = () => {
  return (
    <div>
      <div className={styles.restText}>
        <span>Restaurant Feedback:</span>
      </div>
      <div>
        <div className={styles.flex}>
          <div>
            <img src={customer} alt="customer" />
          </div>
          <div className={styles.userName}>
            <span>Sam Wheaton</span>
          </div>
        </div>
        <div className={styles.userText}>
          <span>
            I ordered the minced ham burger with green pepper and onion, and I
            was pleasantly surprised by how juicy and flavorful it was. The
            minced ham was lean but not dry, and the seasonings added a nice
            touch. The bun was soft and toasted, and the burger came with
            lettuce, tomato, and mayo. It was a satisfying and delicious meal
            that I would recommend to anyone who loves ham. The service was
            friendly and fast, and the price was reasonable. This restaurant
            knows how to make a great ham burger
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
