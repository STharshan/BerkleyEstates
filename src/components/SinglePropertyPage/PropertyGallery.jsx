import React from 'react';

const PropertyGallery = () => {
  // Mock array for the 6 visible images
  const images = [
    { id: 1, src: "/api/placeholder/600/400", alt: "Aerial view of fields" },
    { id: 2, src: "/api/placeholder/600/400", alt: "Rear view of barn conversion" },
    { id: 3, src: "/api/placeholder/600/400", alt: "Living room with log burner" },
    { id: 4, src: "/api/placeholder/600/400", alt: "Modern kitchen island" },
    { id: 5, src: "/api/placeholder/600/400", alt: "Aerial side view" },
    { id: 6, src: "/api/placeholder/600/400", alt: "Kitchen secondary view" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-12">
          {images.map((img, index) => (
            <div key={img.id} className="relative group overflow-hidden aspect-[3/2]">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay on the last image (index 5) */}
              {index === 5 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
                  <span className="text-white text-lg font-medium border-b border-white/60 pb-1">
                    See all 28 images
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="max-w-4xl space-y-6 text-slate-800 text-[15px] sm:text-[16px] leading-relaxed">
          <p>
            At Berkley Estates, we invest time heavily in the visual and digital representation of our 
            client's properties with the in-house marketing department we have.
          </p>
          
          <p className="font-medium">
            Follow us <span className="text-blue-900 cursor-pointer hover:underline">@berkleyestates</span>
          </p>
          
          <p>
            Our property descriptions are short because we would rather talk with you about the 
            properties we sell and let and of course meet with you and show you around.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PropertyGallery;