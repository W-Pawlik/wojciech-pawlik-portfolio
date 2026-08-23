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
      work: 'Realizacje',
      services: 'Usługi',
      about: 'O mnie',
    },
    cta: 'Opowiedz mi o projekcie',
    /** Shorter, because the mobile drawer CTA sits on its own line. */
    ctaMobile: 'Opowiedz mi o projekcie',
  },

  hero: {
    eyebrow: 'Web & Product Engineer / Kraków, PL',
    headline: ['Strony i systemy', 'dopasowane do biznesu.', 'Nie do szablonu.'],
    body: 'Projektuję i buduję customowe strony, aplikacje webowe i rozwiązania AI dla firm, które potrzebują czegoś więcej niż gotowego template’u.',
    ctaPrimary: 'Opowiedz mi o projekcie',
    ctaSecondary: 'Zobacz realizacje',
    availability: 'Available for select projects',
    year: '2026 / PL',
    trustLine: 'Ecommerce engineering / custom web / AI automation',
  },

  approach: {
    label: 'Approach',
    headline: ['Nie zaczynam', 'od technologii.'],
    body: 'Najpierw poznaję firmę, jej klientów i problem, który projekt ma rozwiązać. Dopiero później wybieram strukturę, design i technologię.',
    principles: {
      businessFirst: {
        title: 'Business first',
        body: 'Projekt zaczyna się od celu biznesowego.',
      },
      customByDefault: {
        title: 'Custom by default',
        body: 'Nie dopasowuję firmy do gotowego szablonu.',
      },
      builtToShip: {
        title: 'Built to ship',
        body: 'Design od początku uwzględnia realną implementację i wdrożenie.',
      },
    },
  },

  work: {
    label: 'Selected work',
    headline: ['Wybrane realizacje'],
    intro:
      'Kilka projektów, w których design, technologia i realny problem biznesowy spotykają się w jednym miejscu.',
    /** Mono metadata above a project title. Keys match PROJECT_TAGS. */
    tags: {
      webApp: 'Web application',
      productDesign: 'Product design',
      fullStack: 'Full-stack',
      internalSystem: 'System wewnętrzny',
      riskScoring: 'Ocena ryzyka',
    },
    teamCodebros: 'CodeBros',
    caseCta: 'Zobacz case study',
    /** Shown instead of a link while the case study is not written. */
    casePending: 'Case study / w przygotowaniu',
    /** Placeholder frame label until the screenshots exist. */
    mediaPending: 'Screenshot produktu',
    projects: {
      planik: {
        title: 'Planik',
        description:
          'Kompleksowa aplikacja do planowania wydarzeń, zaprojektowana i zbudowana od zera przez dwóch developerów.',
      },
      creditRisk: {
        title: 'Credit Risk System',
        description:
          'System wspierający ocenę ryzyka przy udzielaniu kredytów kupieckich. Zbudowany na konkurs organizowany przez Univio — wygraliśmy go, jeszcze zanim tam pracowaliśmy.',
      },
    },
  },

  services: {
    label: 'Services',
    headline: ['Od strony firmowej', 'po pełny system.'],
    intro:
      'Zakres projektu może być mały albo bardzo duży. Ważne, żeby rozwiązanie pasowało do problemu.',
    includesTitle: 'W zakresie',
    items: {
      websites: {
        title: 'Websites',
        body: 'Customowe strony dla firm, które chcą wyglądać tak profesjonalnie, jak działają.',
        cta: 'Poznaj zakres',
        includes: [
          'strony firmowe',
          'landing pages',
          'CMS',
          'integracje',
          'custom UI',
          'performance',
          'responsive',
          'analytics',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Aplikacje i systemy webowe dla procesów, których nie da się sensownie obsłużyć gotowym narzędziem.',
        cta: 'Zobacz CodeBros',
        includes: [],
      },
      ai: {
        title: 'AI Automation',
        body: 'Automatyzacja powtarzalnej pracy tam, gdzie AI rzeczywiście może oszczędzać czas.',
        cta: 'Sprawdź możliwości',
        includes: [],
      },
    },
  },

  codebrosTransition: {
    trace: 'System mode / 04',
    intro: 'Kiedy projekt staje się większy niż typowa strona, nie przekazuję go dalej.',
    headline: ['Wchodzimy we dwóch.'],
    brand: 'CodeBros',
    sub: 'Wojciech & Michał Pawlik',
  },

  codebros: {
    label: 'CodeBros / Custom systems',
    headline: ['Dwie osoby.', 'Pełny proces.'],
    body: 'Przy większych aplikacjach pracuję razem z Michałem. Bez warstwy account managerów i przekazywania projektu między zespołami. Od architektury i backendu po frontend i wdrożenie pracujemy nad produktem bezpośrednio.',
    claim: 'From problem to production.',
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
    mediaPending: 'Wojciech i Michał',
  },

  ai: {
    label: 'AI automation',
    headline: ['AI tam, gdzie', 'faktycznie oszczędza pracę.'],
    body: 'Nie zaczynam od pytania „gdzie możemy dodać AI?”. Zaczynam od procesu, który zabiera zespołowi czas.',
    flowTitle: 'Jak to wygląda',
    flow: {
      repetitiveWork: 'Repetitive work',
      processAnalysis: 'Process analysis',
      prototype: 'Prototype',
      automation: 'Automation',
      measure: 'Measure',
    },
    useCasesTitle: 'Gdzie to działa',
    useCases: {
      documents: {
        title: 'Documents',
        body: 'Analiza, klasyfikacja i ekstrakcja danych.',
      },
      knowledge: {
        title: 'Knowledge',
        body: 'Wyszukiwanie informacji w wewnętrznych źródłach.',
      },
      operations: {
        title: 'Operations',
        body: 'Automatyzacja powtarzalnych etapów workflow.',
      },
      support: {
        title: 'Customer support',
        body: 'Wsparcie obsługi w oparciu o wiedzę firmy.',
      },
    },
    cta: 'Porozmawiajmy o procesie',
  },

  process: {
    label: 'Process',
    headline: ['Najpierw decyzje.', 'Potem kod.'],
    intro: 'Dzięki temu development nie jest jednocześnie chaotycznym projektowaniem produktu.',
    steps: {
      understand: {
        title: 'Understand',
        body: 'Poznaję biznes, klientów, ofertę i problem.',
      },
      define: {
        title: 'Define',
        body: 'Ustalamy zakres, cele i najważniejsze decyzje.',
      },
      design: {
        title: 'Design',
        body: 'Powstaje struktura, UX i kierunek wizualny.',
      },
      build: {
        title: 'Build',
        body: 'Dopiero wtedy rozpoczyna się implementacja.',
      },
      review: {
        title: 'Review',
        body: 'Oglądamy działający produkt i zbieramy feedback.',
      },
      refine: {
        title: 'Refine',
        body: 'Dopracowuję detale, responsive i interakcje.',
      },
      launch: {
        title: 'Launch',
        body: 'Testy, wdrożenie i przekazanie projektu.',
      },
    },
  },

  pricing: {
    label: 'Investment',
    headline: ['Ile kosztuje dobry web?'],
    intro:
      'Każdy projekt wyceniam indywidualnie, ale nie chcę, żeby budżet był tajemnicą do pierwszego calla.',
    /** Marks a bracket whose upper bound is soft: `15 000–30 000+ zł`. */
    plusSuffix: '+',
    rows: {
      website: {
        title: 'Business website',
        body: 'Dopracowana strona firmowa lub usługowa.',
      },
      websiteCms: {
        title: 'Website + CMS',
        body: 'Więcej treści, panel do jej edycji, customowe komponenty.',
      },
      advanced: {
        title: 'Advanced web',
        body: 'Nietypowy UX, konfiguratory, integracje, rozbudowany motion.',
      },
      system: {
        title: 'Custom system / CodeBros',
        body: 'Logowanie, role, dane, procesy, backend, integracje.',
      },
      ai: {
        title: 'AI prototype',
        body: 'Analiza procesu i działający prototyp na realnych danych.',
      },
    },
    cta: 'Mam projekt — sprawdźmy zakres',
  },

  about: {
    label: 'About',
    headline: ['Piszę kod zawodowo.', 'Tworzę rzeczy z pasji.'],
    paragraphs: [
      'Jestem Wojciech Pawlik. Na co dzień pracuję przy systemach e-commerce w Univio. Po godzinach projektuję i buduję strony oraz produkty dla firm, które chcą czegoś bardziej dopasowanego niż gotowe rozwiązanie.',
      'Wcześniej pracowałem również jako AI Engineer, gdzie tworzyłem rozwiązania wykorzystujące AI do usprawniania procesów biznesowych.',
      'Najbardziej interesuje mnie moment, w którym technologia, UX i realny problem firmy spotykają się w jednym produkcie.',
    ],
    trustTitle: 'Doświadczenie',
    trust: {
      professional: { label: 'Professional', value: 'Ecommerce engineering' },
      aiExperience: { label: 'Experience', value: 'AI engineering' },
      builds: { label: 'Selected builds', value: 'Web + product' },
      teamMode: { label: 'Team mode', value: 'CodeBros' },
    },
    mediaPending: 'Portret',
  },

  finalCta: {
    label: 'Start a project',
    headline: ['Masz coś', 'do zbudowania?'],
    body: 'Strona, system albo proces, który da się zrobić lepiej. Opowiedz mi, nad czym pracujesz.',
    cta: 'Opowiedz mi o projekcie',
  },

  contact: {
    label: 'Contact',
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
    messagePlaceholder: 'Co budujemy, dla kogo i co powinno się zmienić dzięki projektowi?',
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
