
import { Link } from "react-router-dom";
import { boardMembers } from "../../data/members";

interface BoardSectionProps {
  scrollToTop: () => void;
}

const BoardSection = ({ scrollToTop }: BoardSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Board-ul Nostru
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Echipa de conducere care ghidează viziunea și strategia Interact Galați
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {boardMembers.map((member, index) => (
              <div key={member.id} className="animate-fade-in-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={member.image}
                  alt={`Fotografie ${member.name}`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <p className="text-sm md:text-base font-semibold text-gray-800">{member.name}</p>
                <p className="text-xs md:text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
          <Link
            to="/board"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Cunoaște Echipa
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
