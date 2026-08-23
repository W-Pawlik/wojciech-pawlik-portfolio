import type { Dictionary } from '../dictionaries'

/**
 * English copy. Typed against the Polish dictionary, so a key added there and missing
 * here is a compile error.
 *
 * TODO(brief): the language decision (`pl` only vs `pl + en`) is still open
 * (.agents/00-project-brief.md#czego-brakuje--pytania-do-właściciela). This is a faithful
 * translation of the approved Polish copy, not separately approved copy — if English
 * stays, it needs one editorial pass by the owner. If it goes, delete this file and the
 * locale in `src/i18n/config.ts` (ADR-0003).
 */
export const en: Dictionary = {
  meta: {
    title: 'Wojciech Pawlik — Web & Product Engineer',
    description:
      'I design and build custom websites, web applications and AI automation for companies that need more than an off-the-shelf template.',
  },

  common: {
    skipToContent: 'Skip to content',
    from: 'from',
    to: '–',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    openingHours: 'Opening hours',
    languageSwitcher: 'Change language',
    optional: 'optional',
  },

  nav: {
    openMenu: 'Menu',
    closeMenu: 'Close',
    items: {
      work: 'Work',
      services: 'Services',
      about: 'About',
    },
    cta: 'Tell me about your project',
    ctaMobile: 'Start a project',
  },

  hero: {
    eyebrow: 'Web & Product Engineer / Kraków, PL',
    headline: ['Websites and systems', 'built around the business.', 'Not around a template.'],
    body: 'I design and build custom websites, web applications and AI solutions for companies that need more than an off-the-shelf template.',
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: 'See selected work',
    availability: 'Available for select projects',
    year: '2026 / PL',
    trustLine: 'Ecommerce engineering / custom web / AI automation',
  },

  approach: {
    label: 'Approach',
    headline: ['I do not start', 'with technology.'],
    body: 'First I get to know the company, its clients and the problem the project has to solve. Only then do I choose the structure, the design and the technology.',
    principles: {
      businessFirst: {
        title: 'Business first',
        body: 'A project starts from a business goal.',
      },
      customByDefault: {
        title: 'Custom by default',
        body: 'I do not fit a company into a ready-made template.',
      },
      builtToShip: {
        title: 'Built to ship',
        body: 'The design accounts for real implementation and deployment from day one.',
      },
    },
  },

  work: {
    label: 'Selected work',
    headline: ['Selected work'],
    intro: 'A few projects where design, technology and a real business problem meet in one place.',
    tags: {
      webApp: 'Web application',
      productDesign: 'Product design',
      fullStack: 'Full-stack',
      internalSystem: 'Internal system',
      riskScoring: 'Risk scoring',
    },
    teamCodebros: 'CodeBros',
    caseCta: 'Read the case study',
    casePending: 'Case study / in preparation',
    mediaPending: 'Product screenshot',
    projects: {
      planik: {
        title: 'Planik',
        description:
          'A complete event-planning application, designed and built from scratch by two developers.',
      },
      creditRisk: {
        title: 'Credit Risk System',
        description:
          'A system supporting risk assessment for trade credit. Built for a competition run by Univio — we won it before we worked there.',
      },
    },
  },

  services: {
    label: 'Services',
    headline: ['From a company website', 'to a full system.'],
    intro:
      'A project can be small or very large. What matters is that the solution fits the problem.',
    includesTitle: 'Included',
    items: {
      websites: {
        title: 'Websites',
        body: 'Custom websites for companies that want to look as professional as they operate.',
        cta: 'See the scope',
        includes: [
          'company websites',
          'landing pages',
          'CMS',
          'integrations',
          'custom UI',
          'performance',
          'responsive',
          'analytics',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Web applications and systems for processes no off-the-shelf tool handles sensibly.',
        cta: 'Meet CodeBros',
        includes: [],
      },
      ai: {
        title: 'AI Automation',
        body: 'Automating repetitive work where AI genuinely saves time.',
        cta: 'See what is possible',
        includes: [],
      },
    },
  },

  codebrosTransition: {
    trace: 'System mode / 04',
    intro: 'When a project grows beyond a typical website, I do not hand it off.',
    headline: ['Then there are two of us.'],
    brand: 'CodeBros',
    sub: 'Wojciech & Michał Pawlik',
  },

  codebros: {
    label: 'CodeBros / Custom systems',
    headline: ['Two people.', 'The whole process.'],
    body: 'On larger applications I work together with Michał. No account-manager layer, no handing the project between teams. From architecture and backend to frontend and deployment, we work on the product directly.',
    claim: 'From problem to production.',
    proofTitle: 'Built together',
    proofs: {
      creditRisk: {
        title: 'Credit Risk System',
        body: 'Before either of us worked at Univio, we entered a competition the company ran. We built a system supporting risk assessment for trade credit — and won.',
      },
      planik: {
        title: 'Planik',
        body: 'We designed and built a complete event-planning application between the two of us — from the data model to the interface.',
      },
    },
    mediaPending: 'Wojciech and Michał',
  },

  ai: {
    label: 'AI automation',
    headline: ['AI where it actually', 'saves work.'],
    body: 'I do not start with "where could we add AI?". I start with the process that eats your team’s time.',
    flowTitle: 'How it works',
    flow: {
      repetitiveWork: 'Repetitive work',
      processAnalysis: 'Process analysis',
      prototype: 'Prototype',
      automation: 'Automation',
      measure: 'Measure',
    },
    useCasesTitle: 'Where it works',
    useCases: {
      documents: {
        title: 'Documents',
        body: 'Analysis, classification and data extraction.',
      },
      knowledge: {
        title: 'Knowledge',
        body: 'Finding information across internal sources.',
      },
      operations: {
        title: 'Operations',
        body: 'Automating repetitive steps of a workflow.',
      },
      support: {
        title: 'Customer support',
        body: 'Supporting the team with the company’s own knowledge.',
      },
    },
    cta: 'Let us talk about the process',
  },

  process: {
    label: 'Process',
    headline: ['Decisions first.', 'Then code.'],
    intro: 'That way development is not also a chaotic attempt at designing the product.',
    steps: {
      understand: {
        title: 'Understand',
        body: 'I get to know the business, its clients, the offer and the problem.',
      },
      define: {
        title: 'Define',
        body: 'We agree on scope, goals and the decisions that matter.',
      },
      design: {
        title: 'Design',
        body: 'The structure, the UX and the visual direction take shape.',
      },
      build: {
        title: 'Build',
        body: 'Only then does implementation start.',
      },
      review: {
        title: 'Review',
        body: 'We look at a working product and collect feedback.',
      },
      refine: {
        title: 'Refine',
        body: 'I polish the details, the responsive layer and the interactions.',
      },
      launch: {
        title: 'Launch',
        body: 'Testing, deployment and handover.',
      },
    },
  },

  pricing: {
    label: 'Investment',
    headline: ['What does good web cost?'],
    intro:
      'I price every project individually, but the budget should not be a mystery until the first call.',
    plusSuffix: '+',
    rows: {
      website: {
        title: 'Business website',
        body: 'A well-made company or service website.',
      },
      websiteCms: {
        title: 'Website + CMS',
        body: 'More content, a panel to edit it, custom components.',
      },
      advanced: {
        title: 'Advanced web',
        body: 'Unusual UX, configurators, integrations, richer motion.',
      },
      system: {
        title: 'Custom system / CodeBros',
        body: 'Accounts, roles, data, processes, backend, integrations.',
      },
      ai: {
        title: 'AI prototype',
        body: 'Process analysis and a working prototype on real data.',
      },
    },
    cta: 'I have a project — let us scope it',
  },

  about: {
    label: 'About',
    headline: ['I write code for a living.', 'I build things because I like it.'],
    paragraphs: [
      'I am Wojciech Pawlik. By day I work on e-commerce systems at Univio. After hours I design and build websites and products for companies that want something more tailored than an off-the-shelf solution.',
      'Earlier I also worked as an AI Engineer, building solutions that used AI to improve business processes.',
      'What interests me most is the moment where technology, UX and a real business problem meet in one product.',
    ],
    trustTitle: 'Experience',
    trust: {
      professional: { label: 'Professional', value: 'Ecommerce engineering' },
      aiExperience: { label: 'Experience', value: 'AI engineering' },
      builds: { label: 'Selected builds', value: 'Web + product' },
      teamMode: { label: 'Team mode', value: 'CodeBros' },
    },
    mediaPending: 'Portrait',
  },

  finalCta: {
    label: 'Start a project',
    headline: ['Got something', 'to build?'],
    body: 'A website, a system, or a process that could work better. Tell me what you are working on.',
    cta: 'Tell me about your project',
  },

  contact: {
    label: 'Contact',
    headline: ['Tell me', 'about your project.'],
    intro:
      'Five short questions. Enough for me to answer specifically, instead of "thanks for getting in touch".',
    submit: 'Send project',
    submitting: 'Sending...',
    note: 'No obligation.',
    successTitle: 'Thanks.',
    successBody: 'I will read your description and come back with a concrete next step.',
    errorTitle: 'Sending failed.',
    errorBody: 'Try again, or write to me directly.',
    consent:
      'I agree to my data being processed in order to answer this enquiry and discuss the project.',
    steps: {
      type: 'What do you need?',
      stage: 'Where are you now?',
      budget: 'Indicative budget',
      brief: 'Tell me briefly about the project',
      contact: 'Contact',
    },
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Project',
    },
    messagePlaceholder: 'What are we building, for whom, and what should change because of it?',
    types: {
      website: 'Website',
      system: 'Custom system',
      ai: 'AI automation',
      unsure: 'Not sure yet',
    },
    stages: {
      scope: 'I have a defined scope',
      idea: 'I have an idea',
      rebuild: 'I have an existing solution',
      help: 'I need help defining the solution',
    },
    budgets: {
      '5-10k': '5–10k PLN',
      '10-20k': '10–20k PLN',
      '20-40k': '20–40k PLN',
      '40k+': '40k+ PLN',
      unknown: 'Not sure yet',
    },
  },

  footer: {
    navTitle: 'Site',
    contactTitle: 'Contact',
    codebrosTitle: 'Larger projects',
    codebrosLabel: 'CodeBros — Wojciech & Michał Pawlik',
    note: 'Designed & built by Wojciech Pawlik.',
    rights: 'All rights reserved.',
  },

  notFound: {
    label: '404',
    headline: 'No such page.',
    body: 'The address may have changed, or contain a typo.',
    cta: 'Back to the home page',
  },

  errorPage: {
    label: 'Error',
    headline: 'Something failed to load.',
    body: 'Try again. If that does not help, write to me — I will reply.',
    cta: 'Try again',
  },

  validation: {
    name: 'Please add your name.',
    email: 'Please enter a valid email address.',
    phone: 'Enter a phone number (9 digits) or leave this field empty.',
    projectType: 'Choose what you need.',
    stage: 'Choose the stage of the project.',
    budget: 'Choose an indicative budget — "not sure yet" is an answer too.',
    message: 'Write a few sentences about the project.',
    consent: 'I need this consent to be able to reply.',
    maxLength: 'Maximum {max} characters.',
  },
}
