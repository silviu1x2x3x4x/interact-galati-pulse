
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { boardMembers } from "../data/members";
import { ArrowLeft } from "lucide-react";

const BoardMember = () => {
  const { id } = useParams();
  const member = boardMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Membru nu a fost găsit</h1>
            <Link to="/board" className="text-blue-600 hover:text-blue-800">
              Înapoi la Board
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/board"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi la Board
          </Link>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={`Fotografie ${member.name}`}
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  {member.position}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
