
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const TeamPhoto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Echipa Interact Galați
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Întreaga noastră familie de voluntari dedicați schimbării pozitive în comunitate
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-96 md:h-[600px] bg-gray-200"></div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Această fotografie surprinde spiritul de echipă și dedicarea care ne unește 
                  ca membri ai Interact Galați. Fiecare față din această imagine reprezintă o 
                  poveste de voluntariat, o pasiune pentru schimbarea pozitivă și un angajament 
                  față de dezvoltarea comunității noastre.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">50+</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Membri Activi</h3>
                    <p className="text-gray-600">Tineri implicați în activitățile clubului</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">3+</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ani de Activitate</h3>
                    <p className="text-gray-600">Experiență în serviciul comunității</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">100%</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dedicare</h3>
                    <p className="text-gray-600">Angajament total pentru misiunea noastră</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ne mândrim cu diversitatea echipei noastre, care include studenți din diferite 
                  domenii de studiu, cu vârste cuprinse între 14 și 30 de ani. Împreună, 
                  combinăm energia tinerilor cu experiența și înțelepciunea, creând un mediu 
                  perfect pentru dezvoltarea proiectelor de impact social.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex space-x-4">
                  <Link
                    to="/board"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Cunoaște conducerea
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Alătură-te echipei
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

export default TeamPhoto;
