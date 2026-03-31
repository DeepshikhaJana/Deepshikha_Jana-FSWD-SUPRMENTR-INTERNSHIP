import React from "react";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    description: "Breathtaking mountain views and pristine lakes.",
  },
  {
    id: 2,
    title: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    description: "A paradise of tropical beaches and vibrant culture.",
  },
  {
    id: 3,
    title: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    description: "Iconic white-washed buildings and blue domes.",
  },
  {
    id: 4,
    title: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    description: "Ancient temples and stunning cherry blossoms.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Featured Destinations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of the world's most breathtaking
            locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                    {dest.location}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {dest.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>
                <button className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors flex items-center gap-2 group/btn">
                  Explore More
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
