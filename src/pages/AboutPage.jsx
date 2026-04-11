import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import TrustedPartnerSection from "../Common/TrustedPartnerSection"
import TestimonialSection from "../Common/TestimonialSection"
import TeamMember from "../components/AboutPage/TeamMember"
import SaleTeam from "../components/AboutPage/SaleTeam"
import LettingsTeam from "../components/AboutPage/LettingsTeam"
import BerkleyEstatesSection from "../components/AboutPage/BerkleyEstatesSection"
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
          <TeamMember />
          <SaleTeam />
          <LettingsTeam />
       <TestimonialSection pageId="aboutus" />
       <BerkleyEstatesSection />
        </div>
    )
}

export default AboutPage;