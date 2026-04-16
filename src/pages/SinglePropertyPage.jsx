import React from "react";
import SinglePropertyHeroSection from "../components/SinglePropertyPage/SinglePropertyHeroSection";
import PropertyDescription from "../components/SinglePropertyPage/PropertyDescriptionSection";
import PropertyGallery from "../components/SinglePropertyPage/PropertyGallery";
import PropertyCTA from "../components/SinglePropertyPage/PropertyCTA";

const SinglePropertyPage = () => {
    return (
        <div>
            <SinglePropertyHeroSection />
            <PropertyDescription />
            <PropertyGallery />
            <PropertyCTA />
        </div>
    )
}

export default SinglePropertyPage;