import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SellwithUs from "./pages/SellwithUs";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-berkley-estate" element={<SellwithUs />} />
      </Routes>
    </Router>
  );
}

export default App;
