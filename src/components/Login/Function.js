import { useState } from "react";
import styles from "./Function.module.css";
import google from "./../../assets/google.png";
import twitter from "./../../assets/twitter.png";
import fb from "./../../assets/fb.png";

const Function = () => {
  const [login, setLogin] = useState(false);
  const styleChanger = () => {
    setLogin(!login);
  };

  const LoginButtonHandler = async () => {
    const response = await fetch("", {
      method: "POST",
    });

    const data = await response.json();
  };
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.option}>
          <button
            className={login ? `${styles.notselect}` : `${styles.select}`}
            onClick={styleChanger}
          >
            Login
          </button>
          <button
            className={login ? `${styles.select}` : `${styles.notselect}`}
            onClick={styleChanger}
          >
            Signup
          </button>
        </div>

        {/* box of login */}
        {!login && (
          <div className={styles.box}>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="Email or username"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />
            </div>
            <div className={styles.forgot}>
              <span>Forgot Password</span>
            </div>
          </div>
        )}
        {/* box of Signup */}
        {login && (
          <div className={styles.box}>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="Email or username"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />
            </div>
            <div className={styles.confirm}>
              <input
                type="Confirm password"
                placeholder="Confirm Password"
                className={styles.input}
              />
            </div>
          </div>
        )}
        {/* login button */}
        {!login && (
          <div>
            <button className={styles.btn}>Login</button>
          </div>
        )}
        {/* singup button */}
        {login && (
          <div>
            <button className={styles.btn}>Sign up</button>
          </div>
        )}
        <div className={styles.or}>
          <span>or</span>
        </div>
        <div className={styles.flex}>
          <div>
            <img src={google} alt="google" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={fb} alt="fb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Function;
