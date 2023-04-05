import arrow from "./../../../assets/stylearrow.png";
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={arrow} alt="arrow" />
      </div>
      <div className={styles.text}>
        <div>
          <span>
            {" "}
            <span style={{ color: "#E50E00" }}>No</span> cooking,
          </span>
        </div>
        <div>
          <span>
            No <span style={{ color: "#F52222" }}>hassle</span>,
          </span>
        </div>
        <div>
          <span>
            just <span style={{ color: "#EBC80F" }}>order</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Text;
