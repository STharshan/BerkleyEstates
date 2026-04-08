import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
