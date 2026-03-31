import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <Compass className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold tracking-tight text-blue-900">Wanderlust</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Home</Link>
              <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>About</Link>
              <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-xl">
            <Link to="/" className="block text-lg font-medium text-gray-700 hover:text-blue-600 px-4" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-lg font-medium text-gray-700 hover:text-blue-600 px-4" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-lg font-medium text-gray-700 hover:text-blue-600 px-4" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="px-4 pt-4">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-md">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      <main className="w-full flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
