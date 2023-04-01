import styles from "./Login.module.css";
import image from "./../../assets/login.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="sideimage" />
      </div>
    </div>
  );
};

export default Login;
