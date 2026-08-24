/**
 * Main-language copy. This file **defines the dictionary shape** — every other locale is
 * typed against it, so a key added here and forgotten elsewhere is a compile error.
 *
 * Source: the UX/wireframe brief (.agents/specs/01-home.md) and the approved phrase bank
 * (.agents/10-brand-strategy.md#bank-haseł). Nothing here is invented — no counts, no
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
    title: 'Wojciech Pawlik — Web & Product Engineer',
    description:
      'Projektuję i buduję customowe strony, aplikacje webowe i automatyzacje AI dla firm, które potrzebują czegoś więcej niż gotowego szablonu.',
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
    /** Shorter, because the mobile drawer CTA sits on its own line. */
    ctaMobile: 'Opowiedz mi o projekcie',
  },

  hero: {
    headline: ['Strony i systemy', 'dopasowane do biznesu.', 'Nie do szablonu.'],
    body: 'Projektuję i buduję dedykowane strony, aplikacje webowe i rozwiązania AI dla firm, które potrzebują czegoś więcej niż gotowego szablonu.',
    ctaPrimary: 'Opowiedz mi o projekcie',
    ctaSecondary: 'Zobacz realizacje',
  },

  approach: {
    label: 'Podejście',
    headline: ['Nie zaczynam', 'od technologii.'],
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
      productDesign: 'Projektowanie produktu',
      fullStack: 'Frontend i backend',
      internalSystem: 'System wewnętrzny',
      riskScoring: 'Ocena ryzyka',
    },
    teamCodebros: 'CodeBros',
    teamSolo: 'Projekt indywidualny',
    projectLabel: 'PROJEKT',
    caseStudyCta: 'Zobacz case study',
    liveCta: 'Wersja online',
    allProjectsCta: 'Zobacz wszystkie realizacje',
    visualization: 'Wizualizacja układu — tymczasowe zdjęcie',
    details: {
      toggle: 'Projekt w skrócie',
      projectLabel: 'Projekt',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      whyLabel: 'Dlaczego tak',
    },
    projects: {
      mawAuto: {
        title: 'Maw Autoserwis',
        description: 'Strona internetowa dla Maw Autoserwis.',
        details: {
          project: 'Strona firmowa i prezentacja usług.',
          problem: 'Zakres usług potrzebował prostego, czytelnego uporządkowania.',
          solution: 'Strona prowadzi od najważniejszych informacji do kontaktu.',
          why: 'Priorytetem była szybka orientacja, nie przeładowanie ofertą.',
        },
      },
      agnieszkaLuzarska: {
        title: 'Agnieszka Luzarska',
        description: 'Strona internetowa Agnieszki Luzarskiej.',
        details: {
          project: 'Osobista strona internetowa i prezentacja oferty.',
          problem: 'Informacje o marce potrzebowały spokojnej, spójnej hierarchii.',
          solution: 'Układ porządkuje treść i prowadzi użytkownika przez ofertę.',
          why: 'Forma miała budować zaufanie bez typowego szablonu usługowego.',
        },
      },
      vantaDetailing: {
        title: 'Vanta Detailing',
        description: 'Strona internetowa dla Vanta — detailingu samochodowego.',
        details: {
          project: 'Strona usługowa dla detailingu samochodowego.',
          problem: 'Jakość pracy wymagała mocnej prezentacji jeszcze przed kontaktem.',
          solution: 'Wizualny układ łączy ofertę z prezentacją efektów usługi.',
          why: 'Obraz i rytm strony mają od razu komunikować precyzję wykonania.',
        },
      },
      planik: {
        title: 'Planik',
        description:
          'Kompleksowa aplikacja do planowania wydarzeń, zaprojektowana i zbudowana od zera przez dwóch twórców.',
        details: {
          project: 'Aplikacja do planowania wydarzeń od modelu danych po interfejs.',
          problem: 'Planowanie wymagało połączenia wielu informacji i decyzji w jednym miejscu.',
          solution: 'Powstał spójny przepływ, który prowadzi użytkownika przez cały proces.',
          why: 'Zamiast kolejnego formularza potrzebny był produkt dopasowany do realnego procesu.',
        },
      },
      creditRisk: {
        title: 'Credit Risk System',
        description:
          'System wspierający ocenę ryzyka przy udzielaniu kredytów kupieckich. Zbudowany na konkurs organizowany przez Univio — wygraliśmy go, jeszcze zanim tam pracowaliśmy.',
        details: {
          project: 'System wspierający ocenę ryzyka przy kredycie kupieckim.',
          problem: 'Decyzja wymagała zebrania i uporządkowania danych o ryzyku.',
          solution: 'Interfejs prowadzi od informacji do czytelnej oceny i decyzji.',
          why: 'Najważniejsza była klarowność procesu, a nie sama ilość danych.',
        },
      },
    },
  },

  caseStudies: {
    mawAuto: {
      label: 'Case study / Maw Autoserwis',
      title: 'Maw Autoserwis',
      categories: 'Strona internetowa / Projektowanie produktu',
      statement: 'Strona internetowa dla Maw Autoserwis.',
      meta: {
        role: { label: 'Rola', value: 'Projektowanie stron / frontend' },
        team: { label: 'Zespół', value: 'Wojciech / projekt indywidualny' },
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: { title: 'Co zbudowałem?', body: 'Stronę firmową dla Maw Autoserwis.' },
      problem: {
        title: 'Problem',
        body: 'Oferta serwisu potrzebowała czytelnej prezentacji online.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Powstała strona skupiona na usługach i prostym przejściu do kontaktu.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Ułożyć informacje tak, aby użytkownik szybko znalazł właściwą usługę.',
      },
      role: {
        title: 'Moja rola',
        body: 'Projekt i wdrożenie wykonałem samodzielnie.',
        items: ['Projektowanie stron', 'Frontend', 'Responsywne wdrożenie'],
      },
      result: { title: 'Rezultat', body: 'Gotowa strona internetowa dla Maw Autoserwis.' },
      galleryLabel: 'Galeria strony / tymczasowe wizualizacje',
      nextLabel: 'Następna realizacja',
      contactCta: 'Porozmawiaj o podobnej stronie',
    },
    agnieszkaLuzarska: {
      label: 'Case study / Agnieszka Luzarska',
      title: 'Agnieszka Luzarska',
      categories: 'Strona internetowa / Projektowanie produktu',
      statement: 'Strona internetowa Agnieszki Luzarskiej.',
      meta: {
        role: { label: 'Rola', value: 'Projektowanie stron / frontend' },
        team: { label: 'Zespół', value: 'Wojciech / projekt indywidualny' },
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co zbudowałem?',
        body: 'Osobistą stronę internetową Agnieszki Luzarskiej.',
      },
      problem: {
        title: 'Problem',
        body: 'Oferta osobistej marki potrzebowała spokojnej i czytelnej prezentacji.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Strona porządkuje informacje i prowadzi użytkownika przez ofertę.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Zbudować układ, który pozostaje osobisty i czytelny na każdym ekranie.',
      },
      role: {
        title: 'Moja rola',
        body: 'Projekt i wdrożenie wykonałem samodzielnie.',
        items: ['Projektowanie stron', 'Frontend', 'Responsywne wdrożenie'],
      },
      result: { title: 'Rezultat', body: 'Gotowa strona internetowa Agnieszki Luzarskiej.' },
      galleryLabel: 'Galeria strony / tymczasowe wizualizacje',
      nextLabel: 'Następna realizacja',
      contactCta: 'Porozmawiaj o podobnej stronie',
    },
    vantaDetailing: {
      label: 'Case study / Vanta Detailing',
      title: 'Vanta Detailing',
      categories: 'Strona internetowa / Projektowanie produktu',
      statement: 'Strona internetowa dla Vanta — detailingu samochodowego.',
      meta: {
        role: { label: 'Rola', value: 'Projektowanie stron / frontend' },
        team: { label: 'Zespół', value: 'Wojciech / projekt indywidualny' },
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: { title: 'Co zbudowałem?', body: 'Stronę usługową dla Vanta Detailing.' },
      problem: {
        title: 'Problem',
        body: 'Jakość usługi detailingowej potrzebowała mocnej prezentacji wizualnej.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Strona łączy prezentację usług z wizualnym pokazaniem efektu pracy.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Zaprojektować doświadczenie, które buduje zaufanie przed pierwszym kontaktem.',
      },
      role: {
        title: 'Moja rola',
        body: 'Projekt i wdrożenie wykonałem samodzielnie.',
        items: ['Projektowanie stron', 'Frontend', 'Responsywne wdrożenie'],
      },
      result: { title: 'Rezultat', body: 'Gotowa strona internetowa dla Vanta Detailing.' },
      galleryLabel: 'Galeria strony / tymczasowe wizualizacje',
      nextLabel: 'Następna realizacja',
      contactCta: 'Porozmawiaj o podobnej stronie',
    },
    planik: {
      label: 'Case study / Planik',
      title: 'Planik',
      categories: 'Aplikacja webowa / Projektowanie produktu / Frontend i backend',
      statement:
        'Aplikacja do planowania wydarzeń zaprojektowana i zbudowana od podstaw przez CodeBros.',
      meta: {
        role: { label: 'Rola', value: 'Projektowanie produktu / frontend i backend' },
        team: { label: 'Zespół', value: 'Wojciech + Michał / CodeBros' },
        status: { label: 'Status', value: 'Projekt zrealizowany' },
      },
      context: {
        title: 'Co budowaliśmy?',
        body: 'Planik to kompleksowa aplikacja do planowania wydarzeń. Zaprojektowaliśmy i zbudowaliśmy ją od zera jako dwuosobowy zespół.',
      },
      problem: {
        title: 'Problem',
        body: 'Punktem wyjścia był proces planowania wydarzenia, który wymagał połączenia wielu informacji i decyzji w jednym produkcie.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Rozwiązanie połączyło model danych, interfejs i logikę aplikacji w jeden spójny przepływ do planowania wydarzeń.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Najważniejsze było przełożenie złożonego procesu na strukturę, którą da się rozwijać bez rozdzielania doświadczenia użytkownika od implementacji.',
      },
      role: {
        title: 'Moja rola',
        body: 'Projekt realizowany razem z Michałem Pawlikiem jako CodeBros.',
        items: ['Myślenie produktowe', 'UX i UI', 'Frontend', 'Backend', 'Model danych'],
      },
      result: {
        title: 'Rezultat',
        body: 'Powstała kompletna aplikacja do planowania wydarzeń — od modelu danych po interfejs.',
      },
      galleryLabel: 'Galeria produktu / tymczasowe wizualizacje',
      nextLabel: 'Następna realizacja',
      contactCta: 'Porozmawiaj o podobnym projekcie',
    },
    creditRisk: {
      label: 'Case study / Credit Risk System',
      title: 'Credit Risk System',
      categories: 'System wewnętrzny / Ocena ryzyka / Frontend i backend',
      statement: 'System wspierający ocenę ryzyka przy udzielaniu kredytów kupieckich.',
      meta: {
        role: { label: 'Rola', value: 'Projektowanie produktu / frontend i backend' },
        team: { label: 'Zespół', value: 'Wojciech + Michał / CodeBros' },
        status: { label: 'Status', value: 'Projekt konkursowy' },
      },
      context: {
        title: 'Co budowaliśmy?',
        body: 'Zbudowaliśmy system wspierający ocenę ryzyka przy udzielaniu kredytów kupieckich.',
      },
      problem: {
        title: 'Problem',
        body: 'Decyzja kredytowa wymagała zebrania i uporządkowania informacji o ryzyku w jednym miejscu.',
      },
      solution: {
        title: 'Rozwiązanie',
        body: 'Powstał system, który wspiera ocenę ryzyka i porządkuje ten proces w interfejsie dla użytkownika.',
      },
      challenge: {
        title: 'Wyzwanie techniczne',
        body: 'Wyzwaniem było zamienić proces oceny ryzyka w czytelną strukturę, która pomaga przejść od danych do decyzji.',
      },
      role: {
        title: 'Moja rola',
        body: 'Projekt realizowany razem z Michałem Pawlikiem jako CodeBros.',
        items: ['Myślenie produktowe', 'UX i UI', 'Frontend', 'Backend', 'Logika biznesowa'],
      },
      result: {
        title: 'Rezultat',
        body: 'Projekt wygrał konkurs organizowany przez Univio, jeszcze zanim pracowaliśmy tam zawodowo.',
      },
      galleryLabel: 'Galeria systemu / tymczasowe wizualizacje',
      nextLabel: 'Następna realizacja',
      contactCta: 'Porozmawiaj o podobnym projekcie',
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
    intro:
      'Najpierw porządkuję problem i cel. Dopiero potem dobieram zakres i technologię, żeby zbudować rozwiązanie potrzebne firmie — bez dokładania funkcji na zapas.',
    items: {
      websites: {
        title: 'Strony internetowe',
        body: 'Strony wizytówkowe, firmowe i landing page’e tworzone od podstaw w kodzie, bez WordPressa i gotowych builderów. W ten sam proces mogę włączyć branding firmy, logo i kierunek wizualny.',
        cta: 'Poznaj zakres',
        includes: [
          'strony firmowe',
          'landing page',
          'CMS',
          'integracje',
          'dedykowany interfejs',
          'branding i logo',
          'wydajność',
          'responsywność',
          'analityka',
          'SEO techniczne',
          'wielojęzyczność',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Dedykowane aplikacje, panele, portale i systemy wewnętrzne dopasowane do procesu firmy. Przy większych projektach pracuję z moim bratem Michałem jako CodeBros.',
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
      mediaAlt: 'Widok strony internetowej Vanta Detailing',
      mediaLabel: 'Przykład interfejsu strony',
      problemTitle: 'Dla jakiego problemu?',
      problem:
        'Gdy firma ma dobrą usługę, ale obecna strona nie pokazuje jej jakości albo utrudnia klientowi wykonanie następnego kroku.',
      benefitsTitle: 'Co dobra strona zmienia w firmie',
      benefits: [
        'Klient szybciej rozumie, czym się zajmujesz i dla kogo pracujesz.',
        'Oferta ma hierarchię, która prowadzi od pierwszego wrażenia do kontaktu.',
        'Strona wygląda jak Twoja firma, a nie jak kolejna wersja tego samego szablonu.',
      ],
      scopeTitle: 'Co mogę dla ciebie zrobić',
      scope: [
        'Strona firmowa',
        'Landing page',
        'Strona bez CMS albo z CMS-em',
        'Formularze, integracje i analityka',
        'Responsywność, animacje i interakcje',
        'Branding firmy, logo i kierunek wizualny',
        'SEO techniczne i wielojęzyczność',
        'Domena, hosting, SSL, DNS i wdrożenie',
      ],
      processTitle: 'Jak pracuję nad stroną',
      process: [
        'Porządkuję ofertę, odbiorców i najważniejszy cel strony. Jeśli trzeba, projektuję też branding i logo.',
        'Projektuję strukturę i interfejs, który wspiera ten cel.',
        'Wdrażam stronę, testuję ją na różnych ekranach i przygotowuję do publikacji.',
      ],
      investmentTitle: 'Wycena po krótkiej rozmowie',
      investment:
        'W cenniku pokazuję, od jakich kwot zaczynam wycenę. Po krótkiej rozmowie jestem w stanie przedstawić bardziej szczegółową wycenę. Branding, logo i SEO mogą wejść w ten sam zakres — uwzględniam je w procesie i cenie projektu.',
      fitTitle: 'Kiedy warto porozmawiać',
      fit: 'Kiedy chcesz stronę dopasowaną do firmy, a nie firmę dopasowaną do gotowego motywu.',
      pricingCta: 'Zobacz orientacyjny cennik',
      contactCta: 'Opowiedz mi o projekcie',
    },
    systems: {
      title: 'Custom Systems',
      intro:
        'Projektuję i buduję dedykowane systemy webowe — zarówno do usprawniania działania firmy, jak i aplikacje tworzone na zlecenie, gdy firma ma konkretny pomysł albo potrzebę.',
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
      pricingCta: 'Zobacz poziomy inwestycji',
      contactCta: 'Opowiedz o procesie',
    },
    ai: {
      title: 'Automatyzacja AI',
      intro:
        'Szukam procesu, który zabiera zespołowi czas — dopiero potem sprawdzam, czy AI może go uprościć.',
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
      pricingCta: 'Zobacz poziomy inwestycji',
      contactCta: 'Opowiedz o procesie',
    },
  },

  codebrosTransition: {
    trace: 'Tryb systemowy / 04',
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
        body: 'Kompletną aplikację do planowania eventów zaprojektowaliśmy i zbudowaliśmy we dwóch — od modelu danych po interfejs.',
      },
    },
    mediaAlt: 'Wojciech i Michał Pawlik podczas konkursu CodeBros',
    mediaPending: 'Wojciech i Michał',
  },

  ai: {
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
    label: 'Proces',
    headline: ['Najpierw decyzje.', 'Potem kod.'],
    intro:
      'Każdy etap kończy się konkretnym rezultatem. Dzięki temu zanim zacznę budowę, wiem już co buduję, dla kogo i dlaczego.',
    locked: 'Decyzje zamknięte → zaczynam budowę',
    phases: {
      direction: {
        label: 'Kierunek',
        title: 'Od problemu do konkretnego kierunku.',
        statement: 'Poznaję kontekst, wybieram priorytety i zamieniam pomysł w plan produktu.',
        outputLabel: 'Rezultat',
        output: 'Kierunek projektu',
        outputDetail: 'UX / struktura / kierunek wizualny',
      },
      production: {
        label: 'Budowa',
        title: 'Kierunek zamieniam w działający produkt.',
        statement:
          'Zatwierdzone decyzje przechodzą w implementację, którą można realnie sprawdzić.',
        outputLabel: 'Rezultat',
        output: 'Działający produkt',
        outputDetail: 'Działająca wersja do wspólnego przeglądu',
      },
      release: {
        label: 'Wdrożenie',
        title: 'Nie kończę na „już działa”.',
        statement:
          'Dopracowuję doświadczenie, sprawdzam szczegóły i przygotowuję produkt do wdrożenia.',
        outputLabel: 'Rezultat',
        output: 'Gotowe do wdrożenia',
        outputDetail: 'Responsywność / interakcje / testy / wdrożenie',
      },
    },
    steps: {
      understand: {
        title: 'Poznaję',
        body: 'Poznaję biznes, klientów, ofertę i problem.',
      },
      define: {
        title: 'Ustalam',
        body: 'Ustalam zakres, cele i najważniejsze decyzje.',
      },
      design: {
        title: 'Projektuję',
        body: 'Powstaje struktura, UX i kierunek wizualny.',
      },
      build: {
        title: 'Buduję',
        body: 'Dopiero wtedy rozpoczyna się implementacja.',
      },
      review: {
        title: 'Sprawdzam',
        body: 'Oglądam działający produkt i zbieram informacje zwrotne.',
      },
      refine: {
        title: 'Dopracowuję',
        body: 'Dopracowuję detale, responsywność i interakcje.',
      },
      launch: {
        title: 'Wdrażam',
        body: 'Testy, wdrożenie i przekazanie projektu.',
      },
    },
  },

  pricing: {
    label: 'Wycena',
    headline: ['Zacznij od zakresu,', 'nie od dużego budżetu.'],
    pageHeadline: ['Najpierw zakres.', 'Potem wycena.'],
    pageIntro:
      'Podaję orientacyjne poziomy inwestycji, żeby łatwiej było ocenić dopasowanie. Ostateczna wycena zależy od problemu, zakresu i potrzebnych integracji.',
    minimumRateNote:
      'Podane kwoty są najniższą stawką, od której zaczynam wycenę. Aktualna promocja z okazji rozpoczęcia działalności: pierwszych 3 klientów może otrzymać landing page wyceniony od 900 zł zamiast standardowych 1 200 zł.',
    intro:
      'Nie sprzedaję największego możliwego rozwiązania. Zakres, termin i cena zależą od problemu, treści, liczby podstron, integracji i potrzebnej logiki. Przy konkretnym terminie mogę zaproponować tryb priorytetowy za dodatkową opłatą, jeśli data jest realna.',
    /** Marks a bracket whose upper bound is soft: `15 000–30 000+ zł`. */
    plusSuffix: '+',
    quote: 'Wycena indywidualna',
    aftercareLabel: 'Po wdrożeniu',
    aftercareTitle: 'Produkt jest Twój.',
    aftercareBody:
      'Po zakończeniu i rozliczeniu projektu otrzymujesz stworzoną stronę, aplikację, system lub logikę. Możesz utrzymywać je samodzielnie, przekazać innej osobie albo zlecić mi dalszy rozwój.',
    maintenanceLabel: 'Opcjonalne utrzymanie',
    maintenanceLimit: 'do',
    maintenancePeriod: 'miesięcznie',
    maintenanceBody:
      'Domena, hosting, monitoring, drobne naprawy i reakcja na problemy. Maksymalny koszt to 150 zł miesięcznie.',
    aftercareNote:
      'W cenie projektu są 3 miesiące bezpłatnych drobnych poprawek. Nie obejmują nowych podstron, funkcji, integracji, większej przebudowy ani regularnej wymiany treści. Aktualizacje treści mogę wykonywać za 70 zł za godzinę, minimum 50 zł za zlecenie.',
    rows: {
      landing: {
        title: 'Landing page / prosta wizytówka',
        body: 'Niewielka strona dopasowana do firmy. Termin może wynieść około 3 dni roboczych albo 1–2 tygodni — zależnie od zakresu.',
      },
      websiteCms: {
        title: 'Strona + CMS',
        body: 'CMS headless albo dedykowany panel, gdy trzeba regularnie zarządzać treścią lub procesem firmy.',
      },
      advanced: {
        title: 'Customowa strona internetowa',
        body: 'Strona firmowa lub usługowa projektowana od podstaw. Może obejmować branding, logo, SEO, konfiguratory, rozbudowaną logikę, integracje i dodatkowe wymagania biznesowe.',
      },
      system: {
        title: 'Dedykowany system / CodeBros',
        body: 'Panel klienta, portal B2B, obieg pracy, panel operacyjny, aplikacja lub system wewnętrzny. Termin i cena indywidualnie.',
      },
      ai: {
        title: 'Prototyp AI',
        body: 'Najpierw analiza procesu, potem prototyp lub wdrożenie. AI tylko wtedy, gdy rozwiązuje konkretny problem.',
      },
    },
    cta: 'Mam projekt — określmy zakres',
  },

  about: {
    label: 'O mnie',
    headline: ['Piszę kod zawodowo.', 'Tworzę rzeczy z pasji.'],
    pageHeadline: ['Jedna osoba', 'po drugiej stronie projektu.'],
    pageIntro:
      'Projektuję i buduję osobiście. Przy większych systemach pracuję z moim bratem Michałem jako CodeBros.',
    paragraphs: [
      'Jestem Wojciech Pawlik. Na co dzień pracuję przy systemach e-commerce w Univio. Po godzinach projektuję i buduję strony oraz produkty dla firm, które chcą czegoś bardziej dopasowanego niż gotowe rozwiązanie.',
      'Wcześniej pracowałem również jako inżynier AI, między innymi dla klienta ASML — jednej z największych firm technologicznych w Europie.',
      'Najbardziej interesuje mnie moment, w którym technologia, UX i realny problem firmy spotykają się w jednym produkcie.',
    ],
    trustTitle: 'Doświadczenie',
    trust: {
      professional: { label: 'Doświadczenie', value: 'Systemy e-commerce' },
      aiExperience: { label: 'Specjalizacja', value: 'Inżynieria AI' },
      builds: { label: 'Realizacje', value: 'Strony i produkty' },
      teamMode: { label: 'Praca zespołowa', value: 'CodeBros' },
    },
    pageFocusTitle: 'Bez pośredników i przekazywania projektu.',
    pageFocusBody:
      'Rozmawiasz bezpośrednio z osobą, która projektuje i buduje rozwiązanie. Dzięki temu decyzje są krótsze, a odpowiedzialność za efekt pozostaje po jednej stronie.',
    mediaAlt: 'Portret Wojciecha Pawlika',
    mediaPending: 'Portret',
    cta: 'Poznaj mnie bliżej',
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
      'Opisz sytuację firmy, a wrócę z konkretnym kolejnym krokiem — nawet jeśli nie masz jeszcze gotowego zakresu.',
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
     * TODO(brief): treść do weryfikacji prawnej przed publikacją — razem z polityką
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
      '5-10k': '5–10k PLN',
      '10-20k': '10–20k PLN',
      '20-40k': '20–40k PLN',
      '40k+': '40k+ PLN',
      unknown: 'Jeszcze nie wiem',
    },
  },

  footer: {
    navTitle: 'Strona',
    contactTitle: 'Kontakt',
    codebrosTitle: 'Większe projekty',
    codebrosLabel: 'CodeBros — Wojciech & Michał Pawlik',
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
    body: 'Spróbuj ponownie. Jeżeli to nie pomoże, napisz do mnie — odpowiem.',
    cta: 'Spróbuj ponownie',
  },

  validation: {
    name: 'Podaj imię i nazwisko.',
    email: 'Podaj poprawny adres e-mail.',
    phone: 'Podaj numer telefonu (9 cyfr) albo zostaw to pole puste.',
    projectType: 'Wybierz, czego potrzebujesz.',
    stage: 'Wybierz etap projektu.',
    budget: 'Wybierz orientacyjny budżet — „jeszcze nie wiem” też jest odpowiedzią.',
    message: 'Napisz kilka zdań o projekcie.',
    consent: 'Zgoda jest potrzebna, żebym mógł odpowiedzieć.',
    maxLength: 'Maksymalnie {max} znaków.',
  },
}
