export const APP_URL = 'https://app.periovox.ai'
export const CONTACT_EMAIL = 'info@periovox.ai'
export const LANGUAGE_STORAGE_KEY = 'periovox-language'
export const COOKIE_CONSENT_KEY = 'periovox-cookie-consent'
export const COOKIE_OPEN_EVENT = 'periovox:open-cookie-settings'

export const legalDocuments = {
  terms: '/legal/terms-of-use-en.pdf',
  cookies: '/legal/cookie-policy-en.pdf',
  privacy: {
    en: '/legal/privacy-notice-en.pdf',
    es: '/legal/privacy-notice-es.pdf',
  },
}

export const socialLinks = {
  facebook: 'https://facebook.com/periovox',
  instagram: 'https://www.instagram.com/periovox.ai',
  linkedin: 'https://www.linkedin.com/company/periovox-ai/about/?viewAsMember=true',
}

export const languages = [
  { code: 'en', label: 'EN', nativeLabel: 'English' },
  { code: 'es', label: 'ES', nativeLabel: 'Español' },
]

const sectionIds = {
  workflow: '#workflow',
  difference: '#difference',
  trust: '#trust',
  contact: '#contact',
}

export const siteContent = {
  en: {
    locale: 'en',
    meta: {
      title: 'PerioVoxAI | Periodontal charting by voice',
      description:
        'PerioVoxAI lets dentists create complete periodontal charts by voice. No assistant. No hardware. Currently free to use.',
    },
    nav: [
      { label: 'How it works', href: sectionIds.workflow },
      { label: 'Why it wins', href: sectionIds.difference },
      { label: 'Trust', href: sectionIds.trust },
      { label: 'Contact', href: sectionIds.contact },
    ],
    buttons: {
      primary: 'Open the App',
      secondary: 'See how it works',
      cookieSettings: 'Cookie Settings',
    },
    hero: {
      eyebrow: 'Currently free to use',
      badge: 'Version 1.0',
      title: 'Periodontal charting by voice.',
      description:
        'Create a complete periodontal chart on your own. No assistant. No hardware. Just speak.',
      valueStatement:
        'The software-first alternative to expensive periodontal hardware systems, built for real chairside flow.',
      ctaNote: 'Free access for dental professionals. Works in the browser.',
      productShotLabel: 'Actual product screen',
      productShotCaption: 'PerioVoxAI running in the browser during real periodontal charting.',
      disclaimerLabel: 'Clinical Use Notice',
      disclaimer:
        'PerioVoxAI is an informational support tool only and does not replace professional judgment, diagnosis, treatment planning, or medical/dental decision-making.',
      highlights: [
        {
          icon: 'microphone',
          title: 'Speak the measurements',
          description: 'Dictate periodontal findings naturally while you examine.',
        },
        {
          icon: 'workflow',
          title: 'No assistant needed',
          description: 'Complete the chart yourself without a second operator recording values.',
        },
        {
          icon: 'browser',
          title: 'No hardware required',
          description: 'Runs entirely in the browser with no proprietary probe or device stack.',
        },
      ],
      chips: [
        'AI-generated reports',
        'Comparison across visits',
        '45+ language voice input',
        'ADA and FDI numbering',
      ],
    },
    breakthrough: {
      label: 'Why PerioVoxAI',
      title: 'A premium software workflow for a category that has stayed hardware-led for too long.',
      description:
        'PerioVoxAI reframes periodontal charting around speech, software, and AI assistance instead of extra staff and expensive devices.',
      points: [
        {
          icon: 'browser',
          title: 'Software-native, not equipment-led',
          description: 'Open the browser, start dictating, and work without installing a dedicated room setup.',
        },
        {
          icon: 'sparkles',
          title: 'Advanced without feeling heavy',
          description: 'The AI stays in the background while the workflow feels calm, direct, and clinically practical.',
        },
        {
          icon: 'workflow',
          title: 'Built for adoption',
          description: 'Lower friction makes full periodontal charting easier to perform consistently.',
        },
      ],
    },
    problem: {
      label: 'The Old Way Is Broken',
      title: 'Traditional periodontal charting still feels like a workaround.',
      description:
        'It often relies on a second person, interrupts the exam, and can be tied to expensive hardware systems. That friction is exactly why full charting gets avoided.',
      quote:
        'Every extra handoff makes full periodontal charting less likely to happen at the right moment.',
      body:
        'The problem is not the clinical importance. The problem is the workflow burden. PerioVoxAI removes the dependency chain that makes the process feel slower than it should.',
      cards: [
        {
          icon: 'users',
          title: 'Assistant dependency',
          description: 'Traditional perio charting often assumes a second person is available to capture each value.',
        },
        {
          icon: 'workflow',
          title: 'Interrupted workflow',
          description: 'Calling, repeating, confirming, and correcting measurements breaks the rhythm of the exam.',
        },
        {
          icon: 'hardware',
          title: 'Hardware overhead',
          description: 'Electronic probes and dedicated systems add procurement, maintenance, and operatory friction.',
        },
        {
          icon: 'chart',
          title: 'Lower adoption',
          description: 'When charting feels heavy, full periodontal documentation becomes easier to postpone or skip.',
        },
      ],
    },
    workflow: {
      label: 'The PerioVoxAI Approach',
      title: 'A radically simpler path from speech to structured chart.',
      description:
        'The workflow feels obvious the first time you see it. Speak the measurements, let AI structure the data, and watch the chart complete itself.',
      steps: [
        {
          step: '01',
          icon: 'microphone',
          title: 'Speak periodontal measurements',
          description: 'Dictate pocket depths, recession values, bleeding, mobility, furcation, and notes as part of the normal exam.',
          visual: 'voice',
        },
        {
          step: '02',
          icon: 'sparkles',
          title: 'AI interprets and structures the data',
          description:
            'PerioVoxAI maps spoken sequences, applies context, understands numbering preferences, and keeps the workflow coherent in real time.',
          visual: 'interpret',
        },
        {
          step: '03',
          icon: 'chart',
          title: 'The periodontal chart is generated automatically',
          description: 'The chart updates instantly and is ready for documentation, reporting, and longitudinal review.',
          visual: 'chart',
        },
      ],
      footer: 'Voice in. Structure out. Report ready. That is the whole idea.',
    },
    voiceSection: {
      label: 'Why Voice Changes Periodontal Charting Forever',
      title: 'A natural conversation instead of a rigid command system.',
      description:
        'PerioVoxAI is designed to understand the way dentists actually speak while probing. You do not have to memorize a robotic syntax or stop the exam to operate software.',
      bullets: [
        'Speak naturally while you probe.',
        'Make conversational corrections at any moment.',
        'Update previous teeth without restarting the flow.',
        'Work closer to clinical thinking than to data entry.',
      ],
      transcriptTitle: 'Natural interaction examples',
      transcript: [
        '“Thirty-six: three, two, three. Bleeding distal.”',
        '“Actually, add bleeding on the mesial of thirty-five.”',
        '“Mobility grade one on eleven. Furcation on twenty-six.”',
      ],
      note:
        'The goal is simple: probe normally, speak naturally, and let the system handle the structure.',
    },
    context: {
      label: 'Clinical Context Matters',
      title: 'Better context, better interpretation.',
      description:
        'PerioVoxAI includes short medical questionnaires that help provide clinical context before or during charting, so the AI can interpret findings more intelligently without slowing the workflow.',
      bullets: [
        {
          icon: 'clipboard',
          title: 'Short medical questionnaires',
          description: 'Relevant medical history, medication context, and risk factors can be added without turning the workflow into an intake marathon.',
        },
        {
          icon: 'sparkles',
          title: 'Smarter suggestions',
          description: 'Structured context helps the AI interpret findings more usefully than a chart built from measurements alone.',
        },
        {
          icon: 'workflow',
          title: 'Designed to stay lightweight',
          description: 'The questionnaires are practical and intentionally brief, so they fit naturally into chairside work.',
        },
      ],
    },
    difference: {
      label: 'Why It Feels Different',
      title: 'A category reset instead of another hardware workflow.',
      description:
        'PerioVoxAI is built to feel lighter, faster, and more intelligent than traditional periodontal systems.',
      bullets: [
        {
          icon: 'check',
          title: 'Chairside momentum stays intact',
          description: 'You speak, the chart updates, and the appointment keeps moving.',
        },
        {
          icon: 'browser',
          title: 'A browser instead of a device stack',
          description: 'PerioVoxAI behaves like modern software, not like room-bound equipment.',
        },
        {
          icon: 'report',
          title: 'Documentation is part of the workflow',
          description: 'Charts, reports, and longitudinal review live in one continuous product experience.',
        },
        {
          icon: 'clipboard',
          title: 'Context-aware, not just record-aware',
          description: 'Short questionnaires help the AI understand the case instead of only storing measurements.',
        },
      ],
      comparison: {
        header: 'Comparison',
        category: 'Category',
        traditional: 'Traditional systems',
        periovox: 'PerioVoxAI',
        rows: [
          { label: 'Assistant required', traditional: 'Often yes', periovox: 'Not required' },
          { label: 'Hardware required', traditional: 'Often proprietary', periovox: 'None' },
          { label: 'Setup complexity', traditional: 'High', periovox: 'Open the browser and start' },
          { label: 'Workflow speed', traditional: 'Interrupted by handoffs', periovox: 'Direct chairside dictation' },
          { label: 'Accessibility', traditional: 'Tied to equipment', periovox: 'Wherever the browser runs' },
          { label: 'Cost profile', traditional: 'Device-heavy', periovox: 'Software-first' },
        ],
      },
    },
    reports: {
      label: 'AI-Generated Reports',
      title: 'From voice to structured periodontal documentation.',
      description:
        'PerioVoxAI automatically generates structured reports after each periodontal chart, turning a spoken workflow into something clinically useful and professionally formatted.',
      bullets: [
        {
          icon: 'report',
          title: 'Structured after every chart',
          description: 'Each completed chart can produce a polished periodontal report without extra admin work.',
        },
        {
          icon: 'sparkles',
          title: 'Clinically useful summaries',
          description: 'AI turns spoken findings into cleaner documentation that is easier to review and share.',
        },
        {
          icon: 'chart',
          title: 'Fewer manual follow-up tasks',
          description: 'Documentation becomes a result of the workflow instead of a separate workflow.',
        },
      ],
    },
    insights: {
      label: 'AI Comparison Over Time',
      title: 'Not just charting. Longitudinal insight.',
      description:
        'PerioVoxAI can compare periodontal charts from different visits, helping surface relevant change and progression without forcing the clinician to reconstruct the story manually.',
      bullets: [
        {
          icon: 'timeline',
          title: 'Compare visits over time',
          description: 'PerioVoxAI can place periodontal charts from different visits side by side for faster review.',
        },
        {
          icon: 'sparkles',
          title: 'AI surfaces relevant change',
          description: 'The product highlights progression, improvement, and notable movement between appointments.',
        },
        {
          icon: 'chart',
          title: 'Longitudinal intelligence',
          description: 'The system becomes more valuable than a static chart because it adds context over time.',
        },
      ],
    },
    hardware: {
      label: 'No Hardware. No Barriers.',
      title: 'Works entirely in your browser.',
      description:
        'No probes, no installation, no dedicated hardware. Just your voice and your workflow. PerioVoxAI is the software-first alternative to expensive hardware-dependent periodontal systems.',
      bullets: [
        {
          icon: 'browser',
          title: 'Works entirely in your browser',
          description: 'No installation burden and no room-specific hardware footprint.',
        },
        {
          icon: 'hardware',
          title: 'No probes, no dedicated setup',
          description: 'PerioVoxAI replaces hardware dependency with a software-first workflow.',
        },
        {
          icon: 'workflow',
          title: 'Just your voice and your workflow',
          description: 'Lower friction means easier adoption across clinicians and operatories.',
        },
      ],
    },
    language: {
      label: 'Global Flexibility',
      title: 'Available in English and Spanish. Voice input in 45+ languages.',
      description:
        'PerioVoxAI is built for international dental workflows. Clinics can work in the language and numbering system that already fits daily practice.',
      bullets: [
        {
          icon: 'globe',
          title: 'Available in English and Spanish',
          description: 'The interface is currently available in English and Spanish for immediate day-to-day use.',
        },
        {
          icon: 'microphone',
          title: 'Voice input in 45+ languages',
          description: 'Clinics and professionals can speak or enter data naturally in more than 45 languages.',
        },
        {
          icon: 'chart',
          title: 'ADA and FDI numbering support',
          description: 'Dentists can choose ADA or FDI notation so PerioVoxAI adapts to existing clinical habits instead of forcing change.',
        },
        {
          icon: 'browser',
          title: 'Built for international dental workflows',
          description: 'PerioVoxAI scales across countries, teams, and multilingual clinics without changing the core experience.',
        },
      ],
    },
    principles: {
      label: 'Built for Modern Dentists',
      title: 'Designed by dentists for dentists.',
      description:
        'PerioVoxAI is shaped around real chairside rhythm, lower friction, and practical documentation instead of a demo-first workflow.',
      cards: [
        {
          icon: 'workflow',
          title: 'Faster workflow',
          description: 'Less repetition, fewer handoffs, and less mental context switching during charting.',
        },
        {
          icon: 'report',
          title: 'Cleaner documentation',
          description: 'Better structure makes clinical notes easier to trust, review, and complete.',
        },
        {
          icon: 'sparkles',
          title: 'Lower friction, higher adoption',
          description: 'The easier charting becomes, the easier it is to make full periodontal charting routine.',
        },
        {
          icon: 'chart',
          title: 'Clinical practicality first',
          description: 'Everything is optimized for real use, not for a demo that falls apart at the chair.',
        },
      ],
      imageAlt: 'Dentist treating a patient in a clinic',
    },
    roadmap: {
      label: 'Version 1.0',
      title: 'Built in public, improving fast.',
      description:
        'PerioVoxAI is transparent about being at the beginning of a larger product journey. That is not a weakness. It is how the product improves quickly with real clinical feedback.',
      items: [
        {
          icon: 'microphone',
          status: 'Live in 1.0',
          title: 'Voice-first charting core',
          description: 'The core periodontal voice workflow is available now and designed to feel immediately useful.',
        },
        {
          icon: 'sparkles',
          status: 'Improving now',
          title: 'Fast iteration from real feedback',
          description: 'Recognition quality, UX clarity, and AI assistance are improving quickly with real clinical input.',
        },
        {
          icon: 'timeline',
          status: 'Built in public',
          title: 'Transparent product ambition',
          description: 'Versioning is explicit because the team is moving fast and making progress visible.',
        },
      ],
    },
    trust: {
      label: 'Privacy, Trust & Responsible Use',
      title: 'Calm, clear, and privacy-first.',
      description:
        'PerioVoxAI is built for professional use and designed so the core workflow does not depend on storing patient-identifiable clinical data. Limited business or contact data is processed only when you choose to submit it.',
      cards: [
        {
          icon: 'shield',
          title: 'No patient-identifiable clinical data by design',
          description: 'The core workflow is designed to avoid storing patient-identifiable clinical data as part of routine product use.',
        },
        {
          icon: 'shield',
          title: 'No personal data sold',
          description: 'PerioVoxAI does not sell personal data or patient data. That boundary is intentional.',
        },
        {
          icon: 'chart',
          title: 'Anonymous product statistics only where applicable',
          description: 'Anonymous or aggregated usage signals may be used to improve the product experience and understand adoption.',
        },
        {
          icon: 'users',
          title: 'Professional-only context',
          description: 'PerioVoxAI is intended for dentists, clinics, universities, and professional dental teams rather than direct consumer use.',
        },
      ],
      disclaimerLabel: 'Important',
      disclaimer:
        'PerioVoxAI is an informational support tool only and does not replace professional judgment, diagnosis, treatment planning, or medical/dental decision-making.',
    },
    access: {
      label: 'Simple Access',
      title: 'PerioVoxAI is currently free to use for dental professionals.',
      description:
        'This is a premium, modern AI workflow that is intentionally accessible right now. No hardware, no assistant, and currently no paywall to start using it.',
      badge: 'Currently free to use',
    },
    sustainability: {
      label: 'How PerioVoxAI Stays Free',
      title: 'Transparent sustainability with clear ethical boundaries.',
      description:
        'The goal is to keep PerioVoxAI accessible. Sustainability is supported by limited, non-intrusive dental industry partner banners and anonymous aggregated statistical insights.',
      items: [
        {
          icon: 'banner',
          title: 'Limited partner banners',
          description: 'A small number of tasteful banners from dental industry partners may help support the product.',
        },
        {
          icon: 'chart',
          title: 'Anonymous aggregated insights',
          description: 'High-level usage patterns can help improve the product and inform sustainability without exposing patient data.',
        },
        {
          icon: 'shield',
          title: 'Hard ethical boundary',
          description: 'No personal or patient data is sold. The product model is constrained on purpose.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Questions, feedback, or partnership inquiries?',
      description: 'We would love to hear from you.',
      directLabel: 'Direct email',
      helper: 'If you prefer, you can contact us directly by email at any time.',
      cardTitle: 'Open your email app and write to the PerioVoxAI team.',
      cardDescription:
        'Click the button below and your default mail app will open a new message addressed to info@periovox.ai.',
      cta: 'Open email app',
    },
    finalCta: {
      label: 'Start using PerioVoxAI today.',
      title: 'The fastest way to chart periodontally by voice.',
      description: 'No hardware. No assistant. Currently free to use.',
    },
    footer: {
      tagline: 'Voice-first periodontal charting for modern dental teams.',
      sections: {
        product: 'Product',
        legal: 'Legal',
        social: 'Social',
      },
      links: {
        about: 'About',
        privacy: 'Privacy Notice',
        terms: 'Terms of Use',
        cookies: 'Cookie Policy',
        contact: 'Contact',
      },
      disclaimerLabel: 'Professional Use Disclaimer',
      disclaimer:
        'PerioVoxAI is an informational support tool only and does not replace professional judgment, diagnosis, treatment planning, or medical/dental decision-making.',
      copyright: 'PerioVoxAI. All rights reserved.',
    },
    cookie: {
      title: 'Cookie Preferences',
      description:
        'PerioVoxAI uses strictly necessary cookies and, where applicable, preference, analytics, and banner measurement cookies according to our Cookie Policy.',
      accept: 'Accept all',
      reject: 'Reject non-essential',
      settings: 'Cookie settings',
      save: 'Save preferences',
      close: 'Close',
      alwaysOn: 'Always active',
      categories: [
        {
          key: 'necessary',
          title: 'Strictly necessary cookies',
          description:
            'Required for core website and application operation, security, session continuity, and storing consent choices.',
        },
        {
          key: 'preferences',
          title: 'Preference / functionality cookies',
          description:
            'Used to remember choices such as language, display format, and interface preferences where applicable.',
        },
        {
          key: 'analytics',
          title: 'Analytics / measurement cookies',
          description:
            'Used to understand pages visited, session duration, feature interactions, language usage, and numbering preferences in aggregate.',
        },
        {
          key: 'advertising',
          title: 'Advertising / banner measurement cookies',
          description:
            'Used only where applicable to measure promotional or partner banner performance without changing the core product experience.',
        },
      ],
      links: {
        privacy: 'Privacy Notice',
        terms: 'Terms of Use',
        cookies: 'Cookie Policy',
      },
    },
    visuals: {
      heroMockup: {
        floatingLeft: 'No assistant needed',
        floatingRight: 'Browser-based. No hardware.',
        domain: 'app.periovox.ai',
        voiceTitle: 'Voice capture',
        voiceSubtitle: 'Chairside dictation active',
        listening: 'Listening',
        spokenInput: 'Spoken input',
        transcript: [
          '"Thirty-six: three, two, three. Bleeding distal."',
          '"Add recession one on twenty-six."',
          '"Actually, add bleeding on the mesial of thirty-five."',
        ],
        assistantLabel: 'Assistant',
        assistantValue: 'Not required',
        hardwareLabel: 'Hardware',
        hardwareValue: 'None',
        chartTitle: 'Periodontal chart',
        toothLabel: 'Tooth',
        chartSubtitle: 'Real-time completion',
        chartTag: 'Structured instantly',
        aiTitle: 'AI interpretation',
        aiDescription: 'Spoken sequences are mapped to the right chart fields as you speak.',
        reportTitle: 'Report ready',
        reportDescription: 'Structured documentation is available immediately after chart completion.',
      },
      contextCard: {
        eyebrow: 'Clinical context layer',
        title: 'Short questionnaires, smarter interpretation',
        badge: 'Low friction',
        questionnaireTitle: 'Short medical questionnaire',
        questionnaireItems: ['Relevant medical history', 'Current medications', 'Risk factors or context'],
        shortLabel: 'Short',
        insightTitle: 'AI interpretation',
        insightBody:
          'Better context, better interpretation. Structured clinical input helps PerioVoxAI understand the case and generate more useful suggestions.',
        insightItems: [
          'Interprets findings with more context',
          'Keeps suggestions grounded in structured input',
          'Fits naturally before or during charting',
        ],
      },
      reportCard: {
        badge: 'Generated instantly',
        eyebrow: 'Structured periodontal report',
        title: 'From voice to finished documentation',
        summaryLabel: 'Visit summary',
        summary:
          'Complete periodontal chart captured by voice with structured findings and a clean narrative summary.',
        findingsLabel: 'Findings',
        findings: [
          'Pocket depth patterns mapped automatically',
          'Bleeding and recession recorded cleanly',
          'Ready for immediate review',
        ],
        formatLabel: 'Format',
        format: ['Structured layout', 'Professional output', 'Fewer manual follow-ups'],
      },
      timelineCard: {
        visitA: 'Visit A',
        visitATitle: 'Baseline',
        visitAStatus: 'Archived',
        visitAItems: ['Generalized 4 mm pockets', 'Bleeding sites elevated', 'Initial chart complete'],
        visitB: 'Visit B',
        visitBTitle: 'Follow-up',
        visitBStatus: 'Compared',
        visitBItems: ['Reduced bleeding sites', 'Pocket depth improvements surfaced', 'Changes summarized automatically'],
        summaryTitle: 'AI comparison summary',
        summary:
          'The product helps surface what changed between visits and why it matters, without reconstructing the story manually.',
      },
      browserCard: {
        tag: 'app.periovox.ai',
        leftTitle: 'Software-first workflow',
        leftItems: ['Open the browser', 'Start speaking measurements', 'Get the chart and report'],
        rightTitle: 'No proprietary stack',
        rightItems: ['No dedicated probes', 'No installation burden', 'No room-bound device setup'],
        footer: 'Software alternative to expensive hardware systems',
      },
      languageCard: {
        eyebrow: 'Global accessibility',
        title: 'Built for international dental workflows',
        badge: '45+ languages',
        interfaceLabel: 'Interface',
        interfaceTitle: 'English / Spanish',
        interfaceBody: 'The product UI is currently available in English and Spanish.',
        voiceLabel: 'Voice and data input',
        voiceTitle: '45+ languages',
        voiceBody: 'Clinics can work naturally in the language that fits the team and patient flow.',
        notationTitle: 'Tooth numbering flexibility',
        notationBody:
          'PerioVoxAI supports both the ADA Universal Numbering System and FDI notation, so dentists can keep the convention they already use.',
      },
    },
  },
  es: {
    locale: 'es',
    meta: {
      title: 'PerioVoxAI | Periodontograma por voz',
      description:
        'PerioVoxAI permite crear un periodontograma completo por voz. Sin asistente. Sin hardware. Actualmente es gratis.',
    },
    nav: [
      { label: 'Cómo funciona', href: sectionIds.workflow },
      { label: 'Por qué destaca', href: sectionIds.difference },
      { label: 'Confianza', href: sectionIds.trust },
      { label: 'Contacto', href: sectionIds.contact },
    ],
    buttons: {
      primary: 'Open the App',
      secondary: 'Ver cómo funciona',
      cookieSettings: 'Configurar cookies',
    },
    hero: {
      eyebrow: 'Actualmente gratis',
      badge: 'Versión 1.0',
      title: 'Periodontograma por voz.',
      description:
        'Crea un periodontograma completo por tu cuenta. Sin asistente. Sin hardware. Solo habla.',
      valueStatement:
        'La alternativa software a los costosos sistemas periodontales basados en hardware, pensada para el flujo real en clínica.',
      ctaNote: 'Acceso gratuito para profesionales dentales. Funciona en el navegador.',
      productShotLabel: 'Pantalla real del producto',
      productShotCaption: 'PerioVoxAI funcionando en el navegador durante el charting periodontal.',
      disclaimerLabel: 'Aviso de uso clínico',
      disclaimer:
        'PerioVoxAI es solo una herramienta de apoyo informativo y no sustituye el juicio profesional, el diagnóstico, la planificación del tratamiento ni la toma de decisiones médicas u odontológicas.',
      highlights: [
        {
          icon: 'microphone',
          title: 'Habla las mediciones',
          description: 'Dicta los hallazgos periodontales de forma natural mientras exploras.',
        },
        {
          icon: 'workflow',
          title: 'Sin asistente',
          description: 'Completa el periodontograma tú mismo sin depender de una segunda persona.',
        },
        {
          icon: 'browser',
          title: 'Sin hardware',
          description: 'Funciona totalmente en el navegador, sin sonda propietaria ni dispositivos dedicados.',
        },
      ],
      chips: [
        'Informes generados por IA',
        'Comparación entre visitas',
        'Entrada por voz en 45+ idiomas',
        'Numeración ADA y FDI',
      ],
    },
    breakthrough: {
      label: 'Por qué PerioVoxAI',
      title: 'Un flujo software premium para una categoría que ha dependido demasiado tiempo del hardware.',
      description:
        'PerioVoxAI replantea el periodontograma alrededor de la voz, el software y la asistencia de IA en lugar de personal extra y dispositivos caros.',
      points: [
        {
          icon: 'browser',
          title: 'Nativo en software, no en equipamiento',
          description: 'Abre el navegador, empieza a dictar y trabaja sin instalar una configuración dedicada por gabinete.',
        },
        {
          icon: 'sparkles',
          title: 'Avanzado sin sentirse pesado',
          description: 'La IA trabaja en segúndo plano mientras el flujo se mantiene calmado, directo y clínicamente práctico.',
        },
        {
          icon: 'workflow',
          title: 'Pensado para adoptarse',
          description: 'Menos fricción hace más fácil realizar el periodontograma completo de forma constante.',
        },
      ],
    },
    problem: {
      label: 'La forma antigua está rota',
      title: 'El periodontograma tradicional sigue sintiéndose como un apaño.',
      description:
        'A menudo depende de una segunda persona, interrumpe la exploración y puede quedar ligado a sistemas caros basados en hardware. Esa fricción es exactamente lo que hace que se deje de lado.',
      quote:
        'Cada relevo adicional hace menos probable que el periodontograma completo se haga en el momento adecuado.',
      body:
        'El problema no es su importancia clínica. El problema es la carga del flujo de trabajo. PerioVoxAI elimina la cadena de dependencia que hace que el proceso parezca más lento de lo que debería.',
      cards: [
        {
          icon: 'users',
          title: 'Dependencia de asistente',
          description: 'El periodontograma convencional suele asumir que hay una segunda persona disponible para registrar cada valor.',
        },
        {
          icon: 'workflow',
          title: 'Flujo interrumpido',
          description: 'Cantar, repetir, confirmar y corregir mediciones rompe el ritmo natural de la exploración.',
        },
        {
          icon: 'hardware',
          title: 'Carga de hardware',
          description: 'Las sondas electrónicas y los sistemas dedicados añaden compra, mantenimiento y fricción operativa.',
        },
        {
          icon: 'chart',
          title: 'Menor adopción',
          description: 'Cuando el periodontograma se siente pesado, la documentación completa se pospone o se omite con más facilidad.',
        },
      ],
    },
    workflow: {
      label: 'El enfoque PerioVoxAI',
      title: 'Una forma radicalmente más simple de pasar de la voz al periodontograma estructurado.',
      description:
        'El flujo se entiende la primera vez que lo ves. Hablas, la IA estructura los datos y el periodontograma se completa al instante.',
      steps: [
        {
          step: '01',
          icon: 'microphone',
          title: 'Habla las mediciones periodontales',
          description:
            'Dicta profundidades de sondaje, recesiones, sangrado, movilidad, furcación y notas como parte normal de la exploración.',
          visual: 'voice',
        },
        {
          step: '02',
          icon: 'sparkles',
          title: 'La IA interpreta y estructura los datos',
          description:
            'PerioVoxAI mapea las secuencias habladas, aplica contexto, entiende la numeración elegida y mantiene la coherencia en tiempo real.',
          visual: 'interpret',
        },
        {
          step: '03',
          icon: 'chart',
          title: 'El periodontograma se genera automáticamente',
          description: 'El gráfico se actualiza al instante y queda listo para documentación, informes y seguimiento longitudinal.',
          visual: 'chart',
        },
      ],
      footer: 'Voz dentro. Estructura fuera. Informe listo. Esa es toda la idea.',
    },
    voiceSection: {
      label: 'Por qué la voz cambia el periodontograma para siempre',
      title: 'Una conversación natural en lugar de un sistema de comandos rígido.',
      description:
        'PerioVoxAI está diseñado para entender la forma real en que habla un dentista mientras explora. No hace falta memorizar una sintaxis robótica ni parar la exploración para manejar el software.',
      bullets: [
        'Habla de forma natural mientras sondas.',
        'Haz correcciones conversacionales en cualquier momento.',
        'Actualiza dientes previos sin reiniciar el flujo.',
        'Trabaja más cerca del pensamiento clínico que de la entrada de datos.',
      ],
      transcriptTitle: 'Ejemplos de interacción natural',
      transcript: [
        '“Treinta y seis: tres, dos, tres. Sangrado distal.”',
        '“En realidad, añade sangrado en la mesial del treinta y cinco.”',
        '“Movilidad grado uno en el once. Furcación en el veintiséis.”',
      ],
      note:
        'La idea es simple: explora con normalidad, habla con naturalidad y deja que el sistema se encargue de la estructura.',
    },
    context: {
      label: 'El contexto clínico importa',
      title: 'Mejor contexto, mejor interpretación.',
      description:
        'PerioVoxAI incluye cuestionarios médicos breves que aportan contexto antes o durante el periodontograma, para que la IA interprete los hallazgos de forma más inteligente sin ralentizar el flujo.',
      bullets: [
        {
          icon: 'clipboard',
          title: 'Cuestionarios médicos breves',
          description: 'Antecedentes relevantes, medicación y factores de riesgo se pueden añadir sin convertir el flujo en una admisión interminable.',
        },
        {
          icon: 'sparkles',
          title: 'Sugerencias más inteligentes',
          description: 'El contexto estructurado ayuda a que la IA interprete mejor los hallazgos que un gráfico basado solo en medidas.',
        },
        {
          icon: 'workflow',
          title: 'Ligero por diseño',
          description: 'Los cuestionarios son prácticos y deliberadamente breves para encajar de forma natural en el trabajo clínico.',
        },
      ],
    },
    difference: {
      label: 'Por qué se siente diferente',
      title: 'Un reinicio de categoría en lugar de otro flujo dependiente del hardware.',
      description:
        'PerioVoxAI está construido para sentirse más ligero, más rápido y más inteligente que los sistemas periodontales tradicionales.',
      bullets: [
        {
          icon: 'check',
          title: 'El ritmo en gabinete se mantiene',
          description: 'Hablas, el gráfico se actualiza y la cita sigue avanzando.',
        },
        {
          icon: 'browser',
          title: 'Un navegador en lugar de una pila de dispositivos',
          description: 'PerioVoxAI se comporta como software moderno, no como equipamiento atado a una sala.',
        },
        {
          icon: 'report',
          title: 'La documentación forma parte del flujo',
          description: 'Gráficos, informes y comparación longitudinal viven en una sola experiencia.',
        },
        {
          icon: 'clipboard',
          title: 'Consciente del contexto, no solo del registro',
          description: 'Los cuestionarios breves ayudan a la IA a entender el caso en lugar de limitarse a guardar medidas.',
        },
      ],
      comparison: {
        header: 'Comparativa',
        category: 'Categoría',
        traditional: 'Sistemas tradicionales',
        periovox: 'PerioVoxAI',
        rows: [
          { label: 'Asistente necesario', traditional: 'A menudo sí', periovox: 'No necesario' },
          { label: 'Hardware necesario', traditional: 'Habitualmente propietario', periovox: 'Ninguno' },
          { label: 'Complejidad de puesta en marcha', traditional: 'Alta', periovox: 'Abrir el navegador y empezar' },
          { label: 'Velocidad de trabajo', traditional: 'Interrumpida por relevos', periovox: 'Dictado directo en gabinete' },
          { label: 'Accesibilidad', traditional: 'Atado al equipamiento', periovox: 'Donde funcione el navegador' },
          { label: 'Perfil de coste', traditional: 'Pesado en dispositivos', periovox: 'Enfocado en software' },
        ],
      },
    },
    reports: {
      label: 'Informes generados por IA',
      title: 'De la voz a la documentación periodontal estructurada.',
      description:
        'PerioVoxAI genera informes estructurados después de cada periodontograma, convirtiendo un flujo hablado en algo útil clínicamente y bien presentado.',
      bullets: [
        {
          icon: 'report',
          title: 'Estructurados tras cada gráfico',
          description: 'Cada periodontograma completado puede producir un informe pulido sin trabajo administrativo extra.',
        },
        {
          icon: 'sparkles',
          title: 'Resúmenes clínicamente útiles',
          description: 'La IA transforma los hallazgos dictados en documentación más limpia, más fácil de revisar y compartir.',
        },
        {
          icon: 'chart',
          title: 'Menos tareas manuales después',
          description: 'La documentación pasa a ser un resultado del flujo en lugar de otro flujo separado.',
        },
      ],
    },
    insights: {
      label: 'Comparación con IA en el tiempo',
      title: 'No solo charting. Visión longitudinal.',
      description:
        'PerioVoxAI puede comparar periodontogramas de distintas visitas y sacar a la luz cambios relevantes sin obligar al clínico a reconstruir la historia manualmente.',
      bullets: [
        {
          icon: 'timeline',
          title: 'Compara visitas en el tiempo',
          description: 'PerioVoxAI coloca periodontogramas de distintas visitas uno junto a otro para revisarlos más rápido.',
        },
        {
          icon: 'sparkles',
          title: 'La IA destaca el cambio relevante',
          description: 'El producto resalta progresión, mejora y movimientos relevantes entre citas.',
        },
        {
          icon: 'chart',
          title: 'Inteligencia longitudinal',
          description: 'El sistema aporta más valor que un gráfico estático porque añade contexto a lo largo del tiempo.',
        },
      ],
    },
    hardware: {
      label: 'Sin hardware. Sin barreras.',
      title: 'Funciona completamente en tu navegador.',
      description:
        'Sin sondas, sin instalación, sin hardware dedicado. Solo tu voz y tu flujo de trabajo. PerioVoxAI es la alternativa software a los costosos sistemas periodontales dependientes del hardware.',
      bullets: [
        {
          icon: 'browser',
          title: 'Funciona por completo en el navegador',
          description: 'Sin carga de instalación ni huella de hardware específica por gabinete.',
        },
        {
          icon: 'hardware',
          title: 'Sin sondas ni configuraciones dedicadas',
          description: 'PerioVoxAI sustituye la dependencia del hardware por un flujo centrado en software.',
        },
        {
          icon: 'workflow',
          title: 'Solo tu voz y tu flujo',
          description: 'Menos fricción significa una adopción más fácil entre clínicos y gabinetes.',
        },
      ],
    },
    language: {
      label: 'Flexibilidad global',
      title: 'Disponible en inglés y español. Entrada por voz en más de 45 idiomas.',
      description:
        'PerioVoxAI está pensado para flujos dentales internacionales. Cada clínica puede trabajar con el idioma y el sistema de numeración que ya usa a diario.',
      bullets: [
        {
          icon: 'globe',
          title: 'Disponible en inglés y español',
          description: 'La interfaz está disponible en inglés y español para su uso diario inmediato.',
        },
        {
          icon: 'microphone',
          title: 'Entrada por voz en 45+ idiomas',
          description: 'Clínicas y profesionales pueden hablar o introducir datos de forma natural en más de 45 idiomas.',
        },
        {
          icon: 'chart',
          title: 'Compatibilidad ADA y FDI',
          description: 'El dentista puede elegir ADA o FDI para que PerioVoxAI se adapte al hábito clínico existente.',
        },
        {
          icon: 'browser',
          title: 'Pensado para flujos internacionales',
          description: 'PerioVoxAI escala entre países, equipos y clínicas multilingües sin cambiar la experiencia central.',
        },
      ],
    },
    principles: {
      label: 'Hecho para dentistas modernos',
      title: 'Diseñado por dentistas para dentistas.',
      description:
        'PerioVoxAI se construye alrededor del ritmo real en gabinete, la baja fricción y una documentación práctica, no de una demo vistosa.',
      cards: [
        {
          icon: 'workflow',
          title: 'Flujo más rápido',
          description: 'Menos repeticiones, menos relevos y menos cambios de contexto mental durante el periodontograma.',
        },
        {
          icon: 'report',
          title: 'Documentación más limpia',
          description: 'Una mejor estructura hace que las notas clínicas sean más fáciles de confiar, revisar y completar.',
        },
        {
          icon: 'sparkles',
          title: 'Menor fricción, mayor adopción',
          description: 'Cuanto más fácil es el periodontograma, más fácil es convertirlo en una rutina clínica.',
        },
        {
          icon: 'chart',
          title: 'Practicidad clínica primero',
          description: 'Todo está optimizado para el uso real, no para una demo que se rompe en la silla.',
        },
      ],
      imageAlt: 'Profesional dental atendiendo a un paciente',
    },
    roadmap: {
      label: 'Versión 1.0',
      title: 'Construido en público, mejorando rápido.',
      description:
        'PerioVoxAI es transparente al reconocer que está al principio de un viaje de producto más amplio. Eso no es una debilidad. Es la forma de mejorar rápido con feedback clínico real.',
      items: [
        {
          icon: 'microphone',
          status: 'Disponible en 1.0',
          title: 'Núcleo de charting por voz',
          description: 'El flujo central de periodontograma por voz ya está disponible y busca ser útil desde el primer uso.',
        },
        {
          icon: 'sparkles',
          status: 'Mejorando ahora',
          title: 'Iteración rápida con feedback real',
          description: 'La calidad de reconocimiento, la claridad de UX y la asistencia de IA mejoran rápidamente con uso clínico real.',
        },
        {
          icon: 'timeline',
          status: 'Construido en público',
          title: 'Ambición transparente de producto',
          description: 'La versión es explícita porque el equipo avanza rápido y hace visible el progreso.',
        },
      ],
    },
    trust: {
      label: 'Privacidad, confianza y uso responsable',
      title: 'Claro, sereno y orientado a la privacidad.',
      description:
        'PerioVoxAI está pensado para uso profesional y se diseña para que el flujo principal no dependa de almacenar datos clínicos identificables del paciente. Los datos de negocio o contacto solo se procesan cuando decides enviarlos.',
      cards: [
        {
          icon: 'shield',
          title: 'Sin datos clínicos identificables por diseño',
          description: 'El flujo principal está pensado para evitar almacenar datos clínicos identificables del paciente en el uso rutinario.',
        },
        {
          icon: 'shield',
          title: 'No se venden datos personales',
          description: 'PerioVoxAI no vende datos personales ni datos de pacientes. Ese límite es deliberado.',
        },
        {
          icon: 'chart',
          title: 'Solo estadísticas anónimas cuando corresponda',
          description: 'Se pueden usar señales anónimas o agregadas para mejorar la experiencia y entender la adopción.',
        },
        {
          icon: 'users',
          title: 'Contexto de uso profesional',
          description: 'PerioVoxAI está pensado para dentistas, clínicas, universidades y equipos profesionales, no para uso directo del consumidor.',
        },
      ],
      disclaimerLabel: 'Importante',
      disclaimer:
        'PerioVoxAI es solo una herramienta de apoyo informativo y no sustituye el juicio profesional, el diagnóstico, la planificación del tratamiento ni la toma de decisiones médicas u odontológicas.',
    },
    access: {
      label: 'Acceso simple',
      title: 'PerioVoxAI es actualmente gratuito para profesionales dentales.',
      description:
        'Es un flujo de IA premium, moderno y útil que ahora mismo es deliberadamente accesible. Sin hardware, sin asistente y sin barrera de precio para empezar.',
      badge: 'Actualmente gratis',
    },
    sustainability: {
      label: 'Cómo se mantiene gratis PerioVoxAI',
      title: 'Sostenibilidad transparente con límites éticos claros.',
      description:
        'El objetivo es mantener PerioVoxAI accesible. La sostenibilidad se apoya en banners limitados y no intrusivos de partners del sector dental y en señales estadísticas anónimas y agregadas.',
      items: [
        {
          icon: 'banner',
          title: 'Banners limitados de partners',
          description: 'Un número pequeño de banners cuidados del sector dental puede ayudar a sostener el producto.',
        },
        {
          icon: 'chart',
          title: 'Insights anónimos y agregados',
          description: 'Los patrones de uso de alto nivel ayudan a mejorar el producto sin exponer datos de pacientes.',
        },
        {
          icon: 'shield',
          title: 'Límite ético firme',
          description: 'No se venden datos personales ni de pacientes. El modelo del producto está restringido a propósito.',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: '¿Preguntas, feedback o colaboraciones?',
      description: 'Nos encantará leerte.',
      directLabel: 'Correo directo',
      helper: 'Si lo prefieres, puedes escribirnos directamente por correo en cualquier momento.',
      cardTitle: 'Abre tu programa de correo y escribe al equipo de PerioVoxAI.',
      cardDescription:
        'Haz clic en el botón y se abrirá tu aplicación de correo predeterminada con un nuevo mensaje dirigido a info@periovox.ai.',
      cta: 'Abrir correo',
    },
    finalCta: {
      label: 'Empieza a usar PerioVoxAI hoy.',
      title: 'La forma más rápida de hacer periodontograma por voz.',
      description: 'Sin hardware. Sin asistente. Actualmente gratis.',
    },
    footer: {
      tagline: 'Periodontograma por voz para equipos dentales modernos.',
      sections: {
        product: 'Producto',
        legal: 'Legal',
        social: 'Social',
      },
      links: {
        about: 'Acerca de',
        privacy: 'Aviso de privacidad',
        terms: 'Condiciones de uso',
        cookies: 'Política de cookies',
        contact: 'Contacto',
      },
      disclaimerLabel: 'Aviso profesional',
      disclaimer:
        'PerioVoxAI es solo una herramienta de apoyo informativo y no sustituye el juicio profesional, el diagnóstico, la planificación del tratamiento ni la toma de decisiones médicas u odontológicas.',
      copyright: 'PerioVoxAI. Todos los derechos reservados.',
    },
    cookie: {
      title: 'Preferencias de cookies',
      description:
        'PerioVoxAI utiliza cookies estrictamente necesarias y, cuando corresponde, cookies de preferencias, analítica y medición de banners, según nuestra Política de Cookies.',
      accept: 'Aceptar todo',
      reject: 'Rechazar no esenciales',
      settings: 'Configurar cookies',
      save: 'Guardar preferencias',
      close: 'Cerrar',
      alwaysOn: 'Siempre activas',
      categories: [
        {
          key: 'necessary',
          title: 'Cookies estrictamente necesarias',
          description:
            'Necesarias para el funcionamiento básico del sitio y la aplicación, la seguridad, la continuidad de sesión y el almacenamiento de la elección de consentimiento.',
        },
        {
          key: 'preferences',
          title: 'Cookies de preferencias / funcionalidad',
          description:
            'Permiten recordar decisiones como idioma, formato de visualización y preferencias de interfaz cuando corresponda.',
        },
        {
          key: 'analytics',
          title: 'Cookies de analítica / medición',
          description:
            'Sirven para entender páginas visitadas, duración de sesión, interacciones con funciones, idioma y preferencias de numeración de forma agregada.',
        },
        {
          key: 'advertising',
          title: 'Cookies de publicidad / medición de banners',
          description:
            'Se usan solo cuando corresponde para medir el rendimiento de contenido promocional o banners de partners sin alterar el producto principal.',
        },
      ],
      links: {
        privacy: 'Aviso de privacidad',
        terms: 'Condiciones de uso',
        cookies: 'Política de cookies',
      },
    },
    visuals: {
      heroMockup: {
        floatingLeft: 'Sin asistente',
        floatingRight: 'En navegador. Sin hardware.',
        domain: 'app.periovox.ai',
        voiceTitle: 'Captura por voz',
        voiceSubtitle: 'Dictado en gabinete activo',
        listening: 'Escuchando',
        spokenInput: 'Entrada hablada',
        transcript: [
          '"Treinta y seis: tres, dos, tres. Sangrado distal."',
          '"Añade recesión uno en el veintiséis."',
          '"En realidad, añade sangrado en la mesial del treinta y cinco."',
        ],
        assistantLabel: 'Asistente',
        assistantValue: 'No necesario',
        hardwareLabel: 'Hardware',
        hardwareValue: 'Ninguno',
        chartTitle: 'Periodontograma',
        toothLabel: 'Diente',
        chartSubtitle: 'Completado en tiempo real',
        chartTag: 'Estructurado al instante',
        aiTitle: 'Interpretación por IA',
        aiDescription: 'Las secuencias habladas se asignan al campo correcto mientras hablas.',
        reportTitle: 'Informe listo',
        reportDescription: 'La documentación estructurada queda disponible en cuanto se completa el charting.',
      },
      contextCard: {
        eyebrow: 'Capa de contexto clínico',
        title: 'Cuestionarios breves, interpretación más inteligente',
        badge: 'Baja fricción',
        questionnaireTitle: 'Cuestionario médico breve',
        questionnaireItems: ['Antecedentes relevantes', 'Medicación actual', 'Factores de riesgo o contexto'],
        shortLabel: 'Breve',
        insightTitle: 'Interpretación por IA',
        insightBody:
          'Mejor contexto, mejor interpretación. La entrada clínica estructurada ayuda a que PerioVoxAI entienda el caso y genere sugerencias más útiles.',
        insightItems: [
          'Interpreta los hallazgos con más contexto',
          'Mantiene las sugerencias ancladas en información estructurada',
          'Encaja de forma natural antes o durante el charting',
        ],
      },
      reportCard: {
        badge: 'Generado al instante',
        eyebrow: 'Informe periodontal estructurado',
        title: 'De la voz a la documentación terminada',
        summaryLabel: 'Resumen de visita',
        summary:
          'Periodontograma completo capturado por voz con hallazgos estructurados y un resumen narrativo claro.',
        findingsLabel: 'Hallazgos',
        findings: [
          'Patrones de profundidad mapeados automáticamente',
          'Sangrado y recesión registrados con claridad',
          'Listo para revisión inmediata',
        ],
        formatLabel: 'Formato',
        format: ['Diseño estructurado', 'Salida profesional', 'Menos tareas manuales después'],
      },
      timelineCard: {
        visitA: 'Visita A',
        visitATitle: 'Basal',
        visitAStatus: 'Archivada',
        visitAItems: ['Bolsas generalizadas de 4 mm', 'Sitios con sangrado elevados', 'Charting inicial completo'],
        visitB: 'Visita B',
        visitBTitle: 'Revisión',
        visitBStatus: 'Comparada',
        visitBItems: ['Menos sitios con sangrado', 'Mejoras en profundidad destacadas', 'Cambios resumidos automáticamente'],
        summaryTitle: 'Resumen comparativo por IA',
        summary:
          'El producto ayuda a sacar a la luz qué ha cambiado entre visitas y por qué importa, sin reconstruir la historia manualmente.',
      },
      browserCard: {
        tag: 'app.periovox.ai',
        leftTitle: 'Flujo centrado en software',
        leftItems: ['Abrir el navegador', 'Empezar a dictar mediciones', 'Obtener gráfico e informe'],
        rightTitle: 'Sin stack propietario',
        rightItems: ['Sin sondas dedicadas', 'Sin carga de instalación', 'Sin configuración fija por gabinete'],
        footer: 'Alternativa software a sistemas caros basados en hardware',
      },
      languageCard: {
        eyebrow: 'Accesibilidad global',
        title: 'Pensado para flujos dentales internacionales',
        badge: '45+ idiomas',
        interfaceLabel: 'Interfaz',
        interfaceTitle: 'Inglés / Español',
        interfaceBody: 'La interfaz del producto está disponible actualmente en inglés y español.',
        voiceLabel: 'Entrada de voz y datos',
        voiceTitle: '45+ idiomas',
        voiceBody: 'Las clínicas pueden trabajar de forma natural en el idioma que mejor encaje con su equipo.',
        notationTitle: 'Flexibilidad de numeración dental',
        notationBody:
          'PerioVoxAI admite tanto el sistema ADA como la notación FDI, para que cada dentista mantenga la convención que ya utiliza.',
      },
    },
  },
}
