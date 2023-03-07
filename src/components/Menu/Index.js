import Heading from "./Heading";
import Item from "./Item";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <div>
        <Heading />
      </div>
      <div>
        <Item />
      </div>
    </div>
  );
};

export default Index;
