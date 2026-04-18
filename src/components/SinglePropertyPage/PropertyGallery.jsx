import { propertyGalleryCopy } from "../../Data/propertyDetails";

const PropertyGallery = ({ property, onOpenGallery }) => {
  const previewImages = property.gallery.slice(0, 6);

  return (
    <section className="bg-white px-6 py-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl font-primary">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-3">
          {previewImages.map((image, index) => {
            const showDesktopOverlay = index === 5 && property.gallery.length > 6;
            const showMobileOverlay = index === 1 && property.gallery.length > 2;

            return (
              <button
                key={image}
                type="button"
                onClick={() => onOpenGallery(index)}
                className={`group relative aspect-4/3 overflow-hidden bg-[#dce2ea] text-left ${
                  index > 1 ? "hidden md:block" : ""
                }`}
              >
                <img
                  src={image}
                  loading="lazy"
                  alt={`${property.fullTitle} gallery ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {showMobileOverlay ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-white md:hidden">
                    <span className="border-b border-white/60 pb-1 text-[15px]">
                      See all {property.gallery.length} images
                    </span>
                  </div>
                ) : null}

                {showDesktopOverlay ? (
                  <div className="absolute inset-0 hidden items-center justify-center bg-black/45 text-white md:flex">
                    <span className="border-b border-white/60 pb-1 text-[17px]">
                      See all {property.gallery.length} images
                    </span>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-10 max-w-6xl space-y-2 text-[15px] leading-8 text-black md:text-[16px]">
          <p>{propertyGalleryCopy[0]}</p>
          <p>
            Follow us{" "}
            <a
              href="https://www.instagram.com/berkleyestates/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#001C56] underline-offset-4 hover:underline"
            >
              @berkleyestates
            </a>
          </p>
          <p>{propertyGalleryCopy[2]}</p>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
