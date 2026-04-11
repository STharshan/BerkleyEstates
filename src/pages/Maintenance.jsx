import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import FixfloSection from "../components/Maintenance/FixFlo"
const Maintenance = () => {
    return (
        <div>
          <HeroSection
            title="Maintenance"
            bgImage="/maintenance.jpg"
          />
          
          {/* Injecting data using id */}
          <AboutSection id="Maintenance" />

          <FixfloSection />
          
       
        </div>
    )
}

export default Maintenance;