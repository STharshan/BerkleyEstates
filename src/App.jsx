import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <Footer />
    </Router>
  );
}

export default App;