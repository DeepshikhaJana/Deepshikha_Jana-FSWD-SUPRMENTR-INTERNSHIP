import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful Mountain View"
          className="w-full h-full object-cover scale-105 animate-zoom"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Explore the World's <br className="hidden sm:block" />
          <span className="text-blue-400">Hidden Gems</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
          Unforgettable journeys, curated just for you. Start your next
          adventure today with Wanderlust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl">
            Explore Destinations
          </button>
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
