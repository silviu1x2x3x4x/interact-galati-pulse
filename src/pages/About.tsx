
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi la Acasă
          </Link>
          
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Despre Interact Galați
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Ce este Interact?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Interact Galați este o organizație de tineri dinamici și implicați, 
                  dedicată dezvoltării comunității locale prin proiecte de voluntariat 
                  și activități de impact social. Suntem membri ai unei rețele 
                  internaționale de cluburi Interact, susținute de Rotary International.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Misiunea Noastră</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dezvoltăm lideri de mâine prin implicarea activă în proiecte 
                  comunitare, educație civică și voluntariat. Credem că tinerii 
                  au puterea de a schimba lumea, iar noi oferim platforma potrivită 
                  pentru această transformare.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Valorile Noastre</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Integritate</h3>
                    <p className="text-gray-700">Acționăm cu onestitate și transparență în toate proiectele noastre.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Serviciu</h3>
                    <p className="text-gray-700">Ne dedicăm serviciului comunității și ajutorului celor în nevoie.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Leadership</h3>
                    <p className="text-gray-700">Dezvoltăm abilități de leadership prin experiență practică.</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Diversitate</h3>
                    <p className="text-gray-700">Celebrăm diversitatea și promovăm înțelegerea interculturală.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex space-x-4">
                  <Link
                    to="/board"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Cunoaște echipa
                  </Link>
                  <Link
                    to="/projects"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Vezi proiectele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
