import styled from "styled-components";

const StyledProfile = styled.div`
  margin: 5rem auto;

  .profile__left {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
  }

  .profile__picture {
    width: 200px;
  }

  .profile__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    text-align: center;
  }

  h2 {
    margin: 1rem auto;
    color: #073b4c;
  }

  p {
    margin: 0.2rem auto;
    color: #64748b;
  }

  .profile__social{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img__social{
      width: 30px;
      margin: 1rem 0.5rem 0;
    }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    .profile__left {
      flex-basis: 45%;
      margin: 0 auto;
      justify-content: right;
      padding: 2rem;
    }

    .profile__picture {
      width: 400px;
      animation: slide-in-image 1s ease forwards;
    }
    @keyframes slide-in-image {
      0% {
        transform: translateY(10%);
        opacity: 0;
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }

    .profile__right {
      flex-basis: 45%;
      margin: 0 auto;
      display: block;
      text-align: left;
      animation: slide-in-profile 2s ease forwards;
    }

    @keyframes slide-in-profile {
      0% {
        transform: translateY(15%);
        opacity: 0;
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }

    .img__social{
      width: 30px;
      display: flex;
      margin: 1rem 0.5rem 0 0;
    }

    .profile__social{
      justify-content: start;
    }
  }
`;

export default StyledProfile;
