import { Link } from "react-router-dom";

import Heading from "./Heading";
import Item from "./Item";
import styles from "./Index.module.css";

const Index = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        <Heading />
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
