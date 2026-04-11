import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HomeOwner from "./pages/HomeOwner";
import Let from "./pages/let";
import Propertymanagement from "./pages/Property-management";
import Maintenance from "./pages/Maintenance"
import SellwithUs from "./pages/SellwithUs";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeowners" element={<HomeOwner />} />
        <Route path="/let" element={<Let />} />
        <Route path="/property-management" element={<Propertymanagement />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/sell-berkley-estate" element={<SellwithUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;