import React from 'react';

const PropertyDescription = () => {
    return (
        <div className="bg-white min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-24">
            {/* Max-width container to prevent lines from being too long on Ultra-wide screens */}
            <div className="max-w-6xl mx-auto text-slate-900 font-sans">

                {/* Intro Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed mb-10">
                    <p>
                        Rosemary House is an exceptional countryside barn conversion offering over 3,600 sq ft
                        of beautifully designed living space, extensive parking and outstanding entertaining
                        spaces including a home office, workshop and unique converted barn bar.
                    </p>
                    <p>
                        Exposed beams, oak flooring and brick detailing sit comfortably alongside bright open
                        spaces designed for everyday life.
                    </p>
                    <p>
                        Approached through electric gates onto a sweeping driveway with extensive parking,
                        the property immediately feels both impressive and welcoming.
                    </p>
                    <p>
                        For busy families, the natural flow of the property brings you straight into the heart
                        of the home – the kitchen. It’s the perfect place to arrive after school, drop the bags,
                        gather around the island and reconnect at the end of a busy day.
                    </p>
                    <p>
                        The property also benefits from excellent external amenities, including a purpose-built
                        home office, large workshop and a unique entertaining space known as ‘The Baa’,
                        making this a truly distinctive lifestyle home in a peaceful rural setting on the
                        edge of Hartshorne village.
                    </p>
                </div>

                {/* The Details Section */}
                <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed mb-12">
                    <h2 className="text-lg font-normal">The Details</h2>
                    <h3 className="text-lg font-normal">Ground Floor</h3>

                    <p>
                        The centrepiece of the home is the impressive open-plan kitchen designed for both
                        relaxed family living and entertaining.
                    </p>
                    <p>
                        The kitchen is beautifully appointed with contemporary cabinetry, quartz work surfaces
                        and a large central island with breakfast seating. Integrated appliances and generous
                        preparation space make this a practical yet sociable space where family life naturally revolves.
                    </p>
                    <p>
                        The dining area enjoys open views across the surrounding countryside, creating a
                        wonderful setting for both everyday meals and special occasions, while the adjoining
                        living area offers a relaxed space to unwind.
                    </p>
                    <p>
                        A separate utility and pantry room provides excellent additional storage and workspace,
                        helping keep the main kitchen area organised.
                    </p>
                    <p>
                        Double doors lead through to a characterful lounge featuring exposed beams, oak flooring
                        and a log-burning stove, creating a warm and inviting retreat with large windows
                        showcasing the views.
                    </p>
                </div>

                {/* Bulleted List Section */}
                <div className="pt-8">
                    <ul className="list-disc list-outside ml-6 space-y-2 text-[15px] sm:text-[16px] text-slate-800">
                        <li>Beautiful converted barn set in countryside surroundings</li>
                        <li>Approximately 3,600+ sq ft of versatile accommodation</li>
                        <li>Stunning open-plan kitchen, dining and living space</li>
                        <li>Character lounge with exposed beams and log burner</li>
                        <li>Four bedrooms arranged over three floors</li>
                        <li>Principal suite with dressing area and en-suite</li>
                        <li>Separate home office / potential annexe space</li>
                        <li>Workshop and unique bar/entertaining space (‘The Baa’)</li>
                        <li>Landscaped gardens with courtyard and hot tub area</li>
                        <li>Extensive driveway parking with countryside views</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default PropertyDescription;