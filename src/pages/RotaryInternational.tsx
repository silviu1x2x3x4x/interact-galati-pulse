
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Globe, Users, Heart, Award, ArrowRight } from "lucide-react";

const RotaryInternational = () => {
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/ee0c9ee3-a5e1-454b-b0a1-bc195031a9b9.png" 
                alt="Rotary Logo" 
                className="w-32 h-32 mx-auto animate-spin-slow"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Rotary International
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              O organizație globală de lideri care se dedică rezolvării problemelor mondiale
            </p>
            <div className="text-lg text-blue-200 max-w-2xl mx-auto">
              "Service Above Self" - misiunea care ne unește pe toți în slujirea comunităților noastre
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* What is Rotary Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-scroll text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce este Rotary?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rotary International este o organizație de serviciu internațională cu membri din întreaga lume care lucrează împreună pentru a aborda problemele cele mai urgente ale lumii.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Global</h3>
              <p className="text-gray-600 text-center">Peste 1.4 milioane de membri în 200+ țări și zone geografice</p>
            </div>
            
            <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Comunitate</h3>
              <p className="text-gray-600 text-center">Lideri din toate domeniile care se unesc pentru serviciu</p>
            </div>
            
            <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Serviciu</h3>
              <p className="text-gray-600 text-center">Devotament pentru îmbunătățirea vieților în comunități</p>
            </div>
            
            <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.3s' }}>
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Impact</h3>
              <p className="text-gray-600 text-center">Proiecte durabile care schimbă lumea pentru totdeauna</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Istoria Rotary
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Rotary a fost fondat în 1905 de Paul Harris în Chicago, SUA. Prima întâlnire a avut loc pe 23 februarie 1905, marcând începutul unei mișcări care avea să se extindă în întreaga lume.
                </p>
                <p>
                  Numele "Rotary" provine din practica timpurie de a rota întâlnirile între birourile membrilor. Aceasta a fost o idee revoluționară care a pus bazele unei comunități de afaceri bazate pe încredere și respect mutual.
                </p>
                <p>
                  Astăzi, Rotary este prezent în peste 200 de țări și zone geografice, cu peste 46.000 de cluburi și 1.4 milioane de membri activi.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Cronologie Importantă</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-blue-900">1905</div>
                      <div className="text-gray-700">Primul club Rotary fondat în Chicago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-blue-900">1922</div>
                      <div className="text-gray-700">Primul club Rotary din România</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-blue-900">1988</div>
                      <div className="text-gray-700">Lansarea campaniei de eradicare a poliomielitei</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-scroll text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zonele Noastre de Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rotary abordează cele mai urgente probleme ale lumii prin șapte zone de focus strategice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pace și Rezolvarea Conflictelor", desc: "Promovarea păcii și înțelegerii între popoare" },
              { title: "Prevenirea și Tratarea Bolilor", desc: "Îmbunătățirea sănătății și salvarea vieților" },
              { title: "Apa și Salubritatea", desc: "Asigurarea accesului la apă curată și facilități sanitare" },
              { title: "Sănătatea Mamei și Copilului", desc: "Reducerea mortalității materne și infantile" },
              { title: "Educația de Bază și Alfabetizarea", desc: "Susținerea educației pentru toți copiii" },
              { title: "Dezvoltarea Economică Comunitară", desc: "Crearea de oportunități economice durabile" },
              { title: "Mediul", desc: "Protejarea și restaurarea mediului natural" }
            ].map((area, index) => (
              <div key={index} className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alătură-te Mișcării Globale
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Interact Galați face parte din această familie globală. Descoperă cum poți contribui la schimbarea pozitivă în comunitatea ta și în lume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Vezi Proiectele Noastre
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contactează-ne
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RotaryInternational;
