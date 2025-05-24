
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll automat în jos la încărcarea paginii
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.3,
        behavior: 'smooth'
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
        </div>
        
        <div className="text-center z-10 px-4">
          {/* Logo/Stema */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">IG</span>
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            Interact Galați
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in">
            Tânăr. Implicat. Schimbă comunitatea.
          </p>
          
          {/* CTA Button cu animație descendentă */}
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fade-in animate-bounce-down"
          >
            Descoperă
            <svg
              className="ml-2 w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Index;
