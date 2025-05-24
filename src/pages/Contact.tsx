
import Navigation from "../components/Navigation";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactează-ne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem aici pentru tine! Hai să facem împreună diferența în comunitate.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-8">Să vorbim!</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:contact@interactgalati.ro" 
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        contact@interactgalati.ro
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <a 
                        href="tel:+40740123456" 
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        +40 740 123 456
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Instagram className="w-6 h-6 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a 
                        href="https://instagram.com/interactgalati" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        @interactgalati
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-4 flex-shrink-0 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">T</span>
                    </div>
                    <div>
                      <p className="font-semibold">TikTok</p>
                      <a 
                        href="https://tiktok.com/@interactgalati" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        @interactgalati
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">De ce să te alături nouă?</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Dezvoltă-ți abilitățile de leadership</li>
                    <li>• Fă conexiuni valoroase</li>
                    <li>• Contribuie la schimbarea pozitivă</li>
                    <li>• Câștigă experiență practică</li>
                    <li>• Fii parte dintr-o comunitate activă</li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Trimite-ne un mesaj
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Introdu numele tău"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="exemplu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subiect
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează subiectul</option>
                      <option value="membership">Vreau să devin membru</option>
                      <option value="volunteer">Vreau să volunteer</option>
                      <option value="partnership">Propunere de parteneriat</option>
                      <option value="project">Idee de proiect</option>
                      <option value="other">Altceva</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Spune-ne cum putem să te ajutăm..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
                  >
                    Trimite mesajul
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
