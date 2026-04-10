import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import TrustedPartnerSection from "../components/Property-management/TrustedPartnerSection"
const Propertymanagement = () => {
    return (
        <div>
         <HeroSection
        title="Property Management"
        bgImage="/hero-property-management.jpeg"
      />
          <AboutSection id="Propertymanagement" />
          <TrustedPartnerSection />
        </div>
    )
}

export default Propertymanagement