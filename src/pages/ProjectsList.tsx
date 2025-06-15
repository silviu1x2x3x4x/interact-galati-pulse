
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectsList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi la Proiecte
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Toate Proiectele Noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă inițiativele care fac diferența în comunitatea gălățeană
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                {/* Special balloon for first project */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-bounce">
                      1st of June
                    </div>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <p className="text-sm text-purple-600 font-medium mb-4">
                    Impact: {project.impact}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
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

export default ProjectsList;
