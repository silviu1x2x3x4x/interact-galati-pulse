
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Proiectele Noastre
              </h1>
              
              <div className="mb-12">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                  alt="Proiectele Interact Galați"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Interact Galați desfășoară o varietate de proiecte care vizează îmbunătățirea 
                  vieții comunității și dezvoltarea personală a membrilor. Fiecare proiect este 
                  conceput pentru a avea un impact real și durabil, abordând problemele actuale 
                  ale societății cu soluții inovatoare și sustenabile.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">15</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proiecte Active</h3>
                    <p className="text-gray-600">Inițiative în desfășurare în diverse domenii</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">30+</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Beneficiari</h3>
                    <p className="text-gray-600">Persoane ajutate prin proiectele noastre</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">80+</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Voluntari</h3>
                    <p className="text-gray-600">Membri activi implicați în proiecte</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Proiectele noastre acoperă domenii diverse: educație, protecția mediului, 
                  asistență socială, tehnologie, cultură, sănătate și dezvoltare comunitară. 
                  Fiecare inițiativă este planificată cu atenție, implementată cu dedicare și 
                  evaluată pentru a măsura impactul real asupra beneficiarilor.
                </p>
              </div>
              
              <Link
                to="/projects-list"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Află mai multe
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
