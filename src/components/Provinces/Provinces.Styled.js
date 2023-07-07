import styled from "styled-components";

const StyledProvinces = styled.div`
  padding: 2rem 1rem;
  text-align: center;

  h1 {
    color: #06d6a0;
  }
  p {
    color: #118ab2;
    padding: 0 0 2rem;
  }

  table,
  td,
  tr {
    border-collapse: collapse;
    border: 1px solid #64748b;
    padding: 1rem 0;
    text-align: center;
  }

  th {
    color: #06d6a0;
    padding: 1rem 2rem;
    border: 1px solid #64748b;
  }

  th:nth-child(2) {
    padding: 1rem 4rem;
  }

  .provinces__tableWrapper {
    overflow-x: scroll;
    box-shadow: -1px 4px 5px 0 rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 992px) {
    .provinces__tableWrapper {
      overflow-x: auto;
      display: flex;
      justify-content: center;
      box-shadow: none;
    }

    table {
      margin: 1rem 0;
      box-shadow: -1px 4px 5px 0 rgba(0, 0, 0, 0.2);
      border: 2px solid #64748b;
    }

    th {
      border-bottom: 2px solid #64748b;
    }
  }
`;

export default StyledProvinces;
