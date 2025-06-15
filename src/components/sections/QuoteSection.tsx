
const QuoteSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-scroll">
          <div className="mb-8">
            <svg className="w-16 h-16 text-white/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Service above self – Serviciu mai presus de sine."
          </blockquote>
          <cite className="text-xl text-purple-200 font-medium">
            - Interact Galați
          </cite>
        </div>
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce"></div>
    </section>
  );
};

export default QuoteSection;
