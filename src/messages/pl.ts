/**
 * Polish copy (default locale). The shape of this object is the type
 * for every other locale — a missing key in en.ts fails the build.
 */
export const pl = {
  meta: {
    title: "Piotr Wesołowski — AI Product Engineer",
    description:
      "Piotr Wesołowski, AI Product Engineer. Software engineer od 2010 roku: Java, Node.js, TypeScript, AWS. Buduję produkty i systemy z AI — agentów, Claude, MCP.",
  },

  nav: {
    switchLanguage: "English version",
    toggleTheme: "Przełącz motyw jasny/ciemny",
    skipToContent: "Przejdź do treści",
  },

  card: {
    intro:
      "Programista i software engineer od 2010 roku. Dziś łączę inżynierię oprogramowania z AI — od problemu biznesowego do działającego produktu.",
    photoAlt: "Piotr Wesołowski",

    experienceTitle: "Doświadczenie",
    experience: [
      {
        when: "Dziś",
        title: "AI Product Engineer",
        text: "Agenci AI, Claude i MCP wdrażane w realnych firmach. Rozwijam własny branżowy SaaS.",
      },
      {
        when: "",
        title: "Team lead · Engineering manager",
        text: "Prowadziłem zespoły i projektowałem systemy, w których liczą się wydajność, jakość kodu i skalowalność.",
      },
      {
        when: "Od 2010",
        title: "Software engineer · Programista",
        text: "Backend w Javie i Node.js, TypeScript, frontend i aplikacje PWA. Chmura AWS i serwery w UE (OVH).",
      },
    ],

    stackLabel: "Technologie",
    stack: ["Java", "Node.js", "TypeScript", "AWS", "OVH", "PWA", "Claude", "MCP"],

    contactTitle: "Kontakt",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    book: "Umów 30 min rozmowy",
    saveContact: "Zapisz kontakt",
    newTab: "(otwiera się w nowej karcie)",
  },

  footer: {
    rights: "Wszelkie prawa zastrzeżone.",
    privacy: "Polityka prywatności",
  },

  privacy: {
    metaTitle: "Polityka prywatności",
    metaDescription: "Polityka prywatności serwisu piotrwesolowski.com.",
    h1: "Polityka prywatności",
    back: "Wróć do wizytówki",
    sections: [
      { title: "Administrator danych", text: "Administratorem danych osobowych jest Piotr Wesołowski. Kontakt: kontakt@piotrwesolowski.com." },
      { title: "Jakie dane przetwarzam", text: "Dane, które przekazujesz w korespondencji e-mail, podczas rozmowy telefonicznej lub przy umawianiu spotkania (np. imię, nazwa firmy, adres e-mail, numer telefonu, treść wiadomości)." },
      { title: "Cel i podstawa prawna", text: "Odpowiedź na zapytanie i przygotowanie oferty — art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes w prowadzeniu korespondencji)." },
      { title: "Odbiorcy danych", text: "Dane mogą być przekazywane podmiotom świadczącym usługi na rzecz serwisu: dostawcy hostingu (Vercel) oraz Calendly — przy umawianiu rozmowy." },
      { title: "Analityka", text: "Serwis korzysta z Vercel Web Analytics, które nie używa plików cookies i nie identyfikuje użytkowników. Zbierane są wyłącznie zagregowane, anonimowe statystyki odwiedzin." },
      { title: "Okres przechowywania", text: "Dane przechowuję przez czas niezbędny do prowadzenia korespondencji, a następnie przez okres przedawnienia ewentualnych roszczeń." },
      { title: "Twoje prawa", text: "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. Przysługuje Ci także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych." },
    ],
  },

  notFound: {
    title: "Nie ma takiej strony",
    text: "Strona mogła zostać przeniesiona albo adres zawiera literówkę.",
    back: "Wróć na stronę główną",
  },
};

export type Messages = typeof pl;
