
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { directors } from "../data/members";
import { ArrowLeft } from "lucide-react";

const Director = () => {
  const { id } = useParams();
  const director = directors.find(d => d.id === id);

  if (!director) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Director nu a fost găsit</h1>
            <Link to="/directors" className="text-green-600 hover:text-green-800">
              Înapoi la Directori
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/directors"
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi la Directori
          </Link>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-200 rounded-full shadow-lg"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {director.name}
                </h1>
                <p className="text-2xl text-green-600 font-semibold mb-6">
                  {director.position}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {director.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
