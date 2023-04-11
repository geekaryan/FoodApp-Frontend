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
      <div>
        {data.map((menu) => (
          <Link to={menu._id}>
            <Item key={menu._id} menu={menu} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
