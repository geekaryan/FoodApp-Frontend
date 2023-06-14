import Detail from "./Detail";
import Feedback from "./Feedback";
import styles from "./Index.module.css";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <Detail
          id={props.data._id}
          price={props.data.price}
          title={props.data.name}
          description={props.data.description}
          ratings={props.data.ratings}
        />
      </div>
      <div className={styles.feedback}>
        <Feedback />
      </div>
    </div>
  );
};

export default Index;
