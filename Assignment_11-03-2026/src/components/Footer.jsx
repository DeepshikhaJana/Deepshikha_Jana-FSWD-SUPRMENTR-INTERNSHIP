import React from "react";
import {
  Compass,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 border-t border-blue-900 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold tracking-tight">
                Wanderlust
              </span>
            </div>
            <p className="text-blue-200 text-lg leading-relaxed max-w-xs">
              Discover the beauty of the world with us. Your adventure starts
              here.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-400 hover:text-blue-950 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-400 hover:text-blue-950 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-400 hover:text-blue-950 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="sm:pl-8 lg:pl-0">
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-blue-400 transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-blue-200 hover:text-blue-400 transition-colors inline-block"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-blue-200 hover:text-blue-400 transition-colors inline-block"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-blue-200 hover:text-blue-400 transition-colors inline-block"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-blue-200">
                <Phone size={20} className="text-blue-400 shrink-0 mt-1" />
                <span className="leading-tight">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4 text-blue-200">
                <Mail size={20} className="text-blue-400 shrink-0 mt-1" />
                <span className="leading-tight break-all">
                  info@wanderlust.com
                </span>
              </li>
              <li className="flex items-start gap-4 text-blue-200">
                <MapPin size={20} className="text-blue-400 shrink-0 mt-1" />
                <span className="leading-tight">
                  123 Travel Lane, Adventure City, World
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Newsletter</h4>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Subscribe to get latest updates and exclusive travel offers.
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-blue-900/30 border border-blue-800 rounded-full px-6 py-3.5 text-white placeholder:text-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-blue-900/50 text-center text-blue-400 text-sm">
          <p>
            © 2026 Wanderlust Travel. All rights reserved. Designed with passion
            for explorers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
