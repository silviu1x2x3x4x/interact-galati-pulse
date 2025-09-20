
export interface Member {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  background: string;
}

export const boardMembers: Member[] = [
  {
    id: "1",
    name: "Lelițu Bianca",
    position: "Președinte",
    description: "Bună! Sunt Bianca Lelițu și pe acest mandat ocup funcția de Președinte al clubului Interact Galați. Iubesc să fac voluntariat, să aduc un zâmbet pe chipul oamenilor și să contribui la schimbări pozitive în comunitate. Cred cu tărie că Interact te ajută să te dezvolți atât ca voluntar, cât și ca persoană, în viața de zi cu zi, așa cum m-a ajutat și pe mine. Pentru mine, fiecare proiect este o oportunitate de a învăța, de a inspira și de a face lumea puțin mai bună.",
    image: "/lovable-uploads/b5401078-a694-4094-b39b-7d5c79c31536.png",
    background: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "2",
    name: "Frosă Eduard",
    position: "Vicepreședinte",
    description: "Sunt Edi, sau Frosă pentru prieteni. Am 18 ani și sunt vicepreședinte (2025-2026) și past HR al clubului Interact Galați. Pentru mine, Interact nu e doar voluntariat, ci locul unde am întâlnit oameni care contează enorm. Am învățat cât de frumos e să conduci o echipă fără a căuta aplauze și cât valorează munca împreună. Cred în puterea unei mâini de oameni de a crea proiecte mari, iar deviza mea pe acest mandat este: „Dacă vrei să mergi departe, mergem împreună.”",
    image: "/lovable-uploads/d841f15f-db70-428d-912b-2259c7daa8ca.png",
    background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "5",
    name: "Boghean Angel",
    position: "Vicepreședinte",
    description: "Angel este un lider dedicat cu o viziune clară pentru dezvoltarea comunității și consolidarea echipei. Cu abilități remarcabile în coordonarea proiectelor și o experiență vastă în managementul de echipe, el sprijină președintele în toate deciziile strategice importante. Angel facilitează colaborările cu organizațiile partenere și monitorizează progresul tuturor inițiativelor majore ale clubului.",
    image: "/lovable-uploads/vice-president-eduard.jpg",
    background: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "4",
    name: "Nicora Robert Alexandru",
    position: "Trezorier",
    description: "Hello, sunt Robert Alexandru Nicora, elev în clasa a XII-a și am onoarea de a fi trezorier pe acest mandat. Mă pot descrie ca un om calm și pozitiv. Sunt foarte recunoscător pentru tot ce mi-a oferit până acum Interact-ul și sper că pot ajuta cât de mult pot pe acest mandat.",
    image: "/lovable-uploads/f96bc3c9-f12a-4b68-9471-debd21dba245.png",
    background: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
  },
  {
    id: "3",
    name: "Ducă Jasmine",
    position: "Secretar",
    description: "Hey! Numele meu este Jasmine, și sunt secretară pe mandatul 2025-2026 a clubului Interact Galați. Consider ca sunt o persoană deschisă la inițiative, cu o dorință de a aduce acest club la un nivel mai înalt. :)",
    image: "/lovable-uploads/72a466c8-c94f-48ae-915c-ebb106614f87.png",
    background: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  }
];

export const directors: Member[] = [
  {
    id: "10",
    name: "David Murărașu",
    position: "Director Logistică",
    description: "Numele este David sau pe poreclă dvd și am funcția de director de logistică. De multe ori am fost întrebat de ce am ales să mă alătur bordului Interact și dacă sunt cu adevărat capabil. Eu sunt aici pentru a demonstra că sunt potrivit pentru această funcție, pentru a arăta că, da, chiar sunt capabil. Îmi doresc să contribui la dezvoltarea acestui club și, în același timp, să mă dezvolt și eu alături de el.",
    image: "/lovable-uploads/e924364a-781e-435c-891e-79cbfa0fb7d2.png",
    background: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "6",
    name: "Severin Andra-Maria",
    position: "Director PR & Marketing",
    description: "Mă numesc Severin Andra-Maria și ocup funcţia de Director PR al clubului Interact Galați. Încă de la început, am descoperit cât de importantă este munca în echipă și comunicarea. Interact mi-a oferit ocazia să cresc, să învăț și să contribui real la schimbările din comunitate.",
    image: "/lovable-uploads/652a0219-7822-436c-9135-8ec0f28c3870.png",
    background: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80"
  },
  {
    id: "7",
    name: "Cimpoaie Ioana Maria",
    position: "Director Resurse Umane",
    description: "Hey! Eu sunt Ioana, am 16 ani, și pe parcursul acestui mandat am bucuria de a fi directorul de HR al clubului Interact Galați. Mereu mi-a plăcut să lucrez cu și pentru oameni, iar, prin Interact, mi-am găsit locul potrivit, un loc în care să cresc, să învăț și să mă dezvolt. Mereu caut să ajut, să mă implic și să ofer cât pot de mult înapoi comunității care m-a crescut.",
    image: "/lovable-uploads/207b2710-2e4c-4bff-83a8-d36e2359b23e.png",
    background: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "9",
    name: "Diana Lepădatu Corina",
    position: "Director Fundraising",
    description: "Sunt Diana, am 18 ani și sunt directorul fundraising al clubului Interact Galați pe mandatul 2025-2026. Empatia este superputerea mea, cred în oameni, în potențialul lor și în ideea că orice gest, oricât de mic, poate face o diferență reală și de aceea mă implic activ în acțiuni caritabile, mereu cu gândul la ce impact avem asupra comunității, împreună.",
    image: "/lovable-uploads/8317ee97-aa6c-41b5-b0af-ee37a22b83cc.png",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  }
];
