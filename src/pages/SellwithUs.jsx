import HeroSection from "../Common/Hero"
import AboutSection from "../Common/About"
import RightmoveSection from "../components/SellwithUs/RightmoveSection"
import Partner from "../components/SellwithUs/Partner"
import Trusted from "../components/SellwithUs/Trusted"
import MarketingSection from "../components/SellwithUs/MarketingSection"
import FeaturedProperties from "../Common/FeaturedProperties"
const SellwithUs = () => {
    return (
        <div>
          <HeroSection
            title="Sell with us"
            bgImage="/sellwithuse.webp"
          />
          
          {/* Injecting data using id */}
          <AboutSection id="SellwithUs" />

          <RightmoveSection />

          <Partner />
           <Trusted />

           <MarketingSection />
           <FeaturedProperties id="SellwithUs"/>
          
       
        </div>
    )
}

export default SellwithUs;