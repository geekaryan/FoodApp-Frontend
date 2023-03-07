import styles from "./Home.module.css";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
