import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Detail from "./components/Detail";
import { useApi } from "./services/useApi";

const MainRoutes = () => {
  useApi();

  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
