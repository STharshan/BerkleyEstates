import { Link } from "react-router-dom";
import { propertyStore } from "../../Data/sectionData";

const properties = propertyStore.Home?.items || [];

export default function ServiceSection() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((item) => (
            <Link
              to={`/property/${item.slug}`}
              key={item.slug}
              className="bg-white overflow-hidden shadow-sm"
            >
              <div className="w-full h-75 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="bg-[#0c2d5c] text-white text-center py-1 text-sm font-medium">
                For Sale
              </div>

              <div className="p-4 text-sm">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <span>{item.price}</span>
                </div>

                <div className="flex justify-end text-gray-600">
                  {item.beds}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
