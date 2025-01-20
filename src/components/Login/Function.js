import { useState } from "react";
import styles from "./Function.module.css";
import google from "./../../assets/google.png";
import twitter from "./../../assets/twitter.png";
import fb from "./../../assets/fb.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { userActions } from "../../store/user-slice";

const Function = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user;
  let uid;

  //s represents singup
  //l represents login

  ///--------------> Singup State <--------------------
  const [sname, setSName] = useState("");
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [spasswordConfirm, setSPasswordConfirm] = useState("");

  ///--------------> Login State <--------------------
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");

  const styleChanger = () => {
    setLogin(!login);
  };

  const LoginButtonHandler = async () => {
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
    if (data.status === "success") {
      user = data.data.user.name;
      uid = data.data.user._id;
      console.log(user);
      console.log(uid);
      dispatch(userActions.add(user));
      dispatch(userActions.adduid(uid));
      dispatch(authActions.logged());
      navigate("/");
    } else {
      alert("Please Enter valid details");
    }
  };

  const SingupButtonHandler = async () => {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sname,
        email: semail,
        password: spassword,
        passwordConfirm: spasswordConfirm,
      }),
    });

    const data = await response.json();
    console.log(data);
    dispatch(userActions.add(user));
    dispatch(authActions.logged());
    navigate("/");
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
                placeholder="Username"
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
            <button className={styles.btn} onClick={LoginButtonHandler}>
              Login
            </button>
          </div>
        )}
        {/* singup button */}
        {login && (
          <div>
            <button className={styles.btn} onClick={SingupButtonHandler}>
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
    </div>
  );
};

export default Function;
