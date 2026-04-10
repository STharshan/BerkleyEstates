import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Propertymanagement from "./pages/Property-management";
import HomeOwner from "./pages/HomeOwner";
import Maintenance from "./pages/Maintenance";
import Let from "./pages/let";
import SellwithUs from "./pages/SellwithUs";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeowners" element={<HomeOwner />} />
        <Route path="/property-management" element={<Propertymanagement />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/let" element={<Let />} />
        <Route path="/sell-with-us" element={<SellwithUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;