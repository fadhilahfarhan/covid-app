import styles from "./index.module.css";

// menerima props dikirim dari komponen global
const Card = (props) => {
  // melakukan destructing pada props
  // saya menggunakan styles[status] agar style css bisa dibedakan berdasarkan status
  const { total, status } = props;
  return (
    <div className={styles.global__group}>
      <h2>{status}</h2>
      <h1 className={styles[status]}>{total}</h1>
    </div>
  );
};

export default Card;