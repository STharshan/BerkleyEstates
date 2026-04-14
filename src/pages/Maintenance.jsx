import HeroSection from "../Common/Hero"
import AboutSection from "../components/Maintenance/about"
import FixfloSection from "../components/Maintenance/FixFlo"
const Maintenance = () => {
    return (
        <div>
          <HeroSection
            title="Maintenance"
            bgImage="/maintenance.jpg"
          />
          
          <AboutSection sectionId="team" />

          <FixfloSection />
          
       
        </div>
    )
}

export default Maintenance;