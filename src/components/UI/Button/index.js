import styled from "styled-components";

const Button = styled.button`
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.default};
    width: ${({buttonSize})=> buttonSize === "full" ? "100%" : `${buttonSize}px`};
    padding: 0.5rem 2rem;
    color: white;
    margin: 1rem 0 2rem;
    border: #06d6a0 solid 1px;
    border-radius: 7px;
    cursor: pointer;
`

export default Button;