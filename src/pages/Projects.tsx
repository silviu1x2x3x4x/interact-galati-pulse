
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Proiectele Noastre
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Inițiative care schimbă comunitatea și creează impact real în societate
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">6</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proiecte Realizate</h3>
                <p className="text-gray-600">Inițiative finalizate cu succes</p>
              </div>
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-green-600">200+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beneficiari</h3>
                <p className="text-gray-600">Persoane ajutate</p>
              </div>
              <div className="animate-fade-in-scroll bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">100+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Voluntari</h3>
                <p className="text-gray-600">Membri activi</p>
              </div>
            </div>
            
            <Link
              to="/projects-list"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Descoperă Proiectele
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
