import { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      isLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className={loading ? styles.visible : styles.hidden}>
      <h1>Loading screen is here for 3 sec</h1>
    </div>
  );
};

export default LoadingScreen;
