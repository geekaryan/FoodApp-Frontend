import { Link } from "react-router-dom";

import Item from "./Item";
import styles from "./Index.module.css";

const Index = ({ data }) => {
  return (
    <div>
      <div className={styles.srcDiv}>
        <input
          type="text"
          placeholder="Search food items.."
          className={styles.searchinput}
        />
      </div>
      <div className={styles.apiContainer}>
        {data.map((menu) => {
          return (
            <div>
              <Link to={menu._id}>
                <div>{menu.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
