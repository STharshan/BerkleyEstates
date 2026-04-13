import React from 'react'
import AboutSection from '../components/Home/About'
import HeroSection from '../components/Home/Hero'
import ContactSection from '../components/Home/Contact'
import GallerySection from '../components/Home/Gallery'
import ServiceSection from '../components/Home/Service'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ContactSection />
            <ServiceSection />
            <GallerySection />
        </div>
    )
}

export default Home;
