import NoInternet from "./../../assets/nointernet.png";
import styles from "./Signal.module.css";

const Signal = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={NoInternet} alt="No Internet" />
      </div>
      <div className={styles.noConnection}>
        <p>No Internet Connection</p>
      </div>
      <div className={styles.longText}>
        <p>
          Your internet connection is currently not available please check or
          try again.
        </p>
      </div>
    </div>
  );
};

export default Signal;
