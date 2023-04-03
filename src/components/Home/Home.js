import styles from "./Home.module.css";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.semicontainer}>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
