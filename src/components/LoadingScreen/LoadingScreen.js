// import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";
// import { CircularProgress } from "@mui/material";

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
      <div className="flex justify-center  flex-col gap-[20px] align-middle">
        <div className="text-white text-[32px] decoration-solid font-custom">
          <h1>Loading...</h1>
        </div>
        {/* <Spinner
          thickness="14px"
          speed="0.85s"
          emptyColor="gray.200"
          color="white"
          size="xl"
        /> */}

        {/* <div className="ml-[42px]">
          <CircularProgress />
        </div> */}
      </div>
    </div>
  );
};

export default LoadingScreen;

//Task to be completed
// → Going to fix cart
// → Fixing margin in mobile app view
