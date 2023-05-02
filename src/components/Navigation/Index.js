// import { useState } from "react";
import logo from "./../../assets/logo2.png";
import user from "./../../assets/user.png";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.flex}>
          <div className={styles.text}>
            <h1>Order</h1>
          </div>
          <div className={styles.text}>
            <h1>Menu</h1>
          </div>
          <div className={styles.userProfile}>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
      <div className={styles.secondFlex}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.userDetail}>
          <img src={user} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Index;
