/**
 * Main-language copy. This file **defines the dictionary shape** - every other locale is
 * typed against it, so a key added here and forgotten elsewhere is a compile error.
 *
 * Source: the UX/wireframe brief (.agents/specs/01-home.md) and the approved phrase bank
 * (.agents/10-brand-strategy.md#bank-haseł). Nothing here is invented - no counts, no
 * dates, no results, no client names (.agents/09-content-and-copy.md).
 *
 * Rules that survive any rewrite:
 * - no user-visible text lives in a component,
 * - headlines are arrays: one entry per visual line, because the line break is a design
 *   decision,
 * - validation messages say what to do, not that something is invalid,
 * - first person singular. Plural is CodeBros only.
 *
 * No `as const` here, deliberately: literal types would turn every string in every other
 * dictionary into a type error for not being the Polish one.
 */
export const pl = {
  meta: {
    title: 'Tworzenie stron internetowych dla firm | PawlikWeb',
    description:
      'Tworzenie stron internetowych dla firm: projektuję i buduję strony, systemy webowe i automatyzacje AI dopasowane do Twojego biznesu.',
  },

  common: {
    skipToContent: 'Przejdź do treści',
    from: 'od',
    /** Range separator for prices: `5 000–8 000 zł`. */
    to: '–',
    email: 'E-mail',
    phone: 'Telefon',
    address: 'Adres',
    openingHours: 'Godziny otwarcia',
    languageSwitcher: 'Zmień język',
    optional: 'opcjonalnie',
  },

  nav: {
    openMenu: 'Menu',
    closeMenu: 'Zamknij',
    items: {
      home: 'Home',
      work: 'Realizacje',
      services: 'Usługi',
      pricing: 'Cennik',
      about: 'O mnie',
    },
    cta: 'Opowiedz mi o projekcie',
    descriptor: 'Strony i systemy dla firm',
    /** Shorter, because the mobile drawer CTA sits on its own line. */
    ctaMobile: 'Opowiedz mi o projekcie',
  },

  hero: {
    headline: ['Tworzę strony internetowe', 'dopasowane do biznesu.', 'Nie do szablonu.'],
    body: 'Projektuję i buduję dedykowane strony, aplikacje webowe i rozwiązania AI dla firm, które potrzebują czegoś więcej niż gotowego szablonu.',
    ctaPrimary: 'Opowiedz mi o projekcie',
    ctaSecondary: 'Zobacz realizacje',
  },

  approach: {
    label: 'Podejście',
    headline: ['Najpierw Twój biznes.', 'Potem rozwiązanie.'],
    body: 'Najpierw poznaję firmę, jej klientów i problem, który projekt ma rozwiązać. Dopiero później wybieram strukturę, projekt i technologię.',
    principles: {
      businessFirst: {
        title: 'Najpierw cel',
        body: 'Projekt zaczyna się od celu biznesowego.',
      },
      customByDefault: {
        title: 'Dedykowane z założenia',
        body: 'Nie dopasowuję firmy do gotowego szablonu.',
      },
      builtToShip: {
        title: 'Gotowe do wdrożenia',
        body: 'Projekt od początku uwzględnia realną implementację i wdrożenie.',
      },
    },
  },

  work: {
    label: 'Wybrane realizacje',
    indexTitle: 'Realizacje, które pokazują sposób myślenia.',
    headline: ['Wybrane realizacje'],
    pageHeadline: ['Realizacje, które', 'pokazują sposób pracy.'],
    pageIntro:
      'Przykłady stron, aplikacji i systemów, w których porządkowanie problemu było równie ważne jak sam interfejs.',
    intro:
      'Kilka projektów, w których projektowanie, technologia i realny problem firmy spotykają się w jednym miejscu.',
    /** Mono metadata above a project title. Keys match PROJECT_TAGS. */
    tags: {
      webApp: 'Aplikacja webowa',
      website: 'Strona internetowa',
      branding: 'Stworzenie brandingu',
      logoCreation: 'Tworzenie logo',
      businessAnalysis: 'Analiza biznesowa',
      fullStack: 'Frontend i backend',
      internalSystem: 'System wewnętrzny',
      riskScoring: 'Ocena ryzyka',
    },
    teamCodebros: 'CodeBros',
    teamSolo: 'Projekt indywidualny',
    caseStudyLabel: 'Case study',
    caseStudyCta: 'Zobacz case study',
    liveCta: 'Wersja online',
    caseStudyClosing: {
      title: 'Podoba Ci się ta realizacja?',
      body: 'Chcesz stworzyć coś podobnego dla swojej firmy? Porozmawiajmy o projekcie.',
      cta: 'Opowiedz mi o projekcie',
    },
    allProjectsCta: 'Zobacz wszystkie realizacje',
    visualization: 'Widok realizacji',
    selectorLabel: 'Wybierz realizację',
    projects: {
      mawAuto: {
        title: 'Maw Autoserwis',
        description: 'Branding i strona internetowa dla wszechstronnego warsztatu samochodowego.',
      },
      dzendzera: {
        title: 'Dżendżera',
        description:
          'Strona fotografa łącząca sport, motorsport i wildlife w jeden spójny język wizualny.',
      },
      agnieszkaLuzarska: {
        title: 'Agnieszka Luzarska',
        description: 'Osobista strona dyrektor i konsultantki Mary Kay, oparta na storytellingu.',
      },
      vantaDetailing: {
        title: 'Vanta Detailing',
        description: 'Portfolio strony sprzedażowej dla studia detailingu samochodowego.',
      },
      planik: {
        title: 'Planik',
        description: 'Duża aplikacja CodeBros do planowania wydarzeń od pomysłu po rezerwację.',
      },
      creditRisk: {
        title: 'Credit Risk System',
        description: 'System CodeBros do konfigurowalnej oceny ryzyka kredytu kupieckiego.',
      },
    },
  },

  caseStudies: {
    mawAuto: {
      title: 'Maw Autoserwis',
      categories: 'Strona internetowa / Stworzenie brandingu',
      statement:
        'Dla Maw Autoserwis stworzyłem branding i stronę, które pokazują doświadczenie warsztatu oraz szeroki zakres jego usług.',
      meta: {
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co zbudowałem?',
        body: 'Stworzyłem cały branding firmy i przełożyłem go na stronę internetową. Kierunek marki wypracowaliśmy wspólnie z właścicielem podczas rozmów o przyszłości firmy i wartościach, na których ma opierać się jej wizerunek. Zbudowałem również wizytówkę Google.',
      },
      problem: {
        title: 'Problem',
        body: 'Maw Autoserwis działa na rynku od 20 lat i obsługuje bardzo różne samochody. Strona musiała jednocześnie budować zaufanie oraz pokazywać wszechstronność warsztatu, od luksusowych aut osobowych po samochody dostawcze.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Wydzieliłem dwie warstwy oferty: auta osobowe i auta dostawcze. Dodałem usługi i cennik, a formularz kontaktowy skrócił drogę od wyboru usługi do wysłania zapytania.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Najważniejsze było uporządkowanie wielu informacji bez przytłaczania użytkownika. Każda część strony ma wzmacniać wiarygodność firmy i prowadzić do kontaktu z warsztatem.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Branding', icon: 'branding' as const },
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Strona internetowa', icon: 'website' as const },
          { label: 'Wizytówka Google', icon: 'google' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstała strona, która buduje zaufanie przez konkretne informacje o firmie i konsekwentnie zachęca do kontaktu.',
      },
      galleryLabel: 'Galeria strony',
      nextLabel: 'Następna realizacja',
    },
    dzendzera: {
      title: 'Dżendżera',
      categories: 'Strona internetowa / Stworzenie brandingu',
      statement:
        'Dla Macieja Dżendżery stworzyłem stronę fotograficzną, która łączy sport, motorsport i wildlife w jeden spójny kierunek marki.',
      meta: {
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co zbudowałem?',
        body: 'Stworzyłem stronę dla fotografa, który pracuje w dwóch rytmach: dynamicznym świecie sportu i motorsportu oraz wymagającym cierpliwości świecie wildlife. Serwis porządkuje te obszary i prowadzi użytkownika od pierwszego kadru do kontaktu.',
      },
      problem: {
        title: 'Problem',
        body: 'Strona musiała pokazać różne rodzaje fotografii bez rozbijania marki na kilka niezależnych historii. Jednocześnie powinna szybko wyjaśnić, dla kogo jest oferta i jaki materiał może powstać ze współpracy.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Zbudowałem narrację wokół dwóch rytmów pracy fotografa. Sekcje performance i wildlife mają własny charakter, ale łączy je spójna typografia, rytm oraz sposób prezentowania zdjęć. Oferta, historie i formularz kontaktowy domykają drogę od inspiracji do zapytania.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Największym wyzwaniem było połączenie dużej liczby zdjęć, animacji i długich sekwencji w stronę, która pozostaje lekka w odbiorze. Ruch ma budować napięcie i prowadzić przez historię, a nie przykrywać fotografii ani najważniejszych informacji.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Stworzenie brandingu', icon: 'branding' as const },
          { label: 'Strona internetowa', icon: 'website' as const },
          { label: 'UX i UI', icon: 'interface' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstała wizualna strona fotografa, która pokazuje zarówno energię wydarzeń, jak i skupienie potrzebne w pracy z naturą. Serwis porządkuje ofertę, buduje markę autora i ułatwia rozpoczęcie współpracy.',
      },
      galleryLabel: 'Galeria strony',
      nextLabel: 'Następna realizacja',
    },
    agnieszkaLuzarska: {
      title: 'Agnieszka Luzarska',
      categories: 'Strona internetowa / Tworzenie logo',
      statement:
        'Osobista strona Agnieszki Luzarskiej przedstawia nie tylko ofertę Mary Kay, ale przede wszystkim kobietę, która za nią stoi.',
      meta: {
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co zbudowałem?',
        body: 'Stworzyłem stronę dla dyrektor i konsultantki Mary Kay. Jej celem było pokazanie Agnieszki jako osoby z własną historią, podejściem i zrozumieniem potrzeb innych kobiet. Stworzyłem również logo marki.',
      },
      problem: {
        title: 'Problem',
        body: 'Sprzedaż kosmetyków była ważna, ale nie mogła przykryć osobistego charakteru marki. Strona miała pozwolić klientkom najpierw poznać Agnieszkę i poczuć, z kim będą pracować.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Postawiłem na storytelling. Użytkowniczka odkrywa postać Agnieszki przez przyjemne dla oka animacje i opowiedzianą w kolejnych sekcjach historię. Na stronie znajduje się również oferta kosmetyków, którą przy rzadkich zmianach aktualizuję jako administrator, bez rozbudowanego CMS-u.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Drugim ważnym elementem była karta potrzeb skóry. Przeniosłem krótki formularz z papierowej wersji do internetu, dzięki czemu klientki mogą łatwiej opisać swoje potrzeby i skontaktować się z Agnieszką.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Strona internetowa', icon: 'website' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstała strona, która łączy osobistą historię z ofertą i ułatwia klientkom pierwszy kontakt. Jeśli oferta zaczęłaby zmieniać się częściej, stronę można rozbudować o CMS.',
      },
      galleryLabel: 'Galeria strony',
      nextLabel: 'Następna realizacja',
    },
    vantaDetailing: {
      title: 'Vanta Detailing',
      categories: 'Strona internetowa / Stworzenie brandingu',
      statement:
        'Vanta Detailing to portfolio strony sprzedażowej dla studia detailingu samochodowego i demonstracja mojego warsztatu projektowego.',
      meta: {
        status: { label: 'Status', value: 'Projekt portfolio' },
      },
      context: {
        title: 'Co zbudowałem?',
        body: 'Stworzyłem nowoczesną stronę dla studia detailingu samochodowego. To projekt portfolio, a nie wdrożenie dla prawdziwego klienta, ale został zaprojektowany tak, jak strona, która ma realnie sprzedawać usługę.',
      },
      problem: {
        title: 'Problem',
        body: 'Studio detailingu musi pokazać nie tylko zakres usług, ale również jakość pracy i różnicę między poszczególnymi wariantami. Użytkownik powinien szybko znaleźć cenę, pakiet i powód, żeby napisać.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Strona prezentuje studio, usługi, szczegółowy cennik i ofertę pakietową. Komponent before/after pokazuje efekt pracy, a formularz kontaktowy i sekcja opinii domykają drogę do zapytania.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Zastosowałem nowoczesne animacje w wyważony sposób. Strona korzysta z aktualnego języka wizualnego, ale animacja nie konkuruje z ofertą i zdjęciami. Każdy element ma wspierać sprzedaż, a nie tylko wyglądać efektownie.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Strona internetowa', icon: 'website' as const },
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Branding', icon: 'branding' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstał kompletny przykład strony, którą można dostosować do prawdziwego studia detailingu. Jeśli podoba Ci się ten kierunek, mogę przełożyć go na potrzeby Twojego biznesu.',
      },
      galleryLabel: 'Galeria strony',
      nextLabel: 'Następna realizacja',
    },
    planik: {
      title: 'Planik',
      categories: 'Aplikacja webowa / Analiza biznesowa / Branding',
      statement:
        'Planik to duża aplikacja webowa CodeBros do planowania wydarzeń, od pierwszego pomysłu po rezerwacje, budżet i współpracę grupy.',
      meta: {
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co budowaliśmy?',
        body: 'Planik służy do organizowania wieczorów kawalerskich i panieńskich, urodzin oraz innych wydarzeń. Aplikacja zawiera katalog atrakcji, restauracji i noclegów, a także pełny system kont, logowania i uprawnień.',
      },
      problem: {
        title: 'Problem',
        body: 'Planowanie wydarzenia łączy wiele decyzji, osób i rezerwacji. Potrzebowaliśmy jednego miejsca, w którym użytkownik może przejść od inspiracji do gotowego planu, a grupa może wspólnie podejmować decyzje i kontrolować budżet.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Moduł planowania pozwala tworzyć wydarzenia, zapraszać znajomych, dodawać atrakcje z katalogu, proponować je w ankietach, wybierać pomocników, tworzyć rezerwacje i zarządzać budżetem. W evencie działają również czaty grupowe i zapis zdjęć. Plan można zacząć od przygotowanej przez nas templatki albo zbudować po wywiadzie z AI.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Aplikacja obejmuje także moduł partnera z dostępem do tworzenia atrakcji i zarządzania nimi, system rezerwacji, monetyzację opartą na płatnościach za event i wyróżnienia ofert oraz panele administracyjne do zarządzania produktem i treścią. Największym wyzwaniem było połączenie tych obszarów w spójną całość.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Analiza biznesowa', icon: 'analysis' as const },
          { label: 'Branding', icon: 'branding' as const },
          { label: 'UX i UI', icon: 'interface' as const },
          { label: 'Model danych', icon: 'data' as const },
          { label: 'Logika biznesowa', icon: 'logic' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstał rozbudowany produkt, który łączy planowanie wydarzeń, katalog, współpracę grupy, rezerwacje, płatności i narzędzia administracyjne w jednym systemie.',
      },
      galleryLabel: 'Galeria produktu',
      nextLabel: 'Następna realizacja',
    },
    creditRisk: {
      title: 'Credit Risk System',
      categories: 'System wewnętrzny / Ocena ryzyka / Frontend i backend',
      statement:
        'Credit Risk System był projektem CodeBros na konkurs UGotIt organizowany przez Univio. To właśnie dzięki niemu powstało CodeBros.',
      meta: {
        status: { label: 'Status', value: 'Projekt konkursowy' },
      },
      context: {
        title: 'Co budowaliśmy?',
        body: 'Przed rozpoczęciem pracy w Univio stworzyliśmy na konkurs system dla firmy, która potrzebowała oceniać ryzyko udzielania klientom kredytu kupieckiego. Projekt połączył silnik decyzyjny, interfejs analityka i narzędzia dla handlowca.',
      },
      problem: {
        title: 'Problem',
        body: 'Ocena ryzyka opierała się na rozbudowanych wzorach i regułach. Analityk musiał mieć możliwość pełnej konfiguracji silnika, a handlowiec potrzebował jasnej informacji, z którymi klientami powinien się skontaktować i jakie tematy poruszyć.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Stworzyliśmy konfigurowalny silnik obliczania ryzyka oraz AI do generowania podsumowań. Dodaliśmy również tablicę Kanban, na której handlowiec dostaje uporządkowanych klientów wraz z tematami wykrytymi przez silnik.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Najtrudniejsze było połączenie skomplikowanych, konfigurowalnych reguł z prostym doświadczeniem użytkownika. System musiał być zrozumiały dla analityka pracującego na modelu ryzyka i dla handlowca, który korzystał z gotowych wniosków.',
      },
      deliverables: {
        title: 'Zakres prac',
        items: [
          { label: 'Analiza biznesowa', icon: 'analysis' as const },
          { label: 'UX i UI', icon: 'interface' as const },
          { label: 'Silnik ryzyka', icon: 'risk' as const },
          { label: 'Integracja AI', icon: 'ai' as const },
        ],
      },
      result: {
        title: 'Rezultat',
        body: 'Wygraliśmy konkurs, otrzymaliśmy 12 000 złotych i dostaliśmy szansę udziału w rekrutacji do Univio. Oboje dołączyliśmy później do firmy, a projekt stał się początkiem CodeBros.',
      },
      galleryLabel: 'Galeria systemu',
      nextLabel: 'Następna realizacja',
    },
  },

  services: {
    label: 'Usługi',
    headline: ['Od prostej strony', 'po dedykowany system.'],
    pageHeadline: ['Rozwiązania dopasowane', 'do skali problemu.'],
    pageIntro:
      'Każdy projekt zaczyna się od konkretnej sytuacji firmy. Wybieram zakres, który jest potrzebny, i rozwijam go dopiero wtedy, gdy pojawia się realna potrzeba.',
    closingLabel: 'Następny krok',
    closingHeadline: 'Masz konkretny problem do rozwiązania?',
    closingBody:
      'Opisz mi sytuację firmy. Po krótkiej rozmowie wskażę sensowny zakres i kolejny krok.',
    closingCta: 'Opowiedz mi o projekcie',
    pricingCta: 'Zobacz orientacyjny cennik',
    contactCta: 'Opowiedz mi o projekcie',
    intro:
      'Najpierw porządkuję problem i cel. Dopiero potem dobieram zakres i technologię, żeby zbudować rozwiązanie potrzebne firmie - bez dokładania funkcji na zapas.',
    items: {
      websites: {
        title: 'Strony internetowe',
        body: 'Jednostronicowe strony dla jednej oferty lub proste wizytówki firmy, strony firmowe i rozbudowane serwisy tworzone od podstaw w kodzie, bez WordPressa i gotowych builderów. W ten sam proces mogę włączyć branding firmy, logo, kierunek wizualny i Profil Firmy w Google.',
        cta: 'Poznaj zakres',
        includes: [
          'jednostronicowe strony',
          'strony firmowe',
          'rozbudowane serwisy',
          'CMS',
          'integracje',
          'dedykowany interfejs',
          'branding i logo',
          'wydajność',
          'responsywność',
          'analityka',
          'SEO techniczne',
          'wielojęzyczność',
          'wizytówka Google',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Dedykowane aplikacje, panele, portale i systemy wewnętrzne dopasowane do procesu firmy. Przy większych projektach pracuję z moim bratem, inżynierem Michałem Pawlikiem, jako CodeBros.',
        cta: 'Zobacz CodeBros',
        includes: [],
      },
      ai: {
        title: 'Automatyzacja AI',
        body: 'Analizuję powtarzalną pracę i sprawdzam, czy można ją uprościć, zautomatyzować albo wesprzeć AI.',
        cta: 'Sprawdź możliwości',
        includes: [],
      },
    },
  },

  servicePages: {
    websites: {
      title: 'Strony internetowe',
      intro:
        'Projektuję strony, które porządkują ofertę, budują zaufanie i prowadzą właściwe osoby do kontaktu.',
      mediaAlt: 'Widok strony biznesowej na laptopie',
      mediaLabel: 'Przykład interfejsu strony',
      problemTitle: 'Punkt wyjścia',
      problem:
        'Masz dobrą usługę, ale obecna strona nie pokazuje jej wartości, nie buduje wystarczającego zaufania albo nie prowadzi klienta do kontaktu.',
      benefitsTitle: 'Strona, która pracuje na wynik',
      benefits: [
        'Klient szybko rozumie, czym się zajmujesz, dla kogo pracujesz i dlaczego warto wybrać właśnie Ciebie.',
        'Oferta ma czytelną hierarchię, która prowadzi od pierwszego wrażenia do konkretnego działania.',
        'Strona wygląda jak Twoja firma, a nie jak kolejna wersja tego samego szablonu.',
        'Nie tylko dobrze wygląda, ale wspiera sprzedaż i zamienia zainteresowanie w zapytania.',
      ],
      scopeTitle: 'Co mogę dla ciebie zrobić',
      scope: [
        'Jednostronicowa strona',
        'Strona firmowa',
        'Rozbudowana strona firmowa',
        'CMS i integracje',
        'Formularze, integracje i analityka',
        'Responsywność, animacje i interakcje',
        'Branding firmy, logo i kierunek wizualny',
        'SEO techniczne i wielojęzyczność',
        'Domena, hosting, SSL, DNS i wdrożenie',
        'Profil Firmy w Google',
        'Treści na stronę - opcjonalnie, dodatkowo płatne',
        'Zdjęcia klienta, AI lub darmowy stock',
      ],
      processTitle: 'Jak pracuję nad stroną',
      process: [
        'Porządkuję ofertę, odbiorców i najważniejszy cel strony. Jeśli trzeba, projektuję też branding i logo.',
        'Projektuję strukturę i interfejs, który wspiera ten cel.',
        'Wdrażam stronę, testuję ją na różnych ekranach i przygotowuję do publikacji.',
      ],
      investmentTitle: 'Wycena po krótkiej rozmowie',
      investment:
        'W cenniku pokazuję, od jakich kwot zaczynam wycenę. Po krótkiej rozmowie jestem w stanie przedstawić bardziej szczegółową wycenę. Branding, logo i SEO mogą wejść w ten sam zakres - uwzględniam je w procesie i cenie projektu.',
      fitTitle: 'Kiedy warto porozmawiać',
      fit: 'Kiedy chcesz stronę dopasowaną do firmy, a nie firmę dopasowaną do gotowego motywu.',
      pricingCta: 'Zobacz orientacyjny cennik',
      contactCta: 'Opowiedz mi o projekcie',
    },
    systems: {
      title: 'Custom Systems',
      intro:
        'Projektuję i buduję dedykowane systemy webowe - zarówno do usprawniania działania firmy, jak i aplikacje tworzone na zlecenie, gdy firma ma konkretny pomysł albo potrzebę.',
      mediaAlt: 'Wojciech i Michał jako CodeBros podczas konkursu',
      mediaLabel: 'CodeBros / wspólna realizacja',
      problemTitle: 'Dla jakiego problemu?',
      problem:
        'Gdy informacje są rozproszone, a zespół codziennie omija ograniczenia arkuszy, formularzy i kilku niespójnych systemów.',
      benefitsTitle: 'Co daje dedykowany system',
      benefits: [
        'Zespół dostaje jedno narzędzie zamiast kilku arkuszy i ręcznych obejść.',
        'Proces jest zapisany w systemie, więc łatwiej go powtarzać, kontrolować i rozwijać.',
        'Dane, role i uprawnienia są dopasowane do tego, jak naprawdę działa firma.',
      ],
      scopeTitle: 'Co mogę dla ciebie zrobić',
      scope: [
        'Aplikacja webowa',
        'Panel klienta lub panel operacyjny',
        'Portal B2B, panel i konfigurator',
        'System rezerwacji i obieg pracy',
        'Model danych, backend i integracje',
        'Role, uprawnienia i logika biznesowa',
      ],
      processTitle: 'Od procesu do działającego systemu',
      process: [
        'Poznaję proces, użytkowników i miejsca, w których praca się zatrzymuje.',
        'Układam model danych i prototyp najważniejszych scenariuszy.',
        'Buduję, wdrażam i rozwijam system etapami, z regularnym przeglądem.',
      ],
      investmentTitle: 'Najpierw dzielę system na etapy',
      investment:
        'Mogę zbudować system do użytku wewnętrznego, aplikację dla klientów albo produkt rozwijany na zlecenie firmy. Zakres i budżet ustalam na podstawie celu, użytkowników, danych, integracji i pierwszego etapu, który ma przynieść realną wartość.',
      fitTitle: 'Kiedy warto porozmawiać',
      fit: 'Kiedy proces jest ważny dla firmy, ale nie istnieje dla niego dobre gotowe rozwiązanie.',
      pricingCta: 'Zobacz orientacyjny cennik',
      contactCta: 'Opowiedz o procesie',
    },
    ai: {
      title: 'Automatyzacja AI',
      intro:
        'Szukam procesu, który zabiera zespołowi czas - dopiero potem sprawdzam, czy AI może go uprościć.',
      mediaAlt: 'Serwerownia jako wizualizacja infrastruktury AI',
      mediaLabel: 'Infrastruktura, która obsługuje automatyzację',
      problemTitle: 'Dla jakiego problemu?',
      problem:
        'Gdy ludzie ręcznie czytają dokumenty, przeklejają dane, odpowiadają na te same pytania albo podejmują powtarzalne decyzje.',
      benefitsTitle: 'Co automatyzacja może odblokować',
      benefits: [
        'Mniej ręcznego przepisywania i szukania informacji między systemami.',
        'Szybsza obsługa powtarzalnych spraw bez obietnicy, że AI zrobi wszystko samo.',
        'Kontrola człowieka zostaje tam, gdzie decyzja wymaga doświadczenia i odpowiedzialności.',
      ],
      scopeTitle: 'Co mogę dla ciebie zrobić',
      scope: [
        'Analiza procesu',
        'Przetwarzanie dokumentów',
        'Ekstrakcja i klasyfikacja danych',
        'Przeszukiwanie wiedzy firmowej',
        'Analiza zgłoszeń i automatyzacja obiegu pracy',
        'Integracja z istniejącymi systemami',
      ],
      processTitle: 'Najpierw proces, potem narzędzie',
      process: [
        'Rozpisuję powtarzalną pracę i sprawdzam, gdzie naprawdę znika czas.',
        'Buduję mały prototyp na rzeczywistym przykładzie.',
        'Jeśli wynik ma sens, integruję rozwiązanie i mierzę jego wpływ na pracę.',
      ],
      investmentTitle: 'Zaczynam od małego, sprawdzalnego kroku',
      investment:
        'Koszt zależy od danych, liczby wyjątków, poziomu kontroli i integracji z istniejącymi narzędziami. Najpierw można ocenić sam proces, a dopiero potem decydować o większym wdrożeniu.',
      fitTitle: 'Kiedy warto porozmawiać',
      fit: 'Kiedy masz proces, który powtarzasz codziennie i chcesz sprawdzić, czy da się go uprościć bez obietnic składanych na wyrost.',
      pricingCta: 'Zobacz orientacyjny cennik',
      contactCta: 'Opowiedz o procesie',
    },
  },

  codebrosTransition: {
    trace: 'Tryb systemowy / 05',
    intro: 'Kiedy projekt staje się większy niż typowa strona, nie przekazuję go dalej.',
    headline: ['Wchodzimy we dwóch.'],
    brand: 'CodeBros',
    sub: 'Wojciech & Michał Pawlik',
  },

  codebros: {
    label: 'CodeBros / Dedykowane systemy',
    headline: ['Dwie osoby.', 'Pełny proces.'],
    body: 'Przy większych aplikacjach pracuję razem z Michałem. Bez warstwy opiekunów projektu i przekazywania projektu między zespołami. Od architektury i backendu po frontend i wdrożenie pracujemy nad produktem bezpośrednio.',
    claim: 'Od problemu do wdrożenia.',
    proofTitle: 'Zbudowane razem',
    proofs: {
      creditRisk: {
        title: 'Credit Risk System',
        body: 'Jeszcze zanim pracowaliśmy w Univio, wystartowaliśmy razem w organizowanym przez firmę konkursie. Zbudowaliśmy system wspierający ocenę ryzyka przy udzielaniu kredytów kupieckich i wygraliśmy.',
      },
      planik: {
        title: 'Planik',
        body: 'Kompletną aplikację do planowania eventów zaprojektowaliśmy i zbudowaliśmy we dwóch - od modelu danych po interfejs.',
      },
    },
    mediaAlt: 'Wojciech i Michał Pawlik podczas konkursu CodeBros',
    mediaPending: 'Wojciech i Michał',
  },

  ai: {
    sectionNumber: '06',
    label: 'Automatyzacja AI',
    headline: ['Najpierw proces.', 'Potem AI.'],
    body: 'AI jest narzędziem. Punktem wyjścia jest proces, który zabiera zespołowi czas, wymaga powtarzalnych decyzji albo przerzucania informacji między systemami.',
    processLabel: 'Jak pracuję',
    process: ['Analiza procesu', 'Prototyp', 'Integracja', 'Pomiar efektu'],
    explorerTitle: 'Wybierz problem',
    inputLabel: 'Wejście',
    layerLabel: 'Warstwa AI',
    outputLabel: 'Wyjście',
    humanLabel: 'Kontrola człowieka',
    flowTitle: 'Jak to wygląda',
    flow: {
      repetitiveWork: 'Powtarzalna praca',
      processAnalysis: 'Analiza procesu',
      prototype: 'Prototyp',
      automation: 'Automatyzacja',
      measure: 'Pomiar efektu',
    },
    useCasesTitle: 'Gdzie to działa',
    useCases: {
      documents: {
        title: 'Dokumenty',
        body: 'Dokumenty przetwarzane ręcznie.',
        input: 'PDF / mail / skan',
        layer: 'odczyt → klasyfikacja → walidacja',
        output: 'CRM / ERP / baza danych',
        human: 'sprawdzenie wyjątków',
      },
      knowledge: {
        title: 'Wiedza',
        body: 'Wiedza rozrzucona po firmie.',
        input: 'procedury / dokumentacja / pliki',
        layer: 'wyszukiwanie → kontekst → odpowiedź',
        output: 'jedna odpowiedź w odpowiednim miejscu',
        human: 'kontrola źródła i decyzji',
      },
      operations: {
        title: 'Operacje',
        body: 'Powtarzalne decyzje operacyjne.',
        input: 'dane z kilku systemów',
        layer: 'reguły → rekomendacja → akcja',
        output: 'zaktualizowany proces',
        human: 'akceptacja nietypowych przypadków',
      },
      support: {
        title: 'Obsługa klienta',
        body: 'Duża liczba podobnych zapytań.',
        input: 'pytanie klienta lub pracownika',
        layer: 'rozpoznanie → wyszukanie → przygotowanie',
        output: 'szybsza odpowiedź oparta na wiedzy firmy',
        human: 'eskalacja trudnych spraw',
      },
    },
    cta: 'Porozmawiajmy o procesie',
  },

  process: {
    label: 'Jak pracuję',
    headline: ['Od pierwszej rozmowy', 'do wdrożenia.'],
    intro: 'Po każdym etapie wiesz, co jest ustalone, co powstaje i jaki jest następny krok.',
    steps: {
      understand: {
        title: 'Poznaję firmę i cel',
        body: 'Rozmawiamy o firmie, ofercie, klientach i problemie, który projekt ma rozwiązać.',
        outputLabel: 'Na końcu',
        output: 'Cel i zakres projektu',
      },
      design: {
        title: 'Projektuję rozwiązanie',
        body: 'Porządkuję strukturę, ofertę, UX i kierunek wizualny. Wybieramy to, co naprawdę potrzebne.',
        outputLabel: 'Na końcu',
        output: 'Plan strony i kierunek projektu',
      },
      build: {
        title: 'Buduję i konsultuję',
        body: 'Wdrażam projekt i pokazuję działającą wersję, żeby można było ją wspólnie sprawdzić.',
        outputLabel: 'Na końcu',
        output: 'Działająca wersja do przeglądu',
      },
      launch: {
        title: 'Dopracowuję i wdrażam',
        body: 'Sprawdzam responsywność, szczegóły i przygotowuję projekt do publikacji.',
        outputLabel: 'Na końcu',
        output: 'Gotowa strona online',
      },
    },
  },

  pricing: {
    label: 'Wycena',
    headline: ['Zacznij od zakresu,', 'nie od dużego budżetu.'],
    pageHeadline: ['Najpierw zakres.', 'Potem wycena.'],
    pageIntro:
      'Pokazuję punkty wyjścia, żeby łatwiej było ocenić dopasowanie. Nie sprzedaję gotowych pakietów - ostateczna wycena zależy od zakresu projektu.',
    minimumRateNote:
      'Kwoty pokazują najniższą stawkę, od której zaczynam wycenę. Zakres, treść i integracje mogą ją zmienić.',
    intro: 'Nie musisz znać właściwego wariantu. Opisz mi cel projektu - pomogę dobrać zakres.',
    landing: {
      label: 'Orientacyjny budżet',
      headline: ['Od czego zaczyna się', 'strona dla firmy?'],
      intro:
        'Nie pokazuję gotowych pakietów. Pokazuję trzy poziomy projektu, żeby łatwiej było ocenić, od czego możemy zacząć.',
      largerLabel: 'Większe projekty',
      largerBody:
        'Potrzebujesz systemu webowego, panelu dla klientów albo automatyzacji procesu? Takie projekty wyceniam indywidualnie.',
      fullPricingCta: 'Zobacz pełny cennik',
      contactCta: 'Opowiedz mi o projekcie',
      rows: {
        landing: {
          need: 'Masz jedną usługę lub ofertę do pokazania?',
          solution: 'Landing page albo prosta wizytówka firmy - jedna strona i jeden główny cel.',
        },
        businessWebsite: {
          need: 'Chcesz jasno pokazać firmę, usługi i realizacje?',
          solution: 'Kilka podstron, uporządkowana oferta i czytelna droga do kontaktu.',
        },
        extendedWebsite: {
          need: 'Potrzebujesz większej struktury, CMS-u lub integracji?',
          solution: 'Rozbudowana strona firmowa z większą ilością treści, funkcji i logiki.',
        },
      },
    },
    /** Marks a bracket whose upper bound is soft: `15 000–30 000+ zł`. */
    plusSuffix: '+',
    quote: 'Wycena indywidualna',
    promotion: {
      label: 'Oferta na start',
      headline: 'Pierwsze {limit} realizacje od {price}',
      body: 'Z okazji rozpoczęcia działalności na Oferteo przygotowałem promocyjne warunki dla pierwszych klientów.',
      counter: 'Skorzystało: {claimed} z {limit} miejsc',
    },
    groups: {
      websites: {
        label: 'Strony internetowe',
        intro: 'Od jednej strony do rozbudowanego serwisu firmowego.',
      },
      largerProjects: {
        label: 'Większe projekty',
        intro: 'Gdy potrzebujesz narzędzia dla procesu firmy, a nie tylko strony.',
      },
    },
    extensionsLabel: 'Możliwe rozszerzenia projektu',
    extensions: [
      'Branding i logo',
      'Profil Firmy w Google',
      'CMS i integracje',
      'Analityka, SEO techniczne i wielojęzyczność',
    ],
    materials: {
      label: 'Materiały do projektu',
      contentTitle: 'Treści na stronę',
      contentBody:
        'Treści i fakty do strony dostarcza klient. Jeśli chcesz, mogę przygotować teksty za dodatkową opłatą ujętą w wycenie - po ustaleniu odpowiednich faktów z klientem.',
      imagesTitle: 'Zdjęcia',
      imagesBody:
        'Klient dostarcza zdjęcia albo uzgadniamy wykorzystanie zdjęć wygenerowanych przez AI lub darmowych zdjęć stockowych. Nie świadczę usługi fotograficznej i nie pobieram za to dodatkowej opłaty. Jeśli wspólnie wybierzemy płatne zdjęcie stockowe, koszt jego zakupu pokrywa klient.',
    },
    aftercareLabel: 'Po wdrożeniu',
    aftercareTitle: 'Projekt jest Twój.',
    aftercareBody:
      'Możesz rozwijać go samodzielnie albo zlecić mi dalsze utrzymanie i drobne aktualizacje.',
    maintenanceLabel: 'Opcjonalne utrzymanie',
    maintenancePrefix: 'standardowo',
    maintenancePeriod: 'miesięcznie',
    maintenanceBody:
      'Dla prostej strony utrzymanie kosztuje standardowo 150 zł miesięcznie. Przy większych stronach kwota może zależeć od zakresu mojej pracy i potrzebnych zasobów.',
    maintenanceIncludesLabel: 'W ramach utrzymania',
    maintenanceIncludes: [
      'Domena - kupuję ją ja albo firma',
      'Hosting - zajmuję się jego konfiguracją i obsługą',
      'Stałe monitorowanie strony',
      'Podstawowe statystyki, np. liczba wejść na stronę',
      'Naprawa błędów w razie ich wystąpienia',
    ],
    updatesLabel: 'Opcjonalne zmiany i większe aktualizacje',
    updatesTitle: 'Nowe sekcje i większe zmiany',
    updatesBody:
      'Nową sekcję, zmianę istniejącej sekcji albo większą aktualizację rozliczam stawką 100 zł za godzinę pracy. Nie rozliczam pojedynczych minut - minimalna wartość zlecenia to 100 zł, nawet jeśli praca zajmie mniej niż godzinę. Jeśli zajmie 1,25 godziny, zapłacisz 125 zł, a jeśli 1,5 godziny - 150 zł.',
    hourSuffix: 'godz.',
    aftercareNote:
      'W cenie projektu są 3 miesiące bezpłatnych drobnych poprawek. Nowe podstrony, sekcje, funkcje, integracje i większe przebudowy są wyceniane osobno według powyższej stawki.',
    rows: {
      landing: {
        title: 'Jednostronicowa strona',
        body: 'Landing page dla jednej oferty albo prosta wizytówka firmy. Jedna strona, jeden główny cel, formularz lub kontakt.',
        details: ['Jedna strona', 'Jeden główny cel', 'Formularz lub kontakt'],
      },
      businessWebsite: {
        title: 'Strona firmowa',
        body: 'Kilka podstron dla firmy, która chce jasno pokazać ofertę, usługi, realizacje i sposób kontaktu.',
        details: ['Kilka podstron', 'Uporządkowana oferta', 'Kontakt i SEO techniczne'],
      },
      extendedWebsite: {
        title: 'Rozbudowana strona firmowa',
        body: 'Więcej treści, częste aktualizacje, CMS, integracje albo niestandardowe funkcje.',
        details: ['CMS lub częste aktualizacje', 'Integracje', 'Dodatkowa logika'],
      },
      system: {
        title: 'System webowy / CodeBros',
        body: 'Panel klienta, portal B2B, dashboard lub system wewnętrzny. Gdy rozwiązanie ma obsługiwać proces, dane i użytkowników.',
        details: ['Logowanie i role', 'Dane i procesy', 'Panel lub aplikacja'],
      },
      ai: {
        title: 'Automatyzacja procesu',
        body: 'Analiza powtarzalnej pracy i sprawdzenie, czy można ją uprościć albo wesprzeć AI.',
        details: ['Analiza procesu', 'Prototyp lub wdrożenie', 'AI tylko z konkretnym celem'],
      },
    },
    cta: 'Mam projekt - określmy zakres',
  },

  about: {
    label: 'O mnie',
    headline: ['Piszę kod zawodowo.', 'Tworzę rzeczy z pasji.'],
    pageHeadline: ['Jedna osoba', 'po drugiej stronie projektu.'],
    pageIntro:
      'Projektuję i buduję osobiście. Przy większych systemach pracuję z moim bratem, inżynierem Michałem Pawlikiem, jako CodeBros.',
    paragraphs: [
      'Nazywam się Wojciech Pawlik. Na co dzień pracuję przy systemach e-commerce w Univio. Po godzinach projektuję i buduję strony oraz produkty dla firm, które chcą czegoś bardziej dopasowanego niż gotowe rozwiązanie.',
      'Wcześniej pracowałem również jako inżynier AI, między innymi dla klienta ASML - jednej z największych firm technologicznych w Europie.',
      'Najbardziej interesuje mnie moment, w którym technologia, UX i realny problem firmy spotykają się w jednym produkcie.',
      'Interesuję się nowoczesnym webdesignem, animacjami, przejściami i detalami, które sprawiają, że strona żyje. Jestem kreatywny i mam zapał do próbowania nowych rzeczy, dlatego nie ma dla mnie zlecenia, którego się nie podejmę.',
    ],
    trustTitle: 'Doświadczenie',
    trust: {
      experience: { label: 'Doświadczenie', value: 'E-commerce, AI' },
      projects: { label: 'Realizacje', value: 'Strony, systemy rozproszone, systemy AI' },
      hobbies: { label: 'Hobby', value: 'Przedsiębiorczość, webdesign, sport' },
    },
    pageFocusTitle: 'Bez pośredników i przekazywania projektu.',
    pageFocusBody:
      'Rozmawiasz bezpośrednio z osobą, która projektuje i buduje rozwiązanie. Dzięki temu decyzje są krótsze, a odpowiedzialność za efekt pozostaje po jednej stronie.',
    mediaAlt: 'Portret Wojciecha Pawlika',
    mediaPending: 'Portret',
    cta: 'Poznaj mnie bliżej',
    pageCta: 'Opowiedz mi o projekcie',
    codebros: {
      label: 'CodeBros / Wojciech i Michał Pawlik',
      headline: ['Łączymy doświadczenie,', 'żeby budować większe systemy.'],
      intro:
        'CodeBros to nasze wspólne podejście do większych projektów. Łączymy projektowanie, frontend, backend i doświadczenie w systemach, dzięki czemu decyzje zapadają bezpośrednio między osobami, które budują produkt.',
      personLabel: 'Michał Pawlik',
      personTitle: 'Doświadczony programista',
      personBody:
        'Michał ma 10 lat doświadczenia w tworzeniu oprogramowania. Przez większość kariery rozwijał systemy bankowe w software house, a następnie pracował przy rozwiązaniach wykorzystujących AI. Obecnie, razem w Univio, tworzymy rozproszone systemy e-commerce dla jednego z dużych marketów.',
      benefitsTitle: 'Dlaczego pracujemy razem',
      benefits: [
        'Łączymy szerokie spojrzenie na produkt z doświadczeniem w tworzeniu złożonych systemów.',
        'Możemy szybciej podejmować decyzje, bo pracujemy bezpośrednio nad tym samym problemem.',
        'Dzielimy odpowiedzialność za architekturę, interfejs, implementację i wdrożenie.',
      ],
      mediaAlt: 'Michał Pawlik',
      mediaPending: 'Portret Michała Pawlika',
      teamMediaAlt: 'Wojciech i Michał Pawlik podczas konkursu CodeBros',
      teamMediaPending: 'Wojciech i Michał',
      projectsCta: 'Zobacz realizacje CodeBros',
    },
  },

  finalCta: {
    label: 'Zacznij projekt',
    headline: ['Masz coś', 'do zbudowania?'],
    body: 'Strona, system albo proces, który da się zrobić lepiej. Opowiedz mi, nad czym pracujesz.',
    cta: 'Opowiedz mi o projekcie',
  },

  contact: {
    pageTitle: 'Porozmawiaj o projekcie',
    pageHeadline: ['Porozmawiaj', 'o projekcie.'],
    pageIntro:
      'Opisz sytuację firmy, a wrócę z konkretnym kolejnym krokiem - nawet jeśli nie masz jeszcze gotowego zakresu.',
    label: 'Kontakt',
    headline: ['Opowiedz mi', 'o projekcie.'],
    intro:
      'Pięć krótkich pytań. Wystarczą, żebym mógł odpowiedzieć konkretnie, a nie „dziękujemy za kontakt”.',
    submit: 'Wyślij projekt',
    submitting: 'Wysyłam...',
    note: 'Bez zobowiązań.',
    successTitle: 'Dzięki.',
    successBody: 'Przeczytam opis i wrócę z konkretnym kolejnym krokiem.',
    errorTitle: 'Nie udało się wysłać.',
    errorBody: 'Spróbuj ponownie albo napisz do mnie bezpośrednio.',
    /**
     * TODO(brief): treść do weryfikacji prawnej przed publikacją - razem z polityką
     * prywatności i wskazaniem administratora danych (checklists/launch.md).
     */
    consent:
      'Zgadzam się na przetwarzanie moich danych w celu odpowiedzi na to zgłoszenie i kontaktu w sprawie projektu.',
    steps: {
      type: 'Czego potrzebujesz?',
      stage: 'Na jakim etapie jesteś?',
      budget: 'Orientacyjny budżet',
      brief: 'Opowiedz krótko o projekcie',
      contact: 'Kontakt',
    },
    fields: {
      name: 'Imię i nazwisko',
      email: 'E-mail',
      phone: 'Telefon',
      message: 'Projekt',
    },
    messagePlaceholder: 'Co mam zbudować, dla kogo i co powinno się zmienić dzięki projektowi?',
    /** Keys match PROJECT_TYPES in src/data/contact.ts. */
    types: {
      website: 'Strona internetowa',
      system: 'Aplikacja / system',
      ai: 'Automatyzacja AI',
      unsure: 'Jeszcze nie wiem',
    },
    /** Keys match PROJECT_STAGES. */
    stages: {
      scope: 'Mam gotowy zakres',
      idea: 'Mam pomysł',
      rebuild: 'Mam istniejące rozwiązanie',
      help: 'Potrzebuję pomocy z określeniem rozwiązania',
    },
    /** Keys match BUDGET_RANGES. */
    budgets: {
      '900-2000': '900–2 000 zł',
      '2000-5000': '2 000–5 000 zł',
      '5000-10000': '5 000–10 000 zł',
      '10000+': '10 000+ zł',
      unknown: 'Jeszcze nie wiem',
    },
  },

  footer: {
    navTitle: 'Strona',
    contactTitle: 'Kontakt',
    codebrosTitle: 'Większe projekty',
    codebrosLabel: 'CodeBros - Wojciech & Michał Pawlik',
    note: 'Designed & built by Wojciech Pawlik.',
    rights: 'Wszelkie prawa zastrzeżone.',
  },

  notFound: {
    label: '404',
    headline: 'Nie ma takiej strony.',
    body: 'Adres mógł się zmienić albo zawierać literówkę.',
    cta: 'Wróć na stronę główną',
  },

  errorPage: {
    label: 'Błąd',
    headline: 'Coś się nie wczytało.',
    body: 'Spróbuj ponownie. Jeżeli to nie pomoże, napisz do mnie - odpowiem.',
    cta: 'Spróbuj ponownie',
  },

  validation: {
    name: 'Podaj imię i nazwisko.',
    email: 'Podaj poprawny adres e-mail.',
    phone: 'Podaj numer telefonu (9 cyfr) albo zostaw to pole puste.',
    projectType: 'Wybierz, czego potrzebujesz.',
    stage: 'Wybierz etap projektu.',
    budget: 'Wybierz orientacyjny budżet - „jeszcze nie wiem” też jest odpowiedzią.',
    message: 'Napisz kilka zdań o projekcie.',
    consent: 'Zgoda jest potrzebna, żebym mógł odpowiedzieć.',
    maxLength: 'Maksymalnie {max} znaków.',
  },
}
