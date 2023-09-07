import { useState, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import styles from "./Home.module.css";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    //using localStorage to store and check the loading condition..
    const hasLoadingScreenShown = localStorage.getItem("hasLoadingScreenShown");
    if (hasLoadingScreenShown) {
      isLoading(false);
    } else {
      const loadingTimeout = setTimeout(() => {
        isLoading(false);
        localStorage.setItem("hasLoadingScreenShown", "true");
      }, 3000);

      return () => clearTimeout(loadingTimeout);
    }

    //now adding the functionality when user closes the tab or window .. or
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("hasLoadingScreenShown");
    });

    //when user unmounts..

    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.removeItem("hasLoadingScreenShown");
      });
    };
  }, []);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
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
      )}
    </>
  );
};

export default Home;
