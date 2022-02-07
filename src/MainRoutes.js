import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Header from "./components/Home/Header";
import { useApi } from "./services/useApi";

const MainRoutes = () => {
  useApi();

  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Router>
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default MainRoutes;
