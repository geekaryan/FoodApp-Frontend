import Detail from "./Detail";
import Feedback from "./Feedback";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div>
      <div>
        <Detail />
      </div>
      <div className={styles.feedback}>
        <Feedback />
      </div>
    </div>
  );
};

export default Index;
