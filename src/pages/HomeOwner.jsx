import React from 'react'
import HomeownersHero from '../components/HomeOwner/Hero'
import WhyBerkleyEstates from '../components/HomeOwner/WhyBerkleyEstates'
import TrustedGuidance from '../components/HomeOwner/TrustedGuidance'
import RentalPotential from '../components/HomeOwner/RentalPotential'
import SolutionsSection from '../components/HomeOwner/SolutionsSection'
import MakeMoveCTA from '../components/HomeOwner/MakeMoveCTA'

const HomeOwner = () => {
  return (
    <div>
      <HomeownersHero />
      <WhyBerkleyEstates />
      <TrustedGuidance />
      <RentalPotential />
      <SolutionsSection />
      <MakeMoveCTA />
    </div>
  )
}

export default HomeOwner;