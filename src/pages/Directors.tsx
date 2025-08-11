
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { directors } from "../data/members";

const Directors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Directorii Noștri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experții specializați care conduc departamentele cheie ale organizației
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div
                key={director.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200" style={
                  director.id === "10"
                    ? { backgroundImage: `url(${director.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : director.id === "6" || director.id === "8"
                    ? { backgroundImage: `url(${director.image})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }
                    : director.id === "7" || director.id === "9"
                    ? { backgroundImage: `url(${director.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : undefined
                }>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{director.name}</h3>
                    <p className="text-green-200">{director.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {director.description.substring(0, 120)}...
                  </p>
                  <Link
                    to={`/directors/${director.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors"
                  >
                    Află mai multe
                    <svg
                      className="ml-1 w-4 h-4"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
