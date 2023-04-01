import Login from "./Login";
import Function from "./Function";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <div>
        <Login />
      </div>
      <div>
        <Function />
      </div>
    </div>
  );
};

export default Index;
