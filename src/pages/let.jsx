import React from 'react'
import LetHero from '../components/Let/Hero'
import RelationshipSection from '../components/Let/RelationshipSection'
import LandlordServices from '../components/Let/LandlordServices'
import TenantSection from '../components/Let/TenantSection'
import PropertyLandingSection from '../components/Let/PropertyLanding'
import PropertySection from '../components/Let/PropertySection'
import TestimonialSlider from '../components/Let/Testimonial'
import FeaturedProperties from '../components/Let/FeaturedProperties'

const Let = () => {
  return (
    <div>
      <LetHero />
      <RelationshipSection />
      <LandlordServices />
      <TenantSection />
      <PropertyLandingSection />
      <PropertySection />
      <TestimonialSlider />
      <FeaturedProperties />
    </div>
  )
}

export default Let  
