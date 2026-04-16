import React from 'react';
import { Bed, Bath, MapPin, FileText, Share2, ArrowLeft, Send } from 'lucide-react';

const SinglePropertyHeroSection = () => {
    return (
        <div className="min-h-screen bg-white p-4 md:p-8 lg:p-16 font-sans text-slate-900">
            {/* Back Button */}
            <button className="flex items-center gap-2 pt-20 text-sm text-slate-600 hover:text-black transition-colors mb-12">
                <ArrowLeft size={16} />
                Back to Home Page
            </button>

            {/* Changed grid layout: Text gets 7 columns, Image gets 5 columns */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                {/* Left Column: Details (Now spans 7) */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                    <div className="space-y-8">
                        <h2 className="text-xl text-slate-600 font-light tracking-wide">Swannington Road</h2>

                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-5xl font-bold flex flex-wrap items-baseline gap-x-4">
                                £500,000 
                                <span className="text-xl md:text-3xl font-semibold text-slate-800">Offers In Excess Of</span>
                            </h1>
                        </div>

                        {/* Property Specs */}
                        <div className="space-y-5 pt-4">
                            <div className="flex items-center gap-4 text-xl">
                                <Bed className="text-slate-900" size={28} strokeWidth={1.5} />
                                <span className="font-medium">4 Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-4 text-xl">
                                <Bath className="text-slate-900" size={28} strokeWidth={1.5} />
                                <span className="font-medium">3 Bathrooms</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-4 pt-4">
                            <button className="flex items-center gap-3 text-lg text-slate-700 hover:text-blue-900 transition-colors border-b border-transparent hover:border-blue-900 w-fit">
                                <FileText size={22} />
                                Floor Plan
                            </button>
                            <button className="flex items-center gap-3 text-lg text-slate-700 hover:text-blue-900 transition-colors border-b border-transparent hover:border-blue-900 w-fit">
                                <MapPin size={22} />
                                View Map
                            </button>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-10 space-y-8">
                            <h3 className="text-3xl font-bold tracking-tight">Like what you see?</h3>
                            <div className="flex flex-wrap gap-5">
                                <button className="bg-[#001f54] text-white px-10 py-4 rounded-sm font-bold hover:bg-blue-900 transition-all shadow-lg active:scale-95">
                                    Arrange a viewing
                                </button>
                                <button className="flex items-center gap-3 border border-slate-400 px-10 py-4 rounded-sm font-bold hover:bg-slate-50 transition-all active:scale-95">
                                    Share
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image Gallery (Now spans 5) */}
                <div className="lg:col-span-5 order-1 lg:order-2 self-start">
                    <div className="relative group overflow-hidden shadow-2xl">
                        {/* "For Sale" Badge */}
                        <div className="absolute top-0 left-0 bg-[#001f54] text-white px-8 py-2.5 z-10 text-xs font-black uppercase tracking-[0.2em]">
                            For Sale
                        </div>

                        {/* Main Property Image */}
                        <img
                            src="/path-to-your-house-image.jpg"
                            alt="Property exterior"
                            className="w-full h-full object-cover aspect-[4/5] lg:aspect-[4/5]"
                        />
                        
                        {/* Subtle interactive overlay */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SinglePropertyHeroSection;