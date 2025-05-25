
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/c8e273ce-b654-4b51-9bff-6849a959b116.png)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
        </div>
        
        <div className="text-center z-10 px-4">
          {/* Logo/Stema */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-blue-600">IG</span>
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
          <div className="animate-fade-in animate-bounce-down">
            <div className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
                 onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
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
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
      </div>

      {/* Board Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Board-ul Nostru
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Echipa de conducere care ghidează viziunea și strategia Interact Galați
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-fade-in-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
                  <p className="text-sm md:text-base font-semibold text-gray-800">Membru {i}</p>
                </div>
              ))}
            </div>
            <Link
              to="/board"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Cunoaște Echipa
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Directorii Noștri
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experții specializați care conduc departamentele cheie ale organizației
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-fade-in-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
                  <p className="text-sm md:text-base font-semibold text-gray-800">Director {i}</p>
                </div>
              ))}
            </div>
            <Link
              to="/directors"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Vezi Directorii
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-scroll">
            <div className="mb-8">
              <svg className="w-16 h-16 text-white/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              "Tineretul nu este doar viitorul, ci și prezentul care modelează lumea de mâine."
            </blockquote>
            <cite className="text-xl text-purple-200 font-medium">
              - Interact Galați
            </cite>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce"></div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Proiectele Noastre
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Inițiative care schimbă comunitatea și creează impact real în societate
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">15</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proiecte Active</h3>
                <p className="text-gray-600">Inițiative în desfășurare</p>
              </div>
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-green-600">2000+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beneficiari</h3>
                <p className="text-gray-600">Persoane ajutate</p>
              </div>
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">50+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Voluntari</h3>
                <p className="text-gray-600">Membri activi</p>
              </div>
            </div>
            <Link
              to="/projects"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Descoperă Proiectele
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Telefon</h3>
                <a 
                  href="tel:+40740123456" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  +40 740 123 456
                </a>
              </div>
              
              <div className="animate-fade-in-scroll bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
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
    </div>
  );
};

export default Index;
