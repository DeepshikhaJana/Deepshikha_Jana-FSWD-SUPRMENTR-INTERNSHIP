import React from "react";
import { Star, Clock } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "European Explorer",
    price: "$1,999",
    duration: "12 Days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    description: "Experience the history and charm of multiple European cities.",
  },
  {
    id: 2,
    title: "Safari Adventure",
    price: "$2,499",
    duration: "8 Days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop",
    description: "An unforgettable wildlife experience in the heart of Africa.",
  },
  {
    id: 3,
    title: "Island Escape",
    price: "$1,599",
    duration: "10 Days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    description: "Relax and unwind on the beautiful beaches of a tropical island.",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Travel Packages
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully planned trips to provide you with the best experience and
            value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow-lg z-10">
                  {pkg.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-800">
                    {pkg.rating} Rating
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {pkg.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2 text-gray-500 font-medium">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all text-sm shadow-md hover:shadow-lg active:scale-95">
                    Book Trip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
