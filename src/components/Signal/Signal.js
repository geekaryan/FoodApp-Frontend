import NoInternet from "./../../assets/nointernet.png";
import styles from "./Signal.module.css";

const Signal = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={NoInternet} alt="No Internet" />
      </div>
      <div className="font-custom font-bold text-xl">
        <p>No Internet Connection</p>
      </div>
      <div className="font-custom">
        <p>
          Your internet connection is currently not available please check or
          try again.
        </p>
      </div>
    </div>
  );
};

export default Signal;
