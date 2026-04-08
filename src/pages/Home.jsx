import React from 'react'
import AboutSection from '../components/Home/About'
import HeroSection from '../components/Home/Hero'
import ContactSection from '../components/Home/Contact'
import GallerySection from '../components/Home/Gallery'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ContactSection />
            <GallerySection />
        </div>
    )
}

export default Home
