const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Poppins:wght@300;400;500;700&display=swap');;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

h1{
  font-size: 3.052rem;
}
h2{
  font-size: 2.441rem;
}
h3{
  font-size: 1.953rem;
}
h4{
  font-size: 1.563rem;
}
p{
  font-size: 1rem;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

`;

export default GlobalStyle;
