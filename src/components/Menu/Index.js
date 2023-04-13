import { Link } from "react-router-dom";
import burger from "./../../assets/burger.png";

// import Item from "./Item";
import styles from "./Index.module.css";

const Index = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className={styles.srcDiv}>
        <input
          type="text"
          placeholder="Search food items.."
          className={styles.searchinput}
        />
      </div>
      <div className={styles.menubar}>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
        <div>
          <span>Main Course</span>
        </div>
      </div>
      <div className={styles.apiContainer}>
        {data.map((menu) => {
          return (
            <div>
              <Link to={menu._id}>
                <div className={styles.eachitem}>
                  <div>
                    <img src={burger} alt="burger" />
                  </div>
                  <div>{menu.name}</div>
                  <div className={styles.priceFlex}>
                    <div>{menu.price}</div>
                    <div className={styles.buttonflex}>
                      <div>
                        <button>-</button>
                      </div>
                      <div>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
