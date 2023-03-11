import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Coursel.module.css";

const Coursel = ({ slides }) => {
  //   console.log(slides);
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goTOprevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goTOnext = useCallback(() => {
    console.log("next");
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    console.log("use Effect");
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goTOnext();
    }, 3000);

    return () => clearTimeout(timeRef.current);
  }, [goTOnext]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftArrow} onClick={goTOprevious}>
        ⇦
      </div>
      <div className={styles.rightArrow} onClick={goTOnext}>
        ⇨
      </div>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.dotContainer}>
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              className={styles.dotStyle}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coursel;
