
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  background: string;
  category: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "1st of June",
    description: "Sărbătorirea copilăriei prin proiecte speciale în Grădina Publică",
    fullDescription: "De 1 iunie, Interact Galați a sărbătorit copilăria prin două proiecte speciale în Grădina Publică: \"Joy in a Balloon\", alături de Asociația Fantasticii Down, și \"Plastic pentru Cărți\", inițiat de Rotary Galați Donaris. La Joy in a Balloon, copiii s-au bucurat de picturi pe față, baloane modelate, desen cu cretă, cozi împletite și produse handmade, toate în schimbul unei donații pentru Fantasticii Down, APCA Galați și Help Lăbuș. În paralel, Plastic pentru Cărți a încurajat reciclarea – vizitatorii au adus plastic și au plecat cu cărți potrivite pentru toate vârstele. Atmosfera a fost completată de un spectacol cu animăluțe, jocuri și o tombolă cu premii garantate, alături de sprijinul Farmaciilor Myosotis. Mulțumim tuturor celor care au fost alături de noi și au transformat această zi într-o celebrare a copilăriei, educației și implicării!",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
    background: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Social",
    impact: "5000 de lei strânși pentru Fantasticii Down"
  },
  {
    id: "2",
    title: "Verde în Comunitate",
    description: "Inițiative de protecție a mediului și dezvoltare durabilă",
    fullDescription: "Proiectul 'Verde în Comunitate' reprezintă angajamentul nostru față de protejarea mediului înconjurător și promovarea unui stil de viață durabil. Organizăm campanii de curățenie în parcuri și pe malul Dunării, plantem copaci în zonele verzi ale orașului și promovăm reciclarea în școli și cartiere. De asemenea, derulăm workshop-uri de educație ecologică pentru sensibilizarea comunității privind schimbările climatice. Până acum am plantat peste 200 de copaci, am colectat 5 tone de deșeuri reciclabile și am educat peste 1000 de persoane despre importanța protecției mediului.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80",
    background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Mediu",
    impact: "200+ copaci plantați, 5 tone deșeuri reciclate, 1000+ persoane educate"
  },
  {
    id: "3",
    title: "Mâini Ajutătoare",
    description: "Sprijin pentru persoanele în vârstă din comunitate",
    fullDescription: "Programul 'Mâini Ajutătoare' se concentrează pe îmbunătățirea calității vieții persoanelor în vârstă din Galați. Membrii noștri vizitează săptămânal cămine de bătrâni și oferă companie, asistență în activități zilnice și organizează evenimente recreative. De asemenea, dezvoltăm un serviciu de livrare la domiciliu pentru medicamentele și alimentele de bază pentru vârstnicii care nu se pot deplasa. Proiectul include și sesiuni de alfabetizare digitală pentru a-i ajuta pe seniorii să rămână conectați cu familiile lor. Impactul nostru se extinde la 80 de beneficiari direcți și a redus cu 30% sentimentul de izolare în rândul participanților.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Social",
    impact: "80 beneficiari direcți, 30% reducere sentiment izolare"
  },
  {
    id: "4",
    title: "Tech pentru Schimbare",
    description: "Programe de alfabetizare digitală și inovație tehnologică",
    fullDescription: "Inițiativa 'Tech pentru Schimbare' aduce tehnologia în serviciul comunității, oferind cursuri gratuite de informatică pentru toate vârstele. Organizăm workshop-uri de programare pentru copii, sesiuni de utilizare a internetului pentru adulți și dezvoltăm aplicații mobile care rezolvă probleme locale. Recent am lansat o aplicație care conectează voluntarii cu persoanele în nevoie din oraș. Programele noastre au format peste 300 de persoane în competențe digitale și au facilitat dezvoltarea a 5 soluții tehnologice inovatoare pentru problemele comunității locale.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80",
    category: "Tehnologie",
    impact: "300+ persoane formate, 5 soluții tehnologice dezvoltate"
  },
  {
    id: "5",
    title: "Artă în Cartier",
    description: "Promovarea culturii și artei în comunitatea locală",
    fullDescription: "Proiectul 'Artă în Cartier' transformă spațiile publice în galerii de artă la îndemâna tuturor și promovează talentele artistice locale. Organizăm expoziții de stradă, ateliere de pictură pentru copii și spectacole de muzică în parcuri. Colaborăm cu artiști locali pentru realizarea unor murale care înfrumusețează clădirile din cartierele rezidențiale. De asemenea, susținem tinerii artiști prin organizarea de evenimente unde își pot prezenta creațiile. Proiectul a găzduit 12 evenimente culturale, a sprijinit 40 de artiști locali și a adus arta mai aproape de peste 2000 de locuitori.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Cultură",
    impact: "12 evenimente culturale, 40 artiști sprijiniți, 2000+ participanți"
  },
  {
    id: "6",
    title: "Săptămâna Sănătății",
    description: "Campanii de promovare a unui stil de viață sănătos",
    fullDescription: "Inițiativa 'Săptămâna Sănătății' promovează adoptarea unui stil de viață sănătos prin evenimente educative și screeninguri medicale gratuite. Organizăm sesiuni de sport în aer liber, workshop-uri de nutriție și conferințe cu medici specialiști. În parteneriat cu clinici locale, oferim consultații gratuite și teste de sănătate de bază pentru persoanele care nu își permit servicii medicale private. De asemenea, derulăm campanii de donare de sânge și de conștientizare privind prevenția bolilor. Programul nostru a facilitat 500 de consultații gratuite, a organizat 8 campanii de donare de sânge și a educat peste 1500 de persoane despre sănătatea preventivă.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "Sănătate",
    impact: "500 consultații gratuite, 8 campanii donare sânge, 1500+ persoane educate"
  }
];
