import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Function.module.css";
import google from "./../../../assets/google.png";
import twitter from "./../../../assets/twitter.png";
import fb from "./../../../assets/fb.png";

const Function = () => {
  const [login, setLogin] = useState(false);
  const styleChanger = () => {
    setLogin(!login);
  };

  const navigate = useNavigate();

  //--------------->Login Section <-----------------

  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");
  const LoginButtonHandler = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: lemail,
          password: lpassword,
        }),
      });

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }

    setLEmail("");
    setLPassword("");
  };

  //--------------->Sigup section <------------

  const [sname, setSName] = useState("");
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [spasswordConfirm, setSPasswordConfirm] = useState("");
  const SingupButtonHandler = () => {};
  return (
    <div className={styles.container}>
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
              value={lemail}
              onChange={(e) => setLEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={lpassword}
              onChange={(e) => setLPassword(e.target.value)}
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
              placeholder="Name"
              className={styles.input}
              value={sname}
              onChange={(e) => setSName(e.target.value)}
            />
          </div>
          <div className={styles.name}>
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              value={semail}
              onChange={(e) => setSEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={spassword}
              onChange={(e) => setSPassword(e.target.value)}
            />
          </div>
          <div className={styles.confirm}>
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              className={styles.input}
              value={spasswordConfirm}
              onChange={(e) => setSPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
      )}
      {/* login button */}
      {!login && (
        <div>
          <button onClick={LoginButtonHandler} className={styles.btn}>
            Login
          </button>
        </div>
      )}
      {/* singup button */}
      {login && (
        <div>
          <button onClick={SingupButtonHandler} className={styles.btn}>
            Sign up
          </button>
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
  );
};

export default Function;
