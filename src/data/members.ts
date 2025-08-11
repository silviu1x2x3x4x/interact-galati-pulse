
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
    description: "Bianca este o lideră naturală cu o pasiune pentru dezvoltarea comunității. Cu experiență în managementul proiectelor și o viziune clară pentru viitorul clubului, ea coordonează toate activitățile majore și reprezintă Interact Galați în relațiile cu partenerii și organizațiile locale. Bianca studiază la Facultatea de Drept și își dorește să contribuie la dezvoltarea unei societăți mai juste.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "2",
    name: "Frosă Eduard",
    position: "Vicepreședinte",
    description: "Eduard este forța motrice din spatele multor inițiative inovatoare ale clubului. Cu un background în tehnologie și o gândire strategică, el sprijină președintele în toate deciziile importante și supervizează implementarea proiectelor tehnologice. Pasionat de educație și dezvoltare durabilă, Eduard contribuie cu idei creative pentru viitorul organizației și coordonează echipele de lucru în mod eficient.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "5",
    name: "Boghean Angel",
    position: "Vicepreședinte",
    description: "Angel este un lider dedicat cu o viziune clară pentru dezvoltarea comunității și consolidarea echipei. Cu abilități remarcabile în coordonarea proiectelor și o experiență vastă în managementul de echipe, el sprijină președintele în toate deciziile strategice importante. Angel facilitează colaborările cu organizațiile partenere și monitorizează progresul tuturor inițiativelor majore ale clubului.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    background: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "4",
    name: "Nicora Robert Alexandru",
    position: "Trezorier",
    description: "Robert Alexandru gestionează cu responsabilitate toate aspectele financiare ale clubului, de la bugetarea proiectelor la raportarea transparentă a cheltuielilor. Cu o formare în economie și o pasiune pentru antreprenoriat social, el se asigură că fiecare ban este folosit eficient pentru maximizarea impactului în comunitate. Robert Alexandru dezvoltă strategii de fundraising pentru susținerea proiectelor pe termen lung.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
  },
  {
    id: "3",
    name: "Ducă Jasmine",
    position: "Secretar",
    description: "Hey! Numele meu este Jasmine, și sunt secretară pe mandatul 2025-2026 a clubului Interact Galați. Consider ca sunt o persoană deschisă la inițiative, cu o dorință de a aduce acest club la un nivel mai înalt. :)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  }
];

export const directors: Member[] = [
  {
    id: "10",
    name: "David Murărașu",
    position: "Director Logistică",
    description: "David se asigură că toate evenimentele și proiectele clubului se desfășoară fără probleme din punct de vedere logistic. De la organizarea spațiilor și a echipamentelor până la coordonarea transportului și a meselor, el gestionează toate detaliile practice care fac posibile activitățile noastre. Student la management, David aplică principiile organizaționale în toate aspectele operaționale ale clubului.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: "6",
    name: "Severin Andra-Maria",
    position: "Director PR & Marketing",
    description: "Mă numesc Severin Andra-Maria și ocup funcţia de Director PR al clubului Interact Galați. Încă de la început, am descoperit cât de importantă este munca în echipă și comunicarea. Interact mi-a oferit ocazia să cresc, să învăț și să contribui real la schimbările din comunitate.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80"
  },
  {
    id: "7",
    name: "Cimpoaie Ana Maria",
    position: "Director Resurse Umane",
    description: "Hey! Eu sunt Ioana, am 16 ani, și pe parcursul acestui mandat am bucuria de a fi directorul de HR al clubului Interact Galați. Mereu mi-a plăcut să lucrez cu și pentru oameni, iar, prin Interact, mi-am găsit locul potrivit, un loc în care să cresc, să învăț și să mă dezvolt. Mereu caut să ajut, să mă implic și să ofer cât pot de mult înapoi comunității care m-a crescut.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    background: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "9",
    name: "Diana Lepădatu Corina",
    position: "Director Fundraising",
    description: "Sunt Diana, am 18 ani și sunt directorul fundraising al clubului Interact Galați pe mandatul 2025-2026. Empatia este superputerea mea, cred în oameni, în potențialul lor și în ideea că orice gest, oricât de mic, poate face o diferență reală și de aceea mă implic activ în acțiuni caritabile, mereu cu gândul la ce impact avem asupra comunității, împreună.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "8",
    name: "Balteanu Silviu-Petrica",
    position: "Ofițer IT",
    description: "Silviu-Petrica este expertul tehnic al clubului, responsabil cu toate aspectele digitale ale organizației. De la gestionarea site-ului și a platformelor online până la implementarea soluțiilor tehnologice pentru proiecte, el asigură că Interact Galați rămâne la pas cu inovațiile digitale. Student la informatică, Silviu-Petrica dezvoltă aplicații și sisteme care optimizează procesele interne ale clubului.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80"
  }
];
