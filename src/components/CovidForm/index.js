// Import usestate, css, nanoid
import { nanoid } from "nanoid";
import { useState } from "react";
import StyledCovidForm from "./CovidForm.Styled";
import { useDispatch, useSelector } from "react-redux";
import { addCovid } from "../../features/covidSlice";

const CovidForm = () => {
  const covid = useSelector((state) => state.covid.covid);
  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({
    province: "Jakarta",
    status: "positif",
    jumlah: "",
  });

  const [dotKey, setDotKey] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputChange((oldInput) => ({
      ...oldInput,
      [name]: value,
    }));

    if (value.includes(".")) {
      setDotKey(true);
      setAlert(false);
    } else {
      setDotKey(false);
      setAlert(false);
    }
  };

  const provinceOption = covid.provinces.map((kota) => (
    <option key={nanoid(5)} value={kota.kota}>
      {kota.kota}
    </option>
  ));

  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const findIndex = covid.provinces.findIndex(
      (index) => inputChange.province === index.kota
    );

    if (findIndex !== -1) {
      if (inputChange.jumlah === "") {
        setAlert(true);
      } else if (dotKey === true) {
        setAlert(false);
      } else {
        setDotKey(false);
        setAlert(false);
        setSuccess(true);

        const newData = {
          ...covid.provinces[findIndex],
          kasus:
            inputChange.status === "positif"
              ? parseInt(inputChange.jumlah) + covid.provinces[findIndex].kasus
              : covid.provinces[findIndex].kasus,
          sembuh:
            inputChange.status === "sembuh"
              ? parseInt(inputChange.jumlah) + covid.provinces[findIndex].sembuh
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

        dispatch(
          addCovid(newData)
        );
      }
    }
  };

  return (
    <StyledCovidForm>
      <section className="covidForm__left">
        <img src={require("../../assets/img/Form-image.png")} alt="Form" />
      </section>
      <section className="covidForm__right">
        <h1>Form Covid</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {success && (
              <label className="covidForm__success">
                Data successfully updated
              </label>
            )}
            <label>Provinsi</label>
            <select
              name="province"
              onChange={handleInput}
              value={inputChange.province}
            >
              {provinceOption}
            </select>
          </div>
          <div>
            <label>Status</label>
            <select
              name="status"
              onChange={handleInput}
              value={inputChange.status}
            >
              <option value="positif">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
          </div>
          <div>
            <label>
              Jumlah
              <span>{alert && `(Wajib diisi)`}</span>
              <span>{dotKey && `(Jumlah tidak boleh Desimal)`}</span>
            </label>
            <input
              type="number"
              name="jumlah"
              value={inputChange.jumlah}
              onChange={handleInput}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </StyledCovidForm>
  );
};

export default CovidForm;
