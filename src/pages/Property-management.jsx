import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import TrustedPartnerSection from "../Common/TrustedPartnerSection"
import LetsTalkSection from "../components/Property-management/LetsTalkSection"
import PropertyExpertiseSection from "../components/Property-management/PropertyExpertiseSection"
import TestimonialSection from "../Common/TestimonialSection"
import ContactSection from "../components/Property-management/Contact"
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
           <LetsTalkSection />
           <PropertyExpertiseSection />
          <TestimonialSection pageId="Propertymanagement" />
           <ContactSection />
        </div>
    )
}

export default Propertymanagement;