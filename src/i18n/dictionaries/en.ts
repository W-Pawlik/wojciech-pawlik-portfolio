import type { Dictionary } from '../dictionaries'

/**
 * English copy. Typed against the Polish dictionary, so a key added there and missing
 * here is a compile error.
 *
 * TODO(brief): the language decision (`pl` only vs `pl + en`) is still open
 * (.agents/00-project-brief.md#czego-brakuje--pytania-do-właściciela). This is a faithful
 * translation of the approved Polish copy, not separately approved copy - if English
 * stays, it needs one editorial pass by the owner. If it goes, delete this file and the
 * locale in `src/i18n/config.ts` (ADR-0003).
 */
export const en: Dictionary = {
  meta: {
    title: 'Websites and web systems for companies | PawlikWeb',
    description:
      'I design and build websites, web systems and AI automation for companies that need a solution tailored to how their business works.',
  },

  common: {
    skipToContent: 'Skip to content',
    from: 'from',
    to: '–',
    email: 'Email',
    phone: 'Phone',
    address: 'Correspondence address',
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
    descriptor: 'Websites and systems for companies',
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
    headline: ['Your business first.', 'Then the solution.'],
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
      branding: 'Brand creation',
      logoCreation: 'Logo creation',
      businessAnalysis: 'Business analysis',
      fullStack: 'Full-stack',
      internalSystem: 'Internal system',
      riskScoring: 'Risk scoring',
    },
    teamCodebros: 'CodeBros',
    teamSolo: 'Solo build',
    caseStudyLabel: 'Case study',
    caseStudyCta: 'Read the case study',
    liveCta: 'Live version',
    caseStudyClosing: {
      title: 'Like this project?',
      body: 'Want to create something similar for your business? Let’s talk about it.',
      cta: 'Get in touch',
    },
    allProjectsCta: 'View all projects',
    visualization: 'Project view',
    selectorLabel: 'Choose a project',
    projects: {
      mawAuto: {
        title: 'Maw Autoserwis',
        description: 'Branding and website for a versatile automotive workshop.',
      },
      dzendzera: {
        title: 'Dzendzera',
        description:
          'A photographer’s website bringing sport, motorsport and wildlife into one visual language.',
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
      title: 'Maw Autoserwis',
      categories: 'Website / Brand creation',
      statement:
        'For Maw Autoserwis, I created a brand and website that show the workshop’s experience and the breadth of its services.',
      meta: {
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What I built',
        body: 'I created the company branding and translated it into a website. We shaped the direction together with the owner through conversations about the future of the business and the values its image should communicate. I also built the Google Business Profile.',
      },
      problem: {
        title: 'Problem',
        body: 'Maw Autoserwis has been operating for 20 years and serves very different vehicles. The website had to build trust while showing the workshop’s range, from luxury passenger cars to commercial vehicles.',
      },
      solution: {
        title: 'Solution',
        body: 'I separated the offer into two layers: passenger cars and commercial vehicles. I added the services and pricing, while the contact form shortened the path from choosing a service to sending an enquiry.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The main challenge was organising a lot of information without overwhelming the visitor. Every part of the site had to reinforce the company’s credibility and lead towards contact.',
      },
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Branding', icon: 'branding' as const },
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Website', icon: 'website' as const },
          { label: 'Google Business Profile', icon: 'google' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a website that builds trust through concrete information about the company and consistently encourages visitors to get in touch.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
    },
    dzendzera: {
      title: 'Dzendzera',
      categories: 'Website / Brand creation',
      statement:
        'For Maciej Dżendżera, I created a photographer’s website that brings sport, motorsport and wildlife into one coherent brand direction.',
      meta: {
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What I built',
        body: 'I created a website for a photographer working in two rhythms: the dynamic world of sport and motorsport, and the patient world of wildlife. The site organises both areas and leads visitors from the first frame towards an enquiry.',
      },
      problem: {
        title: 'Problem',
        body: 'The website had to present different kinds of photography without splitting the brand into separate stories. It also needed to quickly explain who the offer is for and what kind of material a collaboration can produce.',
      },
      solution: {
        title: 'Solution',
        body: 'I built the narrative around two working rhythms. The performance and wildlife sections have their own character, but share typography, pacing and an editorial way of presenting images. The offer, stories and contact form complete the route from inspiration to enquiry.',
      },
      challenge: {
        title: 'Technical challenge',
        body: 'The main challenge was combining a large number of images, animations and long sequences in a site that still feels light to use. Motion creates tension and guides the story without covering the photography or the essential information.',
      },
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Brand creation', icon: 'branding' as const },
          { label: 'Website', icon: 'website' as const },
          { label: 'UX and UI', icon: 'interface' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a photographer’s website that shows both the energy of events and the focus required when working with nature. It organises the offer, builds the author’s brand and makes it easier to start a conversation.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
    },
    agnieszkaLuzarska: {
      title: 'Agnieszka Luzarska',
      categories: 'Website / Logo creation',
      statement:
        'Agnieszka Luzarska’s personal website presents not only the Mary Kay offer, but also the woman behind it.',
      meta: {
        status: { label: 'Status', value: 'Completed project' },
      },
      context: {
        title: 'What I built',
        body: 'I created a website for a Mary Kay director and consultant. Its purpose was to show Agnieszka as a person with her own story, approach and understanding of other women’s needs. I also created the brand logo.',
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
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Website', icon: 'website' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a site that connects a personal story with the offer and makes the first contact easier. If the offer starts changing more often, the site can be extended with a CMS.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
    },
    vantaDetailing: {
      title: 'Vanta Detailing',
      categories: 'Website / Brand creation',
      statement:
        'Vanta Detailing is a portfolio sales site for an automotive detailing studio and a demonstration of my design and frontend work.',
      meta: {
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
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Website', icon: 'website' as const },
          { label: 'Logo', icon: 'logo' as const },
          { label: 'Branding', icon: 'branding' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a complete example of a site that can be adapted for a real detailing studio. If you like this direction, I can shape it around your business.',
      },
      galleryLabel: 'Website gallery',
      nextLabel: 'Next project',
    },
    planik: {
      title: 'Planik',
      categories: 'Web application / Business analysis / Brand creation',
      statement:
        'Planik is a large CodeBros web application for planning events, from the first idea to bookings, budgets and group collaboration.',
      meta: {
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
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Business analysis', icon: 'analysis' as const },
          { label: 'Branding', icon: 'branding' as const },
          { label: 'UX and UI', icon: 'interface' as const },
          { label: 'Data model', icon: 'data' as const },
          { label: 'Business logic', icon: 'logic' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'The result is a large product that combines event planning, a catalogue, group collaboration, bookings, payments and administration in one system.',
      },
      galleryLabel: 'Product gallery',
      nextLabel: 'Next project',
    },
    creditRisk: {
      title: 'Credit Risk System',
      categories: 'Internal system / Risk scoring / Full-stack',
      statement:
        'Credit Risk System was a CodeBros project for the UGotIt competition organised by Univio. It is also where CodeBros began.',
      meta: {
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
      deliverables: {
        title: 'Scope',
        items: [
          { label: 'Business analysis', icon: 'analysis' as const },
          { label: 'UX and UI', icon: 'interface' as const },
          { label: 'Risk engine', icon: 'risk' as const },
          { label: 'AI integration', icon: 'ai' as const },
        ],
      },
      result: {
        title: 'Result',
        body: 'We won the competition, received PLN 12,000 and got the chance to take part in Univio’s recruitment process. We both joined the company later, and the project became the beginning of CodeBros.',
      },
      galleryLabel: 'System gallery',
      nextLabel: 'Next project',
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
    pricingCta: 'See indicative pricing',
    contactCta: 'Tell me about your project',
    intro:
      'I start by clarifying the problem and the goal. Then I define the scope and choose the technology needed to build the right solution - without adding features just because I can.',
    items: {
      websites: {
        title: 'Websites',
        body: 'One-page websites for one offer or a simple company brochure, company websites and extended sites built from scratch in code, without WordPress or ready-made builders. I can include company branding, a logo, visual direction and a Google Business Profile in the same process.',
        cta: 'See the scope',
        includes: [
          'one-page websites',
          'company websites',
          'extended sites',
          'CMS',
          'integrations',
          'custom UI',
          'branding and logo',
          'performance',
          'responsive',
          'analytics',
          'technical SEO',
          'multiple languages',
          'Google Business Profile',
        ],
      },
      systems: {
        title: 'Custom Systems',
        body: 'Dedicated applications, portals and internal systems shaped around the company’s process. For larger projects I work with my brother and fellow engineer Michał Pawlik as CodeBros.',
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
      mediaAlt: 'Business website shown on a laptop',
      mediaLabel: 'Website interface example',
      problemTitle: 'Starting point',
      problem:
        'You have a strong service, but the current website does not show its value, build enough trust or guide visitors towards contact.',
      benefitsTitle: 'A website that works for the business',
      benefits: [
        'People quickly understand what you do, who you do it for and why they should choose you.',
        'The offer has a clear hierarchy that leads from first impression to a concrete action.',
        'The website feels like your company, not another version of the same template.',
        'It does more than look good: it supports sales and turns interest into enquiries.',
      ],
      scopeTitle: 'What I can build for you',
      scope: [
        'One-page website',
        'Company website',
        'Extended company website',
        'CMS and integrations',
        'Forms, integrations and analytics',
        'Responsive, animation and interaction',
        'Company branding, logo and visual direction',
        'Technical SEO and multiple languages',
        'Domain, hosting, SSL, DNS and deployment',
        'Google Business Profile',
        'Website copy - optional, billed separately',
        'Client images, AI or free stock',
      ],
      processTitle: 'How I work on a website',
      process: [
        'I organise the offer, the audience and the website’s main job. If needed, I also design the branding and logo.',
        'I design the structure and interface around that job.',
        'I build the site, test it across screens and prepare it for launch.',
      ],
      investmentTitle: 'A short conversation shapes the estimate',
      investment:
        'The pricing page shows the starting points I use for estimates. After a short conversation, I can prepare a more detailed estimate for your situation. Branding, a logo and SEO can be part of the same scope - I include them in the process and project price.',
      fitTitle: 'When it is worth talking',
      fit: 'When you want a website shaped around the company, not a company shaped around a ready-made theme.',
      pricingCta: 'See indicative pricing',
      contactCta: 'Tell me about your project',
    },
    systems: {
      title: 'Custom Systems',
      intro:
        'I design and build dedicated web systems - both for improving how a company operates and for commissioned applications when a company has a specific idea or need.',
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
      pricingCta: 'See indicative pricing',
      contactCta: 'Tell me about the process',
    },
    ai: {
      title: 'AI Automation',
      intro:
        'I look for the process that takes the team’s time - only then do I check whether AI can simplify it.',
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
      pricingCta: 'See indicative pricing',
      contactCta: 'Tell me about the process',
    },
  },

  codebrosTransition: {
    trace: 'System mode / 05',
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
        body: 'Before either of us worked at Univio, we entered a competition the company ran. We built a system supporting risk assessment for trade credit - and won.',
      },
      planik: {
        title: 'Planik',
        body: 'We designed and built a complete event-planning application between the two of us - from the data model to the interface.',
      },
    },
    mediaAlt: 'Wojciech and Michał Pawlik at the CodeBros competition',
    mediaPending: 'Wojciech and Michał',
  },

  ai: {
    sectionNumber: '06',
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
    label: 'How I work',
    headline: ['From the first conversation', 'to launch.'],
    intro: 'After each stage, you know what is decided, what is being built and what comes next.',
    steps: {
      understand: {
        title: 'I understand the business and goal',
        body: 'We talk about the company, its offer, clients and the problem the project should solve.',
        outputLabel: 'At the end',
        output: 'Project goal and scope',
      },
      design: {
        title: 'I design the solution',
        body: 'I organise the structure, offer, UX and visual direction. We choose what the project really needs.',
        outputLabel: 'At the end',
        output: 'Website plan and project direction',
      },
      build: {
        title: 'I build and consult',
        body: 'I implement the project and show a working version so we can review it together.',
        outputLabel: 'At the end',
        output: 'Working version for review',
      },
      launch: {
        title: 'I refine and launch',
        body: 'I check responsiveness and details, then prepare the project for publication.',
        outputLabel: 'At the end',
        output: 'Website ready to go live',
      },
    },
  },

  pricing: {
    label: 'Pricing',
    headline: ['Start with the scope,', 'not a large budget.'],
    pageHeadline: ['Scope first.', 'Then the estimate.'],
    pageIntro:
      'I show starting points so you can assess the fit. I do not sell fixed packages - the final estimate follows the project scope.',
    minimumRateNote:
      'These amounts are the minimum starting points I use for estimates. Scope, content and integrations can change them.',
    intro:
      'You do not need to know the right variant. Tell me what you want to achieve and I will help define the scope.',
    landing: {
      label: 'Indicative budget',
      headline: ['Where does a', 'company website start?'],
      intro:
        'I do not show fixed packages. I show three project levels so you can see where a sensible starting point might be.',
      largerLabel: 'Larger projects',
      largerBody:
        'Need a web system, a client portal or process automation? These projects are scoped individually.',
      fullPricingCta: 'See the full pricing',
      contactCta: 'Tell me about your project',
      rows: {
        landing: {
          need: 'Do you have one offer or service to present?',
          solution: 'A landing page or simple company brochure - one page and one main goal.',
        },
        businessWebsite: {
          need: 'Do you want to clearly present your company, services and work?',
          solution: 'Several pages, a clear offer structure and a simple path to contact.',
        },
        extendedWebsite: {
          need: 'Do you need a larger structure, CMS or integrations?',
          solution: 'An extended company website with more content, functionality and logic.',
        },
      },
    },
    plusSuffix: '+',
    quote: 'Individually scoped',
    promotion: {
      label: 'Launch offer',
      headline: 'First {limit} projects from {price}',
      body: 'To mark the start of my work on Oferteo, I am offering promotional terms to the first clients.',
      counter: 'Used: {claimed} of {limit} places',
    },
    groups: {
      websites: {
        label: 'Websites',
        intro: 'From one focused page to a larger company website.',
      },
      largerProjects: {
        label: 'Larger projects',
        intro: 'When you need a tool for a business process, not just a website.',
      },
    },
    extensionsLabel: 'Possible project extensions',
    extensions: [
      'Branding and logo',
      'Google Business Profile',
      'CMS and integrations',
      'Analytics, technical SEO and multiple languages',
    ],
    materials: {
      label: 'Project materials',
      contentTitle: 'Website copy',
      contentBody:
        'The client provides the content and facts for the website. If you want, I can prepare the copy as an additional scope included in the estimate, after agreeing the relevant facts with you.',
      imagesTitle: 'Images',
      imagesBody:
        'The client provides images, or we agree to use AI-generated images or free stock images. I do not provide photography as a service and do not charge an additional fee for this. If we agree to buy a paid stock image, the client covers its purchase cost.',
    },
    aftercareLabel: 'After launch',
    aftercareTitle: 'The project is yours.',
    aftercareBody: 'You can develop it yourself or ask me to handle maintenance and small updates.',
    maintenanceLabel: 'Optional maintenance',
    maintenancePrefix: 'typically',
    maintenancePeriod: 'per month',
    maintenanceBody:
      'For a simple website, maintenance typically costs 150 PLN per month. For larger websites, the amount may depend on the work and resources they require.',
    maintenanceIncludesLabel: 'Maintenance includes',
    maintenanceIncludes: [
      'Domain - I buy it or the company does',
      'Hosting - I handle its setup and operation',
      'Continuous website monitoring',
      'Basic statistics, such as the number of visits',
      'Fixing errors if they occur',
    ],
    updatesLabel: 'Optional changes and larger updates',
    updatesTitle: 'New sections and larger changes',
    updatesBody:
      'A new section, a change to an existing section or a larger update is billed at 100 PLN per hour. I do not bill individual minutes - the minimum value of a request is 100 PLN, even if the work takes less than an hour. If it takes 1.25 hours, you pay 125 PLN; if it takes 1.5 hours, you pay 150 PLN.',
    hourSuffix: 'hour',
    aftercareNote:
      'The project includes 3 months of free small fixes. New pages, sections, features, integrations and larger changes are estimated separately at the rate above.',
    rows: {
      landing: {
        title: 'One-page website',
        body: 'A landing page for one offer or a simple company brochure site. One page, one main goal, form or contact.',
        details: ['One page', 'One main goal', 'Form or contact'],
      },
      businessWebsite: {
        title: 'Company website',
        body: 'Several pages for a company that needs to clearly present its offer, services, work and contact path.',
        details: ['Several pages', 'Clear offer structure', 'Contact and technical SEO'],
      },
      extendedWebsite: {
        title: 'Extended company website',
        body: 'More content, frequent updates, a CMS, integrations or custom functionality.',
        details: ['CMS or frequent updates', 'Integrations', 'Additional logic'],
      },
      system: {
        title: 'Web system / CodeBros',
        body: 'A client portal, B2B portal, dashboard or internal system. When the solution needs to handle processes, data and users.',
        details: ['Login and roles', 'Data and processes', 'Dashboard or application'],
      },
      ai: {
        title: 'Process automation',
        body: 'An analysis of repetitive work and a check whether it can be simplified or supported by AI.',
        details: ['Process analysis', 'Prototype or implementation', 'AI with a concrete goal'],
      },
    },
    cta: 'I have a project - define the scope with me',
  },

  about: {
    label: 'About',
    headline: ['I write code for a living.', 'I build things because I like it.'],
    pageHeadline: ['One person', 'on the other side of the project.'],
    pageIntro:
      'I design and build the work personally. For larger systems I work with my brother and fellow engineer Michał Pawlik as CodeBros.',
    paragraphs: [
      'My name is Wojciech Pawlik. By day I work on e-commerce systems at Univio. After hours I design and build websites and products for companies that want something more tailored than an off-the-shelf solution.',
      'Earlier I also worked as an AI Engineer, including work for ASML - one of Europe’s largest technology companies.',
      'What interests me most is the moment where technology, UX and a real business problem meet in one product.',
      'I am interested in modern web design, animation, transitions and the details that make a website feel alive. I am creative and eager to try new things, so there is no project I would not take on.',
    ],
    trustTitle: 'Experience',
    trust: {
      experience: { label: 'Experience', value: 'E-commerce, AI' },
      projects: { label: 'Projects', value: 'Websites, distributed systems, AI systems' },
      hobbies: { label: 'Hobbies', value: 'Entrepreneurship, web design, sport' },
    },
    pageFocusTitle: 'No handoffs between layers.',
    pageFocusBody:
      'You speak directly with the person designing and building the solution. Decisions stay shorter, and responsibility for the result stays on one side.',
    mediaAlt: 'Portrait of Wojciech Pawlik',
    mediaPending: 'Portrait',
    cta: 'Get to know me',
    pageCta: 'Tell me about your project',
    codebros: {
      label: 'CodeBros / Wojciech and Michał Pawlik',
      headline: ['We combine experience', 'to build larger systems.'],
      intro:
        'CodeBros is our way of approaching larger projects together. We combine design, frontend, backend and systems experience, so decisions happen directly between the people building the product.',
      personLabel: 'Michał Pawlik',
      personTitle: 'Experienced software engineer',
      personBody:
        'Michał has 10 years of experience in software development. For most of his career he developed banking systems at a software house, followed by work on AI-powered solutions. We now work together at Univio, building distributed e-commerce systems for one of the major retailers.',
      benefitsTitle: 'Why we work together',
      benefits: [
        'We combine a broad product perspective with experience building complex systems.',
        'We make decisions faster because we work directly on the same problem.',
        'We share responsibility for architecture, interface, implementation and deployment.',
      ],
      mediaAlt: 'Michał Pawlik',
      mediaPending: 'Portrait of Michał Pawlik',
      teamMediaAlt: 'Wojciech and Michał Pawlik at the CodeBros competition',
      teamMediaPending: 'Wojciech and Michał',
      projectsCta: 'See CodeBros projects',
    },
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
      'Describe the situation and I will come back with a concrete next step - even if the scope is not clear yet.',
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
    consentPrivacy: 'Privacy policy',
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
      '900-2000': '900–2,000 PLN',
      '2000-5000': '2,000–5,000 PLN',
      '5000-10000': '5,000–10,000 PLN',
      '10000+': '10,000+ PLN',
      unknown: 'Not sure yet',
    },
  },

  footer: {
    privacy: 'Privacy policy',
    terms: 'Terms',
    navTitle: 'Site',
    contactTitle: 'Contact',
    codebrosTitle: 'Larger projects',
    codebrosLabel: 'CodeBros - Wojciech & Michał Pawlik',
    note: 'Designed & built by Wojciech Pawlik.',
    rights: 'All rights reserved.',
  },

  legal: {
    privacy: {
      title: 'Privacy policy',
      intro:
        'How I process data submitted through the contact form and generated while you use the website.',
      sections: [
        {
          title: 'Data controller',
          paragraphs: [
            'The data controller is Wojciech Pawlik, operating as an unregistered activity. Contact for data protection matters: wojciech.pawlikweb@gmail.com. Phone: +48 666 223 853.',
          ],
        },
        {
          title: 'What data I process and why',
          paragraphs: [
            'When you use the form, I process the data you provide: name, email address, optional phone number and project description. I use it to answer your message, agree the next step and conduct correspondence about your enquiry.',
            'Providing data is voluntary, but without your name, email address and project description I cannot answer the enquiry. The legal basis is the consent submitted with the form and, where relevant, steps taken at your request before entering into a service agreement.',
          ],
        },
        {
          title: 'Analytics and cookies',
          paragraphs: [
            'The website uses Vercel Web Analytics to measure visits and page popularity. According to Vercel documentation, the tool does not use cookies and analytics data is anonymised and aggregated. I do not currently use Google Analytics, Meta Pixel, Hotjar or marketing cookies.',
            'Vercel provides the website hosting. The provider may process technical data needed to deliver the website and analytics in line with its documentation and data protection agreements.',
          ],
        },
        {
          title: 'Recipients and retention',
          paragraphs: [
            'Form data is sent to the Resend email service only to deliver the message to the controller. I and the technical providers involved in hosting and email delivery may access the data.',
            'I retain data for as long as needed to handle the enquiry and then for the period needed to defend against potential claims. If data becomes part of accounting or contract records, it is retained for the period required by law.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'You may request access to, rectification, erasure, restriction or portability of your data. Where processing is based on consent, you may withdraw it at any time; this does not affect processing carried out before withdrawal. To exercise your rights, write to wojciech.pawlikweb@gmail.com.',
            'You may also lodge a complaint with the President of the Polish Personal Data Protection Office if you believe that processing infringes data protection law.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms',
      intro: 'Rules for using the PawlikWeb website and contact form.',
      sections: [
        {
          title: 'Service provider',
          paragraphs: [
            'The service provider is Wojciech Pawlik, operating as an unregistered activity. Contact: wojciech.pawlikweb@gmail.com, +48 666 223 853.',
            'The offer is addressed to all interested individuals and entities. The terms of each project are agreed individually before work begins.',
          ],
        },
        {
          title: 'Electronic services',
          paragraphs: [
            'The website lets you browse content and send a message through the contact form. The form is free of charge. Sending a message does not itself create a contract for a project.',
            'You need an internet-connected device and a current web browser. The form requires the fields marked as required and acceptance of the consent described next to the form.',
          ],
        },
        {
          title: 'Use and complaints',
          paragraphs: [
            "You must not send unlawful content, content infringing other people's rights, malware or attempts to disrupt the website. Use the form lawfully and in accordance with good practice.",
            'Complaints about the form may be sent to wojciech.pawlikweb@gmail.com. Describe the problem and provide a way to contact you. I will respond without undue delay.',
          ],
        },
        {
          title: 'Final provisions',
          paragraphs: [
            'The website content is informational. Project details, timing, fee and rights to the deliverables are agreed individually before work begins.',
            'Polish law applies, while respecting mandatory consumer rights. These terms apply from publication and may be updated when required by law or by a change to the website.',
          ],
        },
      ],
    },
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
    body: 'Try again. If that does not help, write to me - I will reply.',
    cta: 'Try again',
  },

  validation: {
    name: 'Please add your name.',
    email: 'Please enter a valid email address.',
    phone: 'Enter a phone number (9 digits) or leave this field empty.',
    projectType: 'Choose what you need.',
    stage: 'Choose the stage of the project.',
    budget: 'Choose an indicative budget - "not sure yet" is an answer too.',
    message: 'Write a few sentences about the project.',
    consent: 'I need this consent to be able to reply.',
    maxLength: 'Maximum {max} characters.',
  },
}
