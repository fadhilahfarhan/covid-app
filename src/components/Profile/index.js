import StyledProfile from "./Profile.Styled";

const Profile = () => {
  return (
    <StyledProfile>
      <div className="profile__left">
        <img
          className="profile__picture"
          src={require("../../assets/img/Profile-image.png")}
          alt="Fadhilah Farhan"
        />
      </div>
      <div className="profile__right">
        <h2>Fadhilah Farhan</h2>
        <p>Mahasiswa STT Terpadu Nurul Fikri</p>
        <p>0110221268</p>
        <p>20 Tahun</p>
        <div className="profile__social">
          <a
            href="https://instagram.com/fadil.farhannn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img__social"
              src={require("../../assets/img/Instagram-icon.png")}
              alt="instagram"
            />
          </a>
          <a
            href="https://github.com/fadhilahfarhan"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img__social"
              src={require("../../assets/img/Github-icon.png")}
              alt="github"
            />
          </a>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
