const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;