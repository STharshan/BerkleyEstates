import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import TrustedPartnerSection from "../Common/TrustedPartnerSection"

const Propertymanagement = () => {
    return (
        <div>
          <HeroSection
            title="Property Management"
            bgImage="/hero-property-management.jpeg"
          />
          
          {/* Injecting data using id */}
          <AboutSection id="Propertymanagement" />
          
          {/* Injecting data using pageId */}
          <TrustedPartnerSection pageId="Propertymanagement" />
          
        </div>
    )
}

export default Propertymanagement;