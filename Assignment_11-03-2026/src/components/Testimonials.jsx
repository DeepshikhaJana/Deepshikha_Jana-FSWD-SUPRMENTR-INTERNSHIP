import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    comment: "The trip was perfectly organized and exceeded my expectations. Wanderlust made everything so easy!",
  },
  {
    id: 2,
    name: "David Lee",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    comment: "I had the most amazing experience in Japan. Everything was so well planned and I felt supported throughout.",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    comment: "The island escape was exactly what I needed. Wanderlust really knows how to curate the best trips!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Read about the unforgettable experiences shared by our global
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100"
            >
              <div className="absolute top-6 right-8 text-blue-50 group-hover:text-blue-100 transition-colors duration-300">
                <Quote size={80} strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-yellow-500 fill-yellow-500">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <p className="text-lg italic text-gray-700 mb-10 leading-relaxed relative">
                  "{test.comment}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {test.name}
                    </h4>
                    <p className="text-sm font-medium text-blue-600">
                      {test.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
