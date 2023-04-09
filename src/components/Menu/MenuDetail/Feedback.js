import styles from "./Feedback.module.css";
import lady from "./../../../assets/lady.png";
import upvote from "./../../../assets/upvote.png";
import downvote from "./../../../assets/downvote.png";

const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Restaurant Feedback :</span>
      </div>
      <div className={styles.reviews}>
        <div>
          <img
            src={lady}
            alt="profile"
            style={{ height: "60px", width: "300px" }}
          />
        </div>
        <div>
          <div className={styles.rowner}>
            <span>Sam Wheaton</span>
          </div>
          <div>
            <div className={styles.description}>
              <span>
                I ordered the minced ham burger with green pepper and onion, and
                I was pleasantly surprised by how juicy and flavorful it was.
                The minced ham was lean but not dry, and the seasonings added a
                nice touch. The bun was soft and toasted, and the burger came
                with lettuce, tomato, and mayo. It was a satisfying and
                delicious meal that I would recommend to anyone who loves ham.
                The service was friendly and fast, and the price was reasonable.
                This restaurant knows how to make a great ham burger
              </span>
            </div>
            <div className={styles.votes}>
              <div>
                <img src={upvote} alt="upvote" className={styles.hover} />
              </div>
              <div>
                <img src={downvote} alt="downvote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
