import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import GlobalStyle from "./components/GlobalStyle";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import About from "./pages/About"
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/indonesia" element={<Indonesia />}></Route>
          <Route path="/province" element={<Provinsi />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>
  );
}

export default App;
