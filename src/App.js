import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
