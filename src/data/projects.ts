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
    title: "Lego to Impress",
    description: "Eveniment creativ de construcție LEGO pentru creativitate și imaginație",
    fullDescription: "LEGO to Impress - Creează, Construiește, Cucerește! Ești gata să-ți pui creativitatea la încercare și să impresionezi printr-o construcție LEGO de excepție? Interact Galați te invită la \"LEGO to Impress\", un eveniment inedit unde imaginația și îndemânarea ta vor fi cheia succesului! CÂND? 21 Martie, ora 17:00 UNDE? ST.UP Pub Donație minimă: 50 lei (cu voucher de consumație 15 lei inclus + setul de Lego). Cum funcționează? Înscrierea se face pe baza link-ului din bio. Participanții vor primi o temă aleasă prin vot. Vor avea la dispoziție piese LEGO pentru a da viață unei construcții spectaculoase. Fiecare participant își poate lua capodopera acasă! Bonus special! În prețul participării este inclus și un voucher de 15 lei pentru băuturi la ST.UP, ca să te bucuri de un refresh perfect după sesiunea de creație! Vino să te distrezi, să îți pui mintea la contribuție și să creezi ceva memorabil! Ești pregătit să impresionezi?",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80",
    background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Social",
    impact: "30 de participanți mulțumiți"
  },
  {
    id: "3",
    title: "Întâlnirea Zonală a zonei 5 de la Galați",
    description: "Eveniment de amploare care a unit 250 de participanți din Zona 5",
    fullDescription: "Am promis un eveniment de neuitat și… credem că am reușit! Întâlnirea Zonală a Zonei 5, organizată de Interact Galați Perseus și Interact Galați, a adunat laolaltă aproximativ 250 de participanți, trei zile pline de energie, prietenii și momente memorabile. Ziua, ne-am pus mințile la contribuție în traininguri interactive și ateliere captivante, unde am învățat lucruri utile, ne-am testat creativitatea și am aflat cine poate sta cel mai mult atent fără să caute cafea. Noaptea, am dat lecții de dans (sau cel puțin așa ne place să credem) la petrecerile tematice, unde distracția a fost la ea acasă! Am râs, am învățat, am dansat, am legat prietenii și am demonstrat, încă o dată, că spiritul Interact e despre oameni, energie și amintiri care rămân. Vă mulțumim tuturor pentru participare și… pregătiți-vă, pentru că abia așteptăm să ne revedem la următoarea aventură! (sperăm ca a fost bun siretul)",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    background: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Social",
    impact: "250 de participanți din toată zona 5 și nu numai"
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
