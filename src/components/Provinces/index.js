import { useSelector } from "react-redux";
import StyledProvinces from "./Provinces.Styled";
import { nanoid } from "nanoid";

// menangkap data props yang dikirim dari home
const Provinces = () => {

  const covid = useSelector((state)=>state.covid.covid);
  
  const tableRows = covid.provinces.map((data, index) => (
    <tr key={data.kota}>
      <td>{index + 1}</td>
      <td>{data.kota}</td>
      <td>{data.kasus}</td>
      <td>{data.sembuh}</td>
      <td>{data.dirawat}</td>
      <td>{data.meninggal}</td>
    </tr>
  ));

  return (
    <StyledProvinces>
      <h1>Provinsi</h1>
      <p>Data Covid Berdasarkan Provinsi</p>
      <div className="provinces__tableWrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </StyledProvinces>
  );
};

export default Provinces;
