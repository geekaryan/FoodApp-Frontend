import Detail from "./Detail";
import Feedback from "./Feedback";
import styles from "./Index.module.css";

const Index = ({ data }) => {
  return (
    <div>
      <div>
        <Detail data={data} />
      </div>
      <div className={styles.feedback}>
        <Feedback data={data} />
      </div>
    </div>
  );
};

export default Index;
