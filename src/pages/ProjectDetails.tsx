
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Proiectul nu a fost găsit</h1>
            <Link to="/projects-list" className="text-purple-600 hover:text-purple-800">
              Înapoi la Proiecte
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/projects-list"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi la Proiecte
          </Link>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">
                  Impact: {project.impact}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <div className="w-full h-64 rounded-xl shadow-lg mb-8 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="text-lg text-gray-700 leading-relaxed">
                {project.fullDescription.split('. ').map((sentence, index) => (
                  <p key={index} className="mb-4">
                    {sentence}{sentence.endsWith('.') ? '' : '.'}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Implică-te în proiect
                <svg
                  className="ml-2 w-4 h-4"
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

export default ProjectDetails;
