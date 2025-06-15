
import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

interface ContactSectionProps {
  scrollToTop: () => void;
}

const ContactSection = ({ scrollToTop }: ContactSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Contactează-ne
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Suntem aici pentru tine! Hai să facem împreună diferența în comunitate.
          </p>
          
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in-scroll bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a 
                href="mailto:contact@interactgalati.ro" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                contact@interactgalati.ro
              </a>
            </div>
            
            <div className="animate-fade-in-scroll bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <Instagram className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/interactgalati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                @interactgalati
              </a>
            </div>
            
            <div className="animate-fade-in-scroll bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">T</span>
              </div>
              <h3 className="font-semibold text-white mb-2">TikTok</h3>
              <a 
                href="https://www.tiktok.com/@interact.galati?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                @interact.galati
              </a>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">De ce să te alături nouă?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-blue-100">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Dezvoltă-ți abilitățile de leadership
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Fă conexiuni valoroase
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Contribuie la schimbarea pozitivă
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Câștigă experiență practică
              </div>
            </div>
          </div>
          
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Trimite-ne un mesaj
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-5 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
    </section>
  );
};

export default ContactSection;
