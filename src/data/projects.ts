
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
    title: "Educație pentru Toți",
    description: "Program de sprijin educațional pentru copii defavorizați",
    fullDescription: "Programul 'Educație pentru Toți' este unul dintre proiectele flagship ale Interact Galați, dedicat sprijinirii copiilor din familii cu venituri reduse în parcursul lor educațional. Prin acest proiect, oferim meditații gratuite, materiale școlare și suport emoțional pentru peste 50 de copii din zona Galați. Colaborăm cu școli locale și cu alte organizații pentru a identifica cazurile care au cea mai mare nevoie de sprijin. Impactul programului se reflectă în îmbunătățirea notelor școlare cu 40% și creșterea ratei de promovabilitate la examenele naționale.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
    background: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Educație",
    impact: "50+ copii sprijiniți, 40% îmbunătățire rezultate școlare"
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
  },
  {
    id: "7",
    title: "Biblioteca Mobilă",
    description: "Acces la educație și lectură în zonele defavorizate",
    fullDescription: "Proiectul 'Biblioteca Mobilă' aduce cărțile și educația direct în comunitățile care nu au acces facil la biblioteci sau librării. Cu ajutorul unui vehicul special amenajat, vizităm săptămânal cartiere periferice și sate din jurul Galațiului, oferind servicii de împrumut de cărți, sesiuni de lectură pentru copii și activități educative interactive. Biblioteca noastră mobilă conține peste 2000 de cărți în română și engleză, materiale educative și jocuri didactice. Programul încurajează cititul în rândul copiilor și adulților, contribuind la reducerea analfabetismului funcțional. Am deservit 15 locații, am înregistrat 800 de împrumuturi de cărți și am organizat 50 de sesiuni de lectură pentru copii.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    background: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Educație",
    impact: "15 locații deservite, 800 împrumuturi cărți, 50 sesiuni lectură"
  },
  {
    id: "8",
    title: "Mentori pentru Viitor",
    description: "Program de mentorat pentru tinerii din liceu",
    fullDescription: "Programul 'Mentori pentru Viitor' conectează studenții universitari cu elevii de liceu pentru a-i ghida în alegerea carierei și dezvoltarea competențelor necesare pentru viitor. Fiecare mentor lucrează cu 3-4 elevi pe parcursul unui an școlar, oferind consiliere în alegerea facultății, pregătire pentru examene și dezvoltare personală. Organizăm și sesiuni de grup cu profesioniști din diverse domenii care își împărtășesc experiența cu tinerii. Programul include și workshop-uri de dezvoltare a competențelor soft, precum comunicarea, leadership-ul și gândirea critică. Am format 60 de perechi mentor-elev, cu o rată de 95% acceptare la facultățile dorite de către participanți.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    background: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Educație",
    impact: "60 perechi mentor-elev, 95% rată acceptare la facultăți"
  },
  {
    id: "9",
    title: "Festivalul Diversității",
    description: "Celebrarea multiculturalismului și incluziunii sociale",
    fullDescription: "Festivalul Diversității este un eveniment anual care celebrează bogăția culturală a comunității gălățene și promovează toleranța și incluziunea socială. Evenimentul adună reprezentanți ai diferitelor etnii, religii și culturi care își prezintă tradițiile prin muzică, dans, artizanat și gastronomie. Organizăm ateliere interactive unde participanții pot învăța despre diferite culturi, sesiuni de dialog intercultural și spectacole artistice. Festivalul include și o componentă educativă dedicată luptei împotriva discriminării și promovării drepturilor omului. Ultimul festival a atras peste 3000 de participanți, a prezentat 20 de culturi diferite și a facilitat dialogul între 15 comunități etnice locale.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Social",
    impact: "3000+ participanți, 20 culturi prezentate, 15 comunități conectate"
  },
  {
    id: "10",
    title: "Economia Circulară",
    description: "Promovarea practicilor de consum responsabil și reciclare",
    fullDescription: "Proiectul 'Economia Circulară' educă comunitatea despre importanța reducerii deșeurilor și promovează practicile de consum responsabil. Organizăm târguri de produse second-hand, ateliere de reparații pentru obiecte casnice și sesiuni de upcycling pentru transformarea materialelor uzate în obiecte utile. De asemenea, facilităm schimbul de bunuri între locuitori prin platforme online și evenimente comunitare. Proiectul include și colaborări cu afaceri locale pentru implementarea unor practici mai sustenabile. Am organizat 10 târguri de reutilizare, am facilitat schimbul a peste 1000 de obiecte și am redus cu 20% cantitatea de deșeuri generate de participanți.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Mediu",
    impact: "10 târguri organizate, 1000+ obiecte schimbate, 20% reducere deșeuri"
  },
  {
    id: "11",
    title: "Sprijin pentru Mame",
    description: "Program de asistență pentru mamele singure și familiile în dificultate",
    fullDescription: "Programul 'Sprijin pentru Mame' oferă suport integral mamelor singure și familiilor care trec prin perioade dificile. Serviciile noastre includ consiliere psihologică, asistență în găsirea unui loc de muncă, suport în îngrijirea copiilor și ajutor material în situații de urgență. Organizăm grupuri de suport unde mamele pot împărtăși experiențe și se pot sprijini reciproc. De asemenea, facilităm accesul la servicii sociale și juridice necesare. Programul include și activități recreative pentru copii, pentru a le oferi un mediu sigur în timp ce mamele participă la sesiunile de consiliere. Am sprijinit 45 de familii, am facilitat găsirea unui loc de muncă pentru 30 de mame și am oferit 200 de ore de îngrijire gratuită pentru copii.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Social",
    impact: "45 familii sprijinite, 30 locuri de muncă facilitate, 200 ore îngrijire copii"
  },
  {
    id: "12",
    title: "Energia Viitorului",
    description: "Proiect de promovare a energiilor regenerabile în școli",
    fullDescription: "Inițiativa 'Energia Viitorului' educă elevii despre importanța energiilor regenerabile și implementează soluții sustenabile în instituțiile de învățământ. Instalăm panouri solare mici în școli pentru demonstrații practice, organizăm laboratoare de științe despre energia solară și eoliană, și dezvoltăm proiecte pilot pentru reducerea consumului energetic. Programul include și concursuri de inovație unde elevii propun soluții creative pentru eficiența energetică. Colaborăm cu autorități locale pentru promovarea politicilor de energie verde. Am instalat sisteme demonstrative în 8 școli, am educat 600 de elevi despre energiile regenerabile și am facilitat reducerea cu 15% a consumului energetic în instituțiile participante.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Mediu",
    impact: "8 școli echipate, 600 elevi educați, 15% reducere consum energetic"
  },
  {
    id: "13",
    title: "Noua Generație",
    description: "Program de dezvoltare a competențelor antreprenoriale pentru tineri",
    fullDescription: "Programul 'Noua Generație' pregătește tinerii pentru lumea afacerilor prin dezvoltarea competențelor antreprenoriale și inovatoare. Organizăm bootcamp-uri de business, sesiuni de pitching, ateliere de dezvoltare a planurilor de afaceri și competiții de idei inovatoare. Participanții beneficiază de mentorat din partea unor antreprenori de succes și au acces la rețele de networking. Programul include și simulări de investiții și cursuri de educație financiară. De asemenea, facilităm accesul la fonduri de finanțare pentru start-up-urile cu potențial. Am format 120 de tineri antreprenori, am facilitat lansarea a 15 start-up-uri și am generat investiții în valoare de 200.000 de lei pentru proiectele participanților.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    background: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    category: "Antreprenoriat",
    impact: "120 tineri formați, 15 start-up-uri lansate, 200.000 lei investiții facilitate"
  },
  {
    id: "14",
    title: "Sport pentru Toți",
    description: "Programe sportive inclusive pentru persoane cu dizabilități",
    fullDescription: "Inițiativa 'Sport pentru Toți' promovează accesul egal la activitățile sportive pentru persoanele cu dizabilități și organizează competiții inclusive în comunitatea gălățeană. Programul nostru include antrenamente adaptate pentru diverse tipuri de dizabilități, echipamente sportive specializate și competiții integrate unde persoanele cu și fără dizabilități concurează împreună. Colaborăm cu specialiști în kinetoterapie și sport adaptiv pentru a asigura siguranța și eficiența activităților. De asemenea, organizăm evenimente de conștientizare pentru combaterea prejudecăților și promovarea incluziunii sociale prin sport. Am înregistrat 80 de participanți regulați, am organizat 12 competiții inclusive și am îmbunătățit cu 60% nivelul de activitate fizică în rândul beneficiarilor.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    background: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "Sport",
    impact: "80 participanți regulați, 12 competiții organizate, 60% creștere activitate fizică"
  },
  {
    id: "15",
    title: "Podul Generațiilor",
    description: "Program intergenerațional de schimb de experiențe și cunoștințe",
    fullDescription: "Proiectul 'Podul Generațiilor' conectează tinerii cu persoanele în vârstă pentru un schimb reciproc de cunoștințe, experiențe și competențe. Tinerii învață meserii tradiționale, istoria locală și înțelepciunea de viață de la seniori, în timp ce aceștia din urmă sunt inițiați în tehnologiile moderne și tendințele contemporane. Organizăm sesiuni regulate de storytelling, ateliere de meștesuguri tradiționale, cursuri de tehnologie pentru vârstnici și proiecte colaborative intergeneraționale. Programul include și activități recreative comune precum excursii, spectacole și mese comunitare. Am facilitat 200 de perechi intergeneraționale, am documentat 50 de povești de viață și am creat 10 proiecte artistice colaborative care celebrează patrimoniul local.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Social",
    impact: "200 perechi intergeneraționale, 50 povești documentate, 10 proiecte artistice"
  }
];
