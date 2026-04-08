import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Propertymanagement from "./pages/Property-management";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-management" element={<Propertymanagement />} />
      </Routes>
    </Router>
  );
}

export default App;
