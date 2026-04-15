const properties = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        title: "Gladstone Street",
        price: "£289,950",
        bedrooms: "2 Bedrooms",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        title: "Moira Road",
        price: "£215,000",
        bedrooms: "3 Bedrooms",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Iris Close",
        price: "£895,000",
        bedrooms: "4 Bedrooms",
    },
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        title: "Gladstone Street",
        price: "£289,950",
        bedrooms: "2 Bedrooms",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        title: "Moira Road",
        price: "£215,000",
        bedrooms: "3 Bedrooms",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Iris Close",
        price: "£895,000",
        bedrooms: "4 Bedrooms",
    },
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        title: "Gladstone Street",
        price: "£289,950",
        bedrooms: "2 Bedrooms",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        title: "Moira Road",
        price: "£215,000",
        bedrooms: "3 Bedrooms",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Iris Close",
        price: "£895,000",
        bedrooms: "4 Bedrooms",
    },
];

export default function ServiceSection() {
    return (
        <div className="bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white overflow-hidden shadow-sm"
                        >
                            {/* IMAGE */}
                            <div className="w-full h-55 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* FOR SALE BAR */}
                            <div className="bg-[#0c2d5c] text-white text-center py-1 text-sm font-medium">
                                For Sale
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 text-sm">
                                {/* Title + Price */}
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium">{item.title}</h3>
                                    <span>{item.price}</span>
                                </div>

                                {/* Bedrooms */}
                                <div className="flex justify-end text-gray-600">
                                    {item.bedrooms}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}