import styles from "./index.module.css";
import { nanoid } from "nanoid";

// menangkap data props yang dikirim dari home
const Provinces = (props) => {
  const { covid } = props;
  // menggunakan map untuk loop tableRows dan setiap rows memiliki key unik
  const tableRows = covid.provinces.map((data, index) => (
    <tr className={styles.provinces__tr} key={nanoid(5)}>
      <td className={styles.provinces__td}>{index + 1}</td>
      <td className={styles.provinces__td}>{data.kota}</td>
      <td className={styles.provinces__td}>{data.kasus}</td>
      <td className={styles.provinces__td}>{data.sembuh}</td>
      <td className={styles.provinces__td}>{data.dirawat}</td>
      <td className={styles.provinces__td}>{data.meninggal}</td>
    </tr>
  ));

  return (
    <>
      <div className={styles.provinces__container}>
        <h1 className={styles.provinces__title}>Provinsi</h1>
        <p className={styles.provinces__subTitle}>
          Data Covid Berdasarkan Provinsi
        </p>
        <div className={styles.provinces__tableWrapper}>
          <table className={styles.provinces__table}>
            <thead className={styles.provinces__thead}>
              <tr className={styles.provinces__tr}>
                <th className={styles.provinces__th}>No</th>
                <th className={styles.provinces__th}>Provinsi</th>
                <th className={styles.provinces__th}>Positif</th>
                <th className={styles.provinces__th}>Sembuh</th>
                <th className={styles.provinces__th}>Dirawat</th>
                <th className={styles.provinces__th}>Meninggal</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Provinces;
