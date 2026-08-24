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
      home: 'Home',
      work: 'Work',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
    },
    cta: 'Tell me about your project',
    ctaMobile: 'Start a project',
  },

  hero: {
    headline: ['Websites and systems', 'built around the business.', 'Not around a template.'],
    body: 'I design and build custom websites, web applications and AI solutions for companies that need more than an off-the-shelf template.',
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: 'See selected work',
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
    indexTitle: 'Projects that show how I think.',
    headline: ['Selected work'],
    pageHeadline: ['Projects that show', 'how I work.'],
    pageIntro:
      'A selection of websites, applications and systems where framing the problem mattered as much as the interface.',
    intro: 'A few projects where design, technology and a real business problem meet in one place.',
    tags: {
      webApp: 'Web application',
      website: 'Website',
      productDesign: 'Product design',
      fullStack: 'Full-stack',
      internalSystem: 'Internal system',
      riskScoring: 'Risk scoring',
    },
    teamCodebros: 'CodeBros',
    teamSolo: 'Solo build',
    projectLabel: 'PROJECT',
    caseStudyCta: 'Read the case study',
    liveCta: 'Live version',
    allProjectsCta: 'View all projects',
    visualization: 'Project view',
    projects: {
      mawAuto: {
        title: 'Maw Autoserwis',
        description: 'Branding and website for a versatile automotive workshop.',
      },
      agnieszkaLuzarska: {
        title: 'Agnieszka Luzarska',
        description:
          'A personal website for a Mary Kay director and consultant, built around storytelling.',
      },
      vantaDetailing: {
        title: 'Vanta Detailing',
        description: 'A portfolio sales site for an automotive detailing studio.',
      },
      planik: {
        title: 'Planik',
        description: 'A large CodeBros application for planning events from idea to booking.',
      },
      creditRisk: {
        title: 'Credit Risk System',
        description: 'A CodeBros system for configurable trade-credit risk assessment.',
      },
    },
  },

  caseStudies: {
    mawAuto: {
      label: 'Case study / Maw Autoserwis',
      title: 'Maw Autoserwis',
      categories: 'Website / Product design',
      statement:
        'For Maw Autoserwis, I created a brand and website that show the workshop’s experience and the breadth of its services.',
      meta: {
        role: { label: 'Role', value: 'Web design / frontend' },
        team: { label: 'Team', value: 'Wojciech / solo build' },
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What I built',
        body: 'I created the company branding and translated it into a website. We shaped the direction together with the owner through conversations about the future of the business and the values its image should communicate.',
      },
      problem: {
        title: 'Problem',
        body: 'Maw Autoserwis has been operating for 20 years and serves very different vehicles. The website had to build trust while showing the workshop’s range, from luxury passenger cars to commercial vehicles.',
      },
      solution: {
        title: 'Solution',
        body: 'I separated the offer into two layers: passenger cars and commercial vehicles. I presented the services and pricing, created a simple contact form and made it easier for customers to find the right route to the workshop.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The main challenge was organising a lot of information without overwhelming the visitor. Every part of the site had to reinforce the company’s credibility and lead towards contact.',
      },
      role: {
        title: 'My role',
        body: 'I handled the branding, visual direction, website design and implementation.',
        items: ['Branding', 'Web design', 'Frontend', 'Contact form'],
      },
      result: {
        title: 'Result',
        body: 'The result is a website that builds trust through concrete information about the company and consistently encourages visitors to get in touch.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
      contactCta: 'Discuss a similar website',
    },
    agnieszkaLuzarska: {
      label: 'Case study / Agnieszka Luzarska',
      title: 'Agnieszka Luzarska',
      categories: 'Website / Product design',
      statement:
        'Agnieszka Luzarska’s personal website presents not only the Mary Kay offer, but also the woman behind it.',
      meta: {
        role: { label: 'Role', value: 'Web design / frontend' },
        team: { label: 'Team', value: 'Wojciech / solo build' },
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What I built',
        body: 'I created a website for a Mary Kay director and consultant. Its purpose was to show Agnieszka as a person with her own story, approach and understanding of other women’s needs.',
      },
      problem: {
        title: 'Problem',
        body: 'Selling cosmetics mattered, but it could not hide the personal character of the brand. The site had to let clients meet Agnieszka first and understand who they would be working with.',
      },
      solution: {
        title: 'Solution',
        body: 'I used storytelling. Visitors discover Agnieszka through pleasing animations and a story told across the sections. The site also presents the cosmetics offer, which I update as the administrator because it changes rarely, without the overhead of a full CMS.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The other important element was a skin-needs card. I moved a short form from paper into a digital experience, making it easier for clients to describe their needs and contact Agnieszka.',
      },
      role: {
        title: 'My role',
        body: 'I handled the concept, design, animations and implementation.',
        items: ['Storytelling', 'Web design', 'Animation', 'Frontend', 'Custom form'],
      },
      result: {
        title: 'Result',
        body: 'The result is a site that connects a personal story with the offer and makes the first contact easier. If the offer starts changing more often, the site can be extended with a CMS.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
      contactCta: 'Discuss a similar website',
    },
    vantaDetailing: {
      label: 'Case study / Vanta Detailing',
      title: 'Vanta Detailing',
      categories: 'Website / Product design',
      statement:
        'Vanta Detailing is a portfolio sales site for an automotive detailing studio and a demonstration of my design and frontend work.',
      meta: {
        role: { label: 'Role', value: 'Web design / frontend' },
        team: { label: 'Team', value: 'Wojciech / solo build' },
        status: { label: 'Status', value: 'Portfolio project' },
      },
      context: {
        title: 'What I built',
        body: 'I created a modern website for an automotive detailing studio. It is a portfolio project rather than a delivery for a real client, but it was designed like a site that needs to sell a real service.',
      },
      problem: {
        title: 'Problem',
        body: 'A detailing studio has to show not only its services, but also the quality of its work and the difference between its packages. Visitors should quickly find a price, a package and a reason to write.',
      },
      solution: {
        title: 'Solution',
        body: 'The site presents the studio, its services, detailed pricing and package offers. A before and after component shows the result, while the contact form and review section complete the route to an enquiry.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'I used modern animation in a measured way. The site follows current visual language, but motion does not compete with the offer or the imagery. Each element supports selling the service instead of existing only for effect.',
      },
      role: {
        title: 'My role',
        body: 'I designed and built the complete portfolio site independently.',
        items: ['UX and UI', 'Web design', 'Before and after', 'Animation', 'Frontend'],
      },
      result: {
        title: 'Result',
        body: 'The result is a complete example of a site that can be adapted for a real detailing studio. If you like this direction, I can shape it around your business.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
      contactCta: 'Discuss a similar website',
    },
    planik: {
      label: 'Case study / Planik',
      title: 'Planik',
      categories: 'Web application / Product design / Full-stack',
      statement:
        'Planik is a large CodeBros web application for planning events, from the first idea to bookings, budgets and group collaboration.',
      meta: {
        role: { label: 'Role', value: 'Product design / full-stack' },
        team: { label: 'Team', value: 'Wojciech + Michał / CodeBros' },
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What we built',
        body: 'Planik is used for bachelor and bachelorette parties, birthdays and other events. It includes a catalogue of attractions, restaurants and accommodation, as well as a complete account, login and permissions system.',
      },
      problem: {
        title: 'Problem',
        body: 'Event planning brings together many decisions, people and bookings. We needed one place where a user could move from inspiration to a finished plan, while the group could make decisions together and control the budget.',
      },
      solution: {
        title: 'Solution',
        body: 'The planning module lets users create events, invite friends, add attractions from the catalogue, propose them in polls, choose helpers, create bookings and manage the budget. Events also include group chats and photo storage. A plan can start from one of our templates or be created after an AI interview.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The application also includes a partner module for creating and managing attractions, a booking system, monetisation through per-event payments and promoted offers, and admin panels for managing the product and content. The main challenge was joining these areas into one coherent system.',
      },
      role: {
        title: 'My role',
        body: 'The project was delivered together with Michał Pawlik as CodeBros.',
        items: [
          'Product thinking',
          'UX and UI',
          'Frontend',
          'Backend',
          'Data model',
          'Business logic',
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a large product that combines event planning, a catalogue, group collaboration, bookings, payments and administration in one system.',
      },
      galleryLabel: 'Product gallery',
      nextLabel: 'Next project',
      contactCta: 'Discuss a similar project',
    },
    creditRisk: {
      label: 'Case study / Credit Risk System',
      title: 'Credit Risk System',
      categories: 'Internal system / Risk scoring / Full-stack',
      statement:
        'Credit Risk System was a CodeBros project for the UGotIt competition organised by Univio. It is also where CodeBros began.',
      meta: {
        role: { label: 'Role', value: 'Product design / full-stack' },
        team: { label: 'Team', value: 'Wojciech + Michał / CodeBros' },
        status: { label: 'Status', value: 'Competition project' },
      },
      context: {
        title: 'What we built',
        body: 'Before starting work at Univio, we built a competition project for a company that needed to assess the risk of granting trade credit to its customers. The project combined a decision engine, an analyst interface and tools for salespeople.',
      },
      problem: {
        title: 'Problem',
        body: 'The risk assessment relied on complex formulas and rules. An analyst needed full control over the engine’s configuration, while a salesperson needed a clear list of customers to contact and topics to discuss.',
      },
      solution: {
        title: 'Solution',
        body: 'We created a configurable risk calculation engine and used AI to generate summaries. We also built a Kanban board where salespeople receive prioritised customers together with topics detected by the engine.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The hardest part was connecting complex, configurable rules with a simple user experience. The system had to make sense to an analyst working with the risk model and to a salesperson using the resulting recommendations.',
      },
      role: {
        title: 'My role',
        body: 'The project was delivered together with Michał Pawlik as CodeBros.',
        items: [
          'Product thinking',
          'UX and UI',
          'Frontend',
          'Backend',
          'Risk engine',
          'AI integration',
        ],
      },
      result: {
        title: 'Result',
        body: 'We won the competition, received PLN 12,000 and got the chance to take part in Univio’s recruitment process. We both joined the company later, and the project became the beginning of CodeBros.',
      },
      galleryLabel: 'System gallery',
      nextLabel: 'Next project',
      contactCta: 'Discuss a similar project',
    },
  },

  services: {
    label: 'Services',
    headline: ['From a simple website', 'to a dedicated system.'],
    pageHeadline: ['Solutions shaped', 'around the problem.'],
    pageIntro:
      'Every project starts with a specific situation. I define the scope the company needs and expand it only when a real need appears.',
    closingLabel: 'Next step',
    closingHeadline: 'Do you have a concrete problem to solve?',
    closingBody:
      'Tell me what is happening in the company. After a short conversation, I will suggest a sensible scope and next step.',
    closingCta: 'Tell me about your project',
    intro:
      'I start by clarifying the problem and the goal. Then I define the scope and choose the technology needed to build the right solution — without adding features just because I can.',
    items: {
      websites: {
        title: 'Websites',
        body: 'Brochure sites, company websites and landing pages built from scratch in code, without WordPress or ready-made builders. I can include company branding, a logo and visual direction in the same process.',
        cta: 'See the scope',
        includes: [
          'company websites',
          'landing pages',
          'CMS',
          'integrations',
          'custom UI',
          'branding and logo',
          'performance',
          'responsive',
          'analytics',
          'technical SEO',
          'multiple languages',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Dedicated applications, portals and internal systems shaped around the company’s process. For larger projects I work with my brother Michał as CodeBros.',
        cta: 'Meet CodeBros',
        includes: [],
      },
      ai: {
        title: 'AI Automation',
        body: 'I analyse repetitive work and check whether it can be simplified, automated or supported by AI.',
        cta: 'See what is possible',
        includes: [],
      },
    },
  },

  servicePages: {
    websites: {
      title: 'Websites',
      intro:
        'I design websites that clarify the offer, build trust and guide the right people towards contact.',
      mediaAlt: 'Vanta Detailing website interface',
      mediaLabel: 'Website interface example',
      problemTitle: 'What problem does it solve?',
      problem:
        'When the company has a strong service but the current website does not show its quality or makes the next step difficult.',
      benefitsTitle: 'What a good website changes',
      benefits: [
        'People understand what you do and who you do it for faster.',
        'The offer has a hierarchy that leads from first impression to contact.',
        'The website feels like your company, not another version of the same template.',
      ],
      scopeTitle: 'What I can build for you',
      scope: [
        'Company website',
        'Landing page',
        'Site without CMS or with CMS',
        'Forms, integrations and analytics',
        'Responsive, animation and interaction',
        'Company branding, logo and visual direction',
        'Technical SEO and multiple languages',
        'Domain, hosting, SSL, DNS and deployment',
      ],
      processTitle: 'How I work on a website',
      process: [
        'I organise the offer, the audience and the website’s main job. If needed, I also design the branding and logo.',
        'I design the structure and interface around that job.',
        'I build the site, test it across screens and prepare it for launch.',
      ],
      investmentTitle: 'A short conversation shapes the estimate',
      investment:
        'The pricing page shows the starting points I use for estimates. After a short conversation, I can prepare a more detailed estimate for your situation. Branding, a logo and SEO can be part of the same scope — I include them in the process and project price.',
      fitTitle: 'When it is worth talking',
      fit: 'When you want a website shaped around the company, not a company shaped around a ready-made theme.',
      pricingCta: 'See indicative pricing',
      contactCta: 'Tell me about your project',
    },
    systems: {
      title: 'Custom Systems',
      intro:
        'I design and build dedicated web systems — both for improving how a company operates and for commissioned applications when a company has a specific idea or need.',
      mediaAlt: 'Wojciech and Michał as CodeBros at a competition',
      mediaLabel: 'CodeBros / project together',
      problemTitle: 'What problem does it solve?',
      problem:
        'When information is scattered and the team works around spreadsheets, forms and several disconnected systems every day.',
      benefitsTitle: 'What a dedicated system gives you',
      benefits: [
        'The team gets one tool instead of several spreadsheets and manual workarounds.',
        'The process is captured in the system, so it is easier to repeat, control and improve.',
        'Data, roles and permissions match how the company actually works.',
      ],
      scopeTitle: 'What I can build for you',
      scope: [
        'Web application',
        'Client or operations panel',
        'B2B portal, dashboard or configurator',
        'Booking system and workflow',
        'Data model, backend and integrations',
        'Roles, permissions and business logic',
      ],
      processTitle: 'From process to a working system',
      process: [
        'I map the process, the users and the points where work gets stuck.',
        'I shape the data model and prototype the most important scenarios.',
        'I build, deploy and extend the system in stages with regular reviews.',
      ],
      investmentTitle: 'I break the system into stages first',
      investment:
        'I can build an internal tool, a customer-facing application or a product commissioned by a company. Scope and budget follow the goal, users, data, integrations and the first stage that should create real value.',
      fitTitle: 'When it is worth talking',
      fit: 'When the process matters to the company but there is no good ready-made solution for it.',
      pricingCta: 'See investment levels',
      contactCta: 'Tell me about the process',
    },
    ai: {
      title: 'AI Automation',
      intro:
        'I look for the process that takes the team’s time — only then do I check whether AI can simplify it.',
      mediaAlt: 'Server room as a visual metaphor for AI infrastructure',
      mediaLabel: 'Infrastructure behind automation',
      problemTitle: 'What problem does it solve?',
      problem:
        'When people read documents by hand, copy data between systems, answer the same questions or make repetitive decisions.',
      benefitsTitle: 'What automation can unlock',
      benefits: [
        'Less manual copying and searching for information between systems.',
        'Faster handling of repetitive work without promising that AI does everything alone.',
        'Human review stays where experience and responsibility matter.',
      ],
      scopeTitle: 'What I can build for you',
      scope: [
        'Process analysis',
        'Document processing',
        'Data extraction and classification',
        'Company knowledge search',
        'Request analysis and workflow automation',
        'Integration with existing systems',
      ],
      processTitle: 'Process first, tool second',
      process: [
        'I map the repetitive work and find where time is actually being lost.',
        'I build a small prototype around a real example.',
        'If the result makes sense, I integrate it and measure its effect on the work.',
      ],
      investmentTitle: 'Start with a small, testable step',
      investment:
        'The cost depends on data, exceptions, required review and integration with existing tools. You can start by assessing the process before deciding on a larger deployment.',
      fitTitle: 'When it is worth talking',
      fit: 'When you repeat a process every day and want to check whether it can be simplified without inflated promises.',
      pricingCta: 'See investment levels',
      contactCta: 'Tell me about the process',
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
    mediaAlt: 'Wojciech and Michał Pawlik at the CodeBros competition',
    mediaPending: 'Wojciech and Michał',
  },

  ai: {
    label: 'AI automation',
    headline: ['Process first.', 'Then AI.'],
    body: 'AI is a tool. The starting point is a process that takes your team’s time, requires repetitive decisions or moves information between systems.',
    processLabel: 'How I work',
    process: ['Process analysis', 'Prototype', 'Integration', 'Measure the effect'],
    explorerTitle: 'Choose the problem',
    inputLabel: 'Input',
    layerLabel: 'AI layer',
    outputLabel: 'Output',
    humanLabel: 'Human check',
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
        body: 'Documents processed by hand.',
        input: 'PDF / email / scan',
        layer: 'read → classify → validate',
        output: 'CRM / ERP / database',
        human: 'review exceptions',
      },
      knowledge: {
        title: 'Knowledge',
        body: 'Knowledge scattered across the company.',
        input: 'procedures / documentation / files',
        layer: 'search → context → answer',
        output: 'one answer in the right place',
        human: 'source and decision check',
      },
      operations: {
        title: 'Operations',
        body: 'Repetitive operational decisions.',
        input: 'data from several systems',
        layer: 'rules → recommendation → action',
        output: 'an updated process',
        human: 'approval of unusual cases',
      },
      support: {
        title: 'Customer support',
        body: 'A high volume of similar questions.',
        input: 'a customer or employee question',
        layer: 'recognise → retrieve → prepare',
        output: 'a faster answer grounded in company knowledge',
        human: 'escalation of difficult cases',
      },
    },
    cta: 'Talk to me about the process',
  },

  process: {
    label: 'Process',
    headline: ['Decisions first.', 'Then code.'],
    intro:
      'Every phase ends with a concrete result. So before development starts, I know what I am building, for whom and why.',
    locked: 'Decisions locked → build starts',
    phases: {
      direction: {
        label: 'Direction',
        title: 'From the problem to a clear direction.',
        statement:
          'I understand the context, choose priorities and turn the idea into a product plan.',
        outputLabel: 'Output',
        output: 'Project direction',
        outputDetail: 'UX / structure / visual direction',
      },
      production: {
        label: 'Production',
        title: 'I turn the direction into a working product.',
        statement: 'Approved decisions become an implementation that can be tested in real use.',
        outputLabel: 'Output',
        output: 'Working product',
        outputDetail: 'A working version for a shared review',
      },
      release: {
        label: 'Release',
        title: 'I do not stop at “it works”.',
        statement: 'I refine the experience, check the details and prepare the product for launch.',
        outputLabel: 'Output',
        output: 'Production ready',
        outputDetail: 'Responsive / interactions / testing / deployment',
      },
    },
    steps: {
      understand: {
        title: 'Understand',
        body: 'I get to know the business, its clients, the offer and the problem.',
      },
      define: {
        title: 'Define',
        body: 'I agree on scope, goals and the decisions that matter.',
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
        body: 'I look at a working product and collect feedback.',
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
    headline: ['Start with the scope,', 'not a large budget.'],
    pageHeadline: ['Scope first.', 'Then the estimate.'],
    pageIntro:
      'Indicative investment levels make it easier to assess fit. The final estimate depends on the problem, scope and integrations the project needs.',
    minimumRateNote:
      'The amounts below are the minimum starting points for an estimate. Current opening offer: the first 3 clients can get a landing page estimated from 900 PLN instead of the standard starting point of 1,200 PLN.',
    intro:
      'I do not sell the largest possible solution. Scope, timing and price depend on the problem, content, number of pages, integrations and required logic. If you have a deadline, I can offer priority delivery for an additional fee when the date is realistic.',
    plusSuffix: '+',
    quote: 'Individually scoped',
    aftercareLabel: 'After launch',
    aftercareTitle: 'The product is yours.',
    aftercareBody:
      'After the project is completed and settled, you receive the website, application, system or logic created for you. You can maintain it yourself, hand it to someone else or commission further development from me.',
    maintenanceLabel: 'Optional maintenance',
    maintenanceLimit: 'up to',
    maintenancePeriod: 'per month',
    maintenanceBody:
      'Domain, hosting, monitoring, small fixes and response to problems. The maximum cost is 150 PLN per month.',
    aftercareNote:
      'The project includes 3 months of free small adjustments. This does not cover new pages, features, integrations, major redesigns or regular content updates. I can handle content updates for 70 PLN per hour, with a minimum order value of 50 PLN.',
    rows: {
      landing: {
        title: 'Landing page / simple brochure site',
        body: 'A small website shaped around the company. It can take around 3 working days or 1–2 weeks, depending on scope.',
      },
      websiteCms: {
        title: 'Website + CMS',
        body: 'A headless CMS or dedicated panel when content or a company process needs regular management.',
      },
      advanced: {
        title: 'Custom business website',
        body: 'A company or service website designed from scratch. It can include branding, a logo, SEO, configurators, extended logic, integrations and additional business requirements.',
      },
      system: {
        title: 'Custom system / CodeBros',
        body: 'A client portal, B2B portal, workflow, dashboard, application or internal system. Timing and price are individual.',
      },
      ai: {
        title: 'AI prototype',
        body: 'Process analysis first, then a prototype or deployment. AI only when it solves a concrete problem.',
      },
    },
    cta: 'I have a project — define the scope with me',
  },

  about: {
    label: 'About',
    headline: ['I write code for a living.', 'I build things because I like it.'],
    pageHeadline: ['One person', 'on the other side of the project.'],
    pageIntro:
      'I design and build the work personally. For larger systems I work with my brother Michał as CodeBros.',
    paragraphs: [
      'I am Wojciech Pawlik. By day I work on e-commerce systems at Univio. After hours I design and build websites and products for companies that want something more tailored than an off-the-shelf solution.',
      'Earlier I also worked as an AI Engineer, including work for ASML — one of Europe’s largest technology companies.',
      'What interests me most is the moment where technology, UX and a real business problem meet in one product.',
    ],
    trustTitle: 'Experience',
    trust: {
      professional: { label: 'Professional', value: 'Ecommerce engineering' },
      aiExperience: { label: 'Experience', value: 'AI engineering' },
      builds: { label: 'Selected builds', value: 'Web + product' },
      teamMode: { label: 'Team mode', value: 'CodeBros' },
    },
    pageFocusTitle: 'No handoffs between layers.',
    pageFocusBody:
      'You speak directly with the person designing and building the solution. Decisions stay shorter, and responsibility for the result stays on one side.',
    mediaAlt: 'Portrait of Wojciech Pawlik',
    mediaPending: 'Portrait',
    cta: 'Get to know me',
  },

  finalCta: {
    label: 'Start a project',
    headline: ['Got something', 'to build?'],
    body: 'A website, a system, or a process that could work better. Tell me what you are working on.',
    cta: 'Tell me about your project',
  },

  contact: {
    pageTitle: 'Tell me about the project',
    pageHeadline: ['Tell me', 'about the project.'],
    pageIntro:
      'Describe the situation and I will come back with a concrete next step — even if the scope is not clear yet.',
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
    messagePlaceholder: 'What should I build, for whom, and what should change because of it?',
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
