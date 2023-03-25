// import { useParams } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = ({ data }) => {
  //   const params = useParams();
  return (
    <div className={styles.container}>
      {/* {params.id} */}
      {data.name}
    </div>
  );
};

export default Menu;
