import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";

import HomeOwner from "./pages/HomeOwner";

import Let from "./pages/let";
import Propertymanagement from "./pages/Property-management";
import Maintenance from "./pages/Maintenance";
import SellwithUs from "./pages/SellwithUs";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import ComplaintsProcedure from "./pages/ComplaintsProcedure";
import SellDiscreetly from "./pages/SellDiscreetly";
import TermsPage from "./pages/TermsPage";
import ValuationForm from "./pages/ValuationForm";
import PropertiesPage from "./pages/Properties";
import SinglePropertyPage from "./pages/SinglePropertyPage";

const NotFound = () => (
  <div className="min-h-screen bg-white flex items-center justify-center px-4">
    <div className="max-w-md w-full text-center">
      <h1 className="text-6xl font-bold text-[#001C56] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a
        href="/"
        className="bg-[#001C56] text-white px-6 py-3 rounded font-primary text-sm hover:opacity-90 transition duration-300 inline-block"
      >
        Go to Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeowners" element={<HomeOwner />} />

          <Route path="/let" element={<Let />} />
          <Route path="/property-management/" element={<Propertymanagement />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/sell-with-us" element={<SellwithUs />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/complaints" element={<ComplaintsProcedure />} />
          <Route path="/sell-discreetly" element={<SellDiscreetly />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/valuation" element={<ValuationForm />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/property/:slug" element={<SinglePropertyPage />} />
          <Route path="/single-property" element={<Navigate to="/properties" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
