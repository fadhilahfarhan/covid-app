// Import usestate, css, nanoid
import { nanoid } from "nanoid";
import styles from "./index.module.css";
import { useState } from "react";

// Membuat CovidForm dan menerima props dari Home.js karena menggunakan Lifting State
const CovidForm = (props) => {
  const { covid, setCovid } = props;

  // state ini untuk menangkap dan mengubah hasil inputan pada form
  const [inputChange, setInputChange] = useState({
    province: "Jakarta",
    status: "positif",
    jumlah: "",
  });

  // state untuk memunculkan alert jika ada tanda "." pada inputan
  const [dotKey, setDotKey] = useState(false);

  // membuat handleInput untuk menangkap setiap perubahan
  // mengambil name dan value
  // name untuk menentukan province, status atau jumlah
  // oldInput input sebelumnya
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputChange((oldInput) => ({
      ...oldInput,
      [name]: value,
    }));

    if (value.includes(".")) {
      setDotKey(true);
      setAlert(false)
    } else {
      setDotKey(false);
      setAlert(false)
    }
  };

  // menggunakan map untuk looping option pada select province
  const provinceOption = covid.provinces.map((kota) => (
    <option key={nanoid(5)} value={kota.kota}>
      {kota.kota}
    </option>
  ));

  // state alert untuk memunculkan tulisan alert
  const [alert, setAlert] = useState(false);

  // state success untuk memunculkan tulisan success
  const [success, setSuccess] = useState(false);

  // membuat handleSubmit untuk menghandle jika form disubmit
  const handleSubmit = (e) => {
    // preventDefault mencegah halaman direfresh ketika submit
    e.preventDefault();

    // mencari index yang akan diupdate menggunakan findIndex
    const findIndex = covid.provinces.findIndex(
      (index) => inputChange.province === index.kota
    );

    // untuk mengecek kondisi jika ditemukan index pada findIndex
    // menggunakan kondisi if lagi untuk memunculkan alert pada form jumlah
    // jika form tidak diisi sama sekali akan menyebabkan data menjadi Nan dan error
    if (findIndex !== -1) {
      if (inputChange.jumlah === "") {
        setAlert(true);
      } else if (dotKey === true) {
        setAlert(false);
      } else {
        // menset kembali menjadi false jika sebelumnya berubah true
        setDotKey(false);
        setAlert(false);
        setSuccess(true)

        // parseInt() untuk mengubah dari string menjadi Int
        // saya juga menggunakan ternary untuk menentukan data baru dimasukan jika ada
        // dan data lama yang akan dimasukan jika tidak ada data baru
        const newData = {
          ...covid.provinces[findIndex],
          kasus:
            inputChange.status === "positif"
              ? parseInt(inputChange.jumlah) + 
                covid.provinces[findIndex].kasus
              : covid.provinces[findIndex].kasus,
          sembuh:
            inputChange.status === "sembuh"
              ? parseInt(inputChange.jumlah) + 
                covid.provinces[findIndex].sembuh
              : covid.provinces[findIndex].sembuh,
          meninggal:
            inputChange.status === "meninggal"
              ? parseInt(inputChange.jumlah) +
                covid.provinces[findIndex].meninggal
              : covid.provinces[findIndex].meninggal,
          dirawat:
            inputChange.status === "dirawat"
              ? parseInt(inputChange.jumlah) +
                covid.provinces[findIndex].dirawat
              : covid.provinces[findIndex].dirawat,
        };

        // membuat variable update data dengan data dari newData
        const dataProvinces = [...covid.provinces];
        dataProvinces[findIndex] = newData;
        // setelah menjalankan state setCovid untuk memperbarui data
        setCovid({
          ...covid,
          provinces: dataProvinces,
        });
      }
    }
  };

  return (
    <>
      <div className={styles.covidForm__container}>
        <section className={styles.covidForm__left}>
          <img
            className={styles.covidForm__image}
            src={require("../../assets/img/Form-image.png")}
            alt="Form"
          />
        </section>
        <section className={styles.covidForm__right}>
          <h1 className={styles.covidForm__title}>Form Covid</h1>
          <form className={styles.covidForm__form} onSubmit={handleSubmit}>
            <div className={styles.covidForm__inputGroup}>
            {success && <label className={styles.covidForm__success}>Data successfully updated</label>}
              <label className={styles.covidForm__inputTitle}>Provinsi</label>
              <select
                className={styles.covidForm__input}
                name="province"
                onChange={handleInput}
                value={inputChange.province}
              >
                {provinceOption}
              </select>
            </div>
            <div className={styles.covidForm__inputGroup}>
              <label className={styles.covidForm__inputTitle}>Status</label>
              <select
                name="status"
                className={styles.covidForm__input}
                onChange={handleInput}
                value={inputChange.status}
              >
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
            </div>
            <div className={styles.covidForm__inputGroup}>
              <label className={styles.covidForm__inputTitle}>
                Jumlah
                <span className={styles.covidForm__alert}>
                  {alert && `(Wajib diisi)`}
                </span>
                <span className={styles.covidForm__alert}>
                  {dotKey && `(Jumlah tidak boleh Desimal)`}
                </span>
              </label>
              <input
                className={styles.covidForm__input}
                type="number"
                name="jumlah"
                value={inputChange.jumlah}
                onChange={handleInput}
              />
            </div>
            <div className={styles.covidForm__inputGroup}>
              <button className={styles.covidForm__button}>Submit</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default CovidForm;
