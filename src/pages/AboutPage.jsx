import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import TrustedPartnerSection from "../Common/TrustedPartnerSection"
import TestimonialSection from "../Common/TestimonialSection"
const AboutPage = () => {
    return (
        <div>
          <HeroSection
            title="We are Berkley"
            bgImage="/aboutbanner.jpeg"
          />
          
          {/* Injecting data using id */}
          <AboutSection id="Aboutus" />

         <TrustedPartnerSection pageId="aboutus" />
          
       <TestimonialSection pageId="aboutus" />
        </div>
    )
}

export default AboutPage;