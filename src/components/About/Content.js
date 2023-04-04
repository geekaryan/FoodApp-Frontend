import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Who we are?</span>
      </div>
      <div className={styles.desc}>
        <span>
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple
          needs. Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out
          at restaurants. On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage and
          acquire customers to grow their business while also providing a
          reliable and efficient last mile delivery service.
        </span>
      </div>
    </div>
  );
};

export default Content;
