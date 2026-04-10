import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HomeOwner from "./pages/HomeOwner";
import Let from "./pages/let";
import Propertymanagement from "./pages/Property-management";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeowners" element={<HomeOwner />} />
        <Route path="/let" element={<Let />} />
        <Route path="/property-management" element={<Propertymanagement />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;