import styles from "./index.module.css";
import dataIndonesia from "../../utils/constants/indonesia.js";
import Card from "../Card";
import { nanoid } from "nanoid";

const Global = () => {
  // membuat variable berisi data dari indonesia.js
  const data = dataIndonesia;
  return (
    <>
      <div className={styles.global__container}>
        <h1 className={styles.global__title}>Indonesia</h1>
        <p className={styles.global__subTitle}>
          Data Covid berdasarkan Indonesia
        </p>
        <div className={styles.global__groups}>
          {/* 
            - Looping data menggunakan map untuk melooping card
            - memberikan props kepada card yaitu total, status dan key
          */}
          {data.indonesia.map((data) => (
            <Card total={data.total} status={data.status} key={nanoid()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Global;
