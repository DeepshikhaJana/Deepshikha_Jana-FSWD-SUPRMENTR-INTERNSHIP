import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about a destination or need help planning your trip?
            We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-semibold text-gray-700 ml-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-semibold text-gray-700 ml-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-blue-100">support@wanderlust.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Office</h4>
                    <p className="text-blue-100">
                      123 Travel Lane, Adventure City, World
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-10 bg-gray-900 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Working Hours</h3>
              <p className="text-gray-400 mb-6">
                We're available to assist you around the clock.
              </p>
              <ul className="space-y-4 text-blue-100 font-medium">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
