import styles from "./Index.module.css";
import Header from "./Header";
import Order from "./Order";

const Index = () => {
  return (
    <div className={styles.bg}>
      <div>
        <Header />
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
};

export default Index;
