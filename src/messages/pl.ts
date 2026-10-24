/**
 * Polish copy (default locale). The shape of this object is the type
 * for every other locale — a missing key in en.ts fails the build.
 *
 * Placeholders: {keyword} / {Keyword} — service SEO phrase from
 * src/config/services.ts (lower / capitalized first letter).
 *
 * Lines marked TODO are drafts to review before going live.
 */
export const pl = {
  meta: {
    title: "AI Product Engineer — inżynier AI, który rozumie biznes | Piotr Wesołowski",
    description:
      "Piotr Wesołowski, AI Product Engineer. Wdrożenie AI w firmie od problemu biznesowego do działającego systemu: audyt AI, agenci i Claude Skills do automatyzacji dokumentów, integracja MCP z Twoim systemem.",
    ogTagline: "Wdrażam AI, które realnie odciąża Twoją firmę",
  },

  nav: {
    services: "Usługi",
    process: "Współpraca",
    work: "Realizacje",
    about: "O mnie",
    faq: "FAQ",
    contact: "Kontakt",
    menu: "Menu",
    home: "Strona główna",
    switchLanguage: "English version",
    toggleTheme: "Przełącz motyw jasny/ciemny",
    skipToContent: "Przejdź do treści",
  },

  cta: {
    book: "Umów 30 min rozmowy",
    bookShort: "Umów rozmowę",
    seeWork: "Zobacz realizacje",
    newTab: "(otwiera się w nowej karcie)",
  },

  hero: {
    role: "AI Product Engineer",
    h1: "AI Product Engineer — inżynier AI, który rozumie biznes",
    lead: "Wdrażam AI, które realnie odciąża Twoją firmę.",
    sub: "Jestem inżynierem oprogramowania, nie marketingowcem AI. Zaczynam od problemu biznesowego, a kończę na systemie, który działa w produkcji i daje mierzalny efekt.",
    photoAlt: "Piotr Wesołowski",
  },

  trust: {
    label: "Pracuję z firmami z branż",
    clientsLabel: "Zaufali mi",
  },

  services: {
    eyebrow: "Usługi",
    title: "Trzy sposoby, żeby AI zaczęło pracować dla Ciebie",
    description:
      "Możesz zacząć od audytu albo od razu od konkretnego wdrożenia. Każda usługa kończy się czymś, co działa, a nie prezentacją.",
    more: "Szczegóły usługi",
    items: {
      audit: {
        title: "Audyt AI",
        short: "Sprawdzam, gdzie w Twojej firmie AI da zwrot, a gdzie nie ma sensu go wdrażać.",
        tags: ["procesy", "priorytety", "plan wdrożenia"],
        intro:
          "{Keyword} to rozsądny pierwszy krok, zanim wydasz pieniądze na wdrożenie. Razem przechodzimy przez procesy w firmie i ustalamy, gdzie AI realnie odciąży ludzi, a gdzie lepiej zostać przy tym, co działa.",
        forWhom: [
          "Firmy, które czują, że „powinny coś zrobić z AI”, ale nie wiedzą, od czego zacząć.",
          "Zarządy, które chcą podjąć decyzję na podstawie faktów, a nie demonstracji dostawców.",
          "Zespoły, w których dużo czasu pochłania ręczna praca na dokumentach i danych.",
        ],
        deliverables: [
          "Mapę procesów z oceną, gdzie AI ma sens, a gdzie nie.",
          "Listę priorytetów: od szybkich zwycięstw do większych projektów.",
          "Szacunek nakładów i ryzyk dla wybranych pomysłów.",
          "Rekomendację narzędzi i architektury, bez przywiązania do jednego dostawcy.",
        ],
        steps: [
          { title: "Rozmowa wstępna", text: "Poznaję firmę, cele i obecne narzędzia." },
          { title: "Warsztat i wywiady", text: "Rozmawiam z osobami, które wykonują pracę na co dzień." },
          { title: "Analiza", text: "Oceniam procesy, dane i możliwości integracji." },
          { title: "Raport i omówienie", text: "Przedstawiam wnioski i plan, który możesz zrealizować ze mną lub bez mnie." },
        ],
      },
      agents: {
        title: "Wdrożenie agentów i Claude Skills",
        short: "Automatyzuję procesy na dokumentach: WZ, faktury, KSeF, zlecenia. Mniej przepisywania, mniej błędów.",
        tags: ["WZ", "faktury", "KSeF", "zlecenia"],
        intro:
          "{Keyword} zdejmuje z zespołu przepisywanie danych z WZ, faktur i zleceń. Buduję agentów i Claude Skills, które czytają dokumenty, sprawdzają je i wpisują dane tam, gdzie powinny trafić, a człowiek zatwierdza tylko wyjątki.",
        forWhom: [
          "Firmy, w których ktoś codziennie ręcznie przepisuje dane z dokumentów.",
          "Działy księgowości i administracji obsługujące faktury, WZ i KSeF.",
          "Firmy, które chcą automatyzacji, ale z kontrolą człowieka nad wynikiem.",
        ],
        deliverables: [
          "Działającego agenta lub zestaw Claude Skills dopasowany do Twoich dokumentów.",
          "Integrację z miejscem, do którego trafiają dane (system, arkusz, baza).",
          "Mechanizm kontroli: walidacje i kolejkę wyjątków do zatwierdzenia.",
          "Dokumentację i przeszkolenie zespołu.",
        ],
        steps: [
          { title: "Wybór procesu", text: "Zaczynamy od jednego procesu, który najbardziej boli." },
          { title: "Prototyp na Twoich dokumentach", text: "Sprawdzam skuteczność na prawdziwych przykładach." },
          { title: "Wdrożenie produkcyjne", text: "Integracja, walidacje, monitoring i obsługa błędów." },
          { title: "Wsparcie i rozwój", text: "Poprawki po pierwszych tygodniach i kolejne procesy." },
        ],
      },
      mcp: {
        title: "Integracja MCP z Twoim systemem",
        short: "Podłączam Claude do danych Twojej firmy, żebyś mógł z nimi rozmawiać po ludzku.",
        tags: ["MCP", "Claude", "dane firmy"],
        intro:
          "{Keyword} przez Model Context Protocol (MCP) sprawia, że możesz zapytać Claude o stan zamówień, rozrachunki czy dokumenty tak, jak zapytałbyś współpracownika. Buduję serwer MCP, który daje AI bezpieczny, kontrolowany dostęp do Twojego systemu.",
        forWhom: [
          "Firmy z własnym systemem lub bazą danych, z których trudno szybko wyciągnąć odpowiedź.",
          "Dostawców oprogramowania, którzy chcą dodać AI do swojego produktu.",
          "Zespoły, które dziś czekają na raporty od jednej osoby „od Excela”.",
        ],
        deliverables: [
          "Serwer MCP dla Twojego systemu z jasno określonymi uprawnieniami.",
          "Zestaw narzędzi (zapytania, akcje) dopasowany do realnych pytań zespołu.",
          "Konfigurację w Claude dla Twoich użytkowników.",
          "Dokumentację techniczną i logowanie dostępu.",
        ],
        steps: [
          { title: "Zakres danych", text: "Ustalamy, do czego AI może mieć dostęp, a do czego nie." },
          { title: "Projekt narzędzi", text: "Projektuję operacje odpowiadające pytaniom zespołu." },
          { title: "Implementacja i testy", text: "Buduję serwer MCP i testuję go na prawdziwych scenariuszach." },
          { title: "Uruchomienie", text: "Wdrożenie, przeszkolenie i wsparcie po starcie." },
        ],
      },
    },
  },

  servicePage: {
    eyebrow: "Usługa",
    forWhom: "Dla kogo",
    deliverables: "Co dostajesz",
    collaboration: "Jak wygląda współpraca",
    price: "Cena",
    ctaTitle: "Porozmawiajmy o Twoim przypadku",
    ctaText: "30 minut, bez zobowiązań. Powiesz mi, co Cię boli, a ja powiem szczerze, czy i jak AI może pomóc.",
    otherServices: "Pozostałe usługi",
    backToServices: "Wszystkie usługi",
  },

  process: {
    eyebrow: "Współpraca",
    title: "Jak pracujemy",
    description: "Prosty proces, w którym na każdym etapie wiesz, co dostajesz i ile to kosztuje.",
    steps: [
      { title: "Rozmowa", text: "30 minut, żeby zrozumieć problem i sprawdzić, czy mogę pomóc." },
      { title: "Audyt", text: "Analiza procesów i danych. Wybieramy to, co da największy efekt." },
      { title: "Wdrożenie", text: "Buduję i uruchamiam rozwiązanie w Twoim środowisku." },
      { title: "Wsparcie", text: "Monitoring, poprawki i rozwój po starcie." },
    ],
  },

  work: {
    eyebrow: "Realizacje",
    title: "Problem → rozwiązanie → efekt",
    description: "Wybrane wdrożenia. Szczegóły techniczne opisuję na pioter.ai.",
    problem: "Problem",
    solution: "Rozwiązanie",
    result: "Efekt",
    readMore: "Czytaj więcej na pioter.ai",
    draft: "Szkic — widoczny tylko lokalnie",
    moreOnBlog: "Więcej realizacji i materiałów na pioter.ai",
  },

  about: {
    eyebrow: "O mnie",
    title: "Inżynier, który wdraża, a nie tylko doradza",
    paragraphs: [
      "W branży IT działam od 2010 roku jako software engineer, team lead i engineering manager. Buduję backend w Javie i Node.js, TypeScript, chmurę AWS, a także frontend i aplikacje PWA. Znam produkcję od strony, której nie widać na demo: wydajność, bezpieczeństwo, utrzymanie.",
      "Rozwijam własny branżowy SaaS, który działa w produkcji i jest zintegrowany z Claude przez MCP. To, co proponuję klientom, najpierw sprawdzam u siebie.",
    ],
    stackLabel: "Technologie",
    stack: ["Java", "Node.js", "TypeScript", "AWS", "Frontend / PWA", "Claude", "MCP"],
    more: "Jak pracuję",
    photoAlt: "Piotr Wesołowski",
  },

  aboutPage: {
    metaTitle: "O mnie — AI Product Engineer",
    metaDescription:
      "Kim jest AI Product Engineer i jak pracuję: od problemu biznesowego, przez wdrożenie, do mierzalnego efektu. Piotr Wesołowski — inżynier AI, który rozumie biznes.",
    eyebrow: "O mnie",
    h1: "AI Product Engineer — inżynier AI, który rozumie biznes",
    intro:
      "Nazywam się Piotr Wesołowski. Jako AI Product Engineer łączę trzy rzeczy, które zwykle są rozdzielone między różne osoby: zrozumienie problemu biznesowego, zaprojektowanie produktu i zbudowanie systemu, który działa w produkcji.",
    sections: [
      {
        title: "Czym jest AI Product Engineer?",
        paragraphs: [
          "To inżynier, który nie zaczyna od modelu, tylko od pytania: jaki problem firmy rozwiązujemy i jak zmierzymy, że się udało. AI jest narzędziem, nie celem.",
          "W praktyce oznacza to jedną osobę odpowiedzialną za cały łańcuch: od rozmowy z ludźmi, którzy wykonują pracę, przez architekturę i integracje, po wdrożenie, monitoring i rozwój.",
        ],
      },
      {
        title: "Jak pracuję: end-to-end",
        paragraphs: [
          "Problem biznesowy. Zaczynam od procesu i ludzi, nie od technologii. Ustalamy, co dziś kosztuje czas lub pieniądze i jak to zmierzymy.",
          "Wdrożenie. Buduję rozwiązanie na Twoich danych i w Twoim środowisku, z kontrolą człowieka tam, gdzie jest potrzebna.",
          "Mierzalny efekt. Po uruchomieniu sprawdzamy wynik względem tego, co ustaliliśmy na początku, i decydujemy o kolejnych krokach.",
        ],
      },
      {
        title: "Doświadczenie",
        paragraphs: [
          "W branży IT działam od 2010 roku: jako software engineer, team lead i engineering manager. Technologie: Java, Node.js, TypeScript, AWS, frontend i aplikacje PWA. Prowadziłem zespoły i projektowałem systemy, w których liczą się wydajność, jakość kodu i skalowalność.",
          "Rozwijam własny branżowy SaaS zintegrowany z Claude przez MCP, który działa w produkcji. Na co dzień korzystam z tych samych rozwiązań, które wdrażam u klientów.",
          // TODO: dopisz branże i nazwę SaaS (jeśli chcesz je ujawnić).
        ],
      },
      {
        title: "Czego się po mnie spodziewać",
        paragraphs: [
          "Szczerości: jeśli AI nie ma sensu w danym procesie, powiem to na pierwszej rozmowie.",
          "Konkretu: zamiast prezentacji dostajesz działający system i dokumentację.",
          "Niezależności: dobieram narzędzia do problemu, a rozwiązanie zostaje Twoje.",
        ],
      },
    ],
    linksTitle: "Gdzie mnie znaleźć",
  },

  testimonials: {
    eyebrow: "Referencje",
    title: "Co mówią klienci",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    // TODO: przejrzyj i dopasuj odpowiedzi — to szkice do Twojej edycji.
    items: [
      {
        q: "Czy moje dane są bezpieczne? Jak jest z RODO?",
        a: "Ustalamy na starcie, jakie dane trafiają do modelu, a jakie nie. Korzystam z usług, które nie trenują modeli na danych klientów, a dostęp do systemów ograniczam do niezbędnego minimum. Gdy to potrzebne, podpisujemy umowę powierzenia przetwarzania danych.",
      },
      {
        q: "Ile kosztuje korzystanie z modeli AI?",
        a: "Koszt modeli zależy od liczby i wielkości przetwarzanych dokumentów lub zapytań. W ramach audytu lub prototypu szacuję go na Twoich danych, zanim podejmiesz decyzję o wdrożeniu.",
      },
      {
        q: "Ile trwa wdrożenie?",
        a: "Zależy od zakresu. Zaczynamy od jednego procesu i prototypu na prawdziwych danych, a harmonogram całości ustalamy po audycie.",
      },
      {
        q: "Czy potrzebuję działu IT?",
        a: "Nie jest konieczny. Biorę na siebie część techniczną, a od Twojej strony potrzebuję osoby, która zna proces, oraz dostępu do systemów, z którymi integrujemy rozwiązanie.",
      },
      {
        q: "Pracujesz zdalnie czy na miejscu?",
        a: "Głównie zdalnie. Warsztaty i spotkania startowe mogą odbyć się na miejscu.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Zacznijmy od 30 minut rozmowy",
    description:
      "Umów termin w kalendarzu albo napisz kilka zdań o swojej firmie i problemie. Odpowiem osobiście.",
    orEmail: "Wolisz e-mail? Napisz na",
    form: {
      title: "Napisz wiadomość",
      name: "Imię",
      company: "Firma",
      email: "E-mail",
      message: "Wiadomość",
      messagePlaceholder: "Czym zajmuje się firma i co chcesz usprawnić?",
      submit: "Wyślij wiadomość",
      sending: "Wysyłanie…",
      success: "Dziękuję! Wiadomość dotarła. Odpowiem najszybciej, jak to możliwe.",
      invalid: "Uzupełnij imię, poprawny e-mail i wiadomość.",
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio e-mailem.",
      notConfigured: "Formularz nie jest jeszcze aktywny. Napisz bezpośrednio e-mailem — odpowiem tak samo szybko.",
      privacy: "Wysyłając formularz, akceptujesz",
      privacyLink: "politykę prywatności",
    },
  },

  footer: {
    tagline: "AI Product Engineer — wdrożenia AI w polskich firmach.",
    rights: "Wszelkie prawa zastrzeżone.",
    privacy: "Polityka prywatności",
    blog: "Blog i wideo: pioter.ai",
  },

  privacy: {
    metaTitle: "Polityka prywatności",
    metaDescription: "Polityka prywatności serwisu piotrwesolowski.com.",
    h1: "Polityka prywatności",
    sections: [
      { title: "Administrator danych", text: "Administratorem danych osobowych jest Piotr Wesołowski. Kontakt: kontakt@piotrwesolowski.com." },
      { title: "Jakie dane przetwarzam", text: "Dane podane w formularzu kontaktowym (imię, nazwa firmy, adres e-mail, treść wiadomości) oraz dane z korespondencji e-mail." },
      { title: "Cel i podstawa prawna", text: "Odpowiedź na zapytanie i przygotowanie oferty — art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes w prowadzeniu korespondencji)." },
      { title: "Odbiorcy danych", text: "Dane mogą być przekazywane podmiotom świadczącym usługi na rzecz serwisu: dostawcy hostingu (Vercel), dostawcy obsługi formularza kontaktowego oraz Calendly — przy umawianiu rozmowy." },
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
