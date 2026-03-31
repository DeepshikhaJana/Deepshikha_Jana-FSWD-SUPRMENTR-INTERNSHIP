import React from "react";
import { Compass, Shield, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
            About Wanderlust
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate travelers dedicated to helping you
            discover the world's most beautiful destinations through curated
            experiences and seamless planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
            <p className="text-gray-600">
              Your safety is our priority. We partner only with verified and
              trusted local guides and accommodations.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
            <p className="text-gray-600">
              With connections in over 50 countries, we provide authentic
              experiences that go beyond the typical tourist paths.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Expert Guides</h3>
            <p className="text-gray-600">
              Our local experts share their deep knowledge and passion to ensure
              your journey is truly unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
