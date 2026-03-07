import { startTransition, useEffect, useState } from 'react'
import { BrandLogo } from './components/BrandLogo'
import { CookieConsent } from './components/CookieConsent'
import {
  ArrowUpRightIcon,
  BannerIcon,
  BrowserIcon,
  ChartIcon,
  CheckIcon,
  ClipboardIcon,
  CloseIcon,
  FacebookIcon,
  GlobeIcon,
  HardwareIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  MicrophoneIcon,
  ReportIcon,
  ShieldIcon,
  SparklesIcon,
  TimelineIcon,
  UsersIcon,
  WorkflowIcon,
} from './components/Icons'
import { SectionHeader } from './components/SectionHeader'
import { SectionReveal } from './components/SectionReveal'
import {
  BrowserFlowCard,
  LanguagePreviewCard,
  TimelinePreview,
  WorkflowCardVisual,
} from './components/SurfaceBlocks'
import {
  APP_URL,
  CONTACT_EMAIL,
  COOKIE_OPEN_EVENT,
  LANGUAGE_STORAGE_KEY,
  languages,
  legalDocuments,
  siteContent,
  socialLinks,
} from './content'

const iconMap = {
  banner: BannerIcon,
  browser: BrowserIcon,
  chart: ChartIcon,
  check: CheckIcon,
  clipboard: ClipboardIcon,
  globe: GlobeIcon,
  hardware: HardwareIcon,
  microphone: MicrophoneIcon,
  report: ReportIcon,
  shield: ShieldIcon,
  sparkles: SparklesIcon,
  timeline: TimelineIcon,
  users: UsersIcon,
  workflow: WorkflowIcon,
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
}

function readInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (savedLanguage === 'en' || savedLanguage === 'es') {
    return savedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function PrimaryButton({ label, className = '' }) {
  return (
    <a href={APP_URL} target="_blank" rel="noreferrer" className={`cta-primary ${className}`}>
      {label}
      <ArrowUpRightIcon />
    </a>
  )
}

function LanguageSwitcher({ language, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/80 bg-white/[0.88] p-1 shadow-[0_18px_40px_-30px_rgba(8,19,33,0.24)]">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
            language === item.code ? 'bg-ink text-white shadow-[0_16px_30px_-18px_rgba(8,19,33,0.4)]' : 'text-slate-500 hover:text-ink'
          }`}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

function Bullet({ icon, title, description, className = '' }) {
  const Icon = iconMap[icon]

  return (
    <div className={`rounded-[28px] border border-white/90 bg-white/[0.84] p-5 shadow-soft ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function ComparisonRow({ row, categoryLabel, traditionalLabel, periovoxLabel }) {
  return (
    <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.05] px-5 py-5 sm:grid-cols-[1.08fr_0.92fr_0.92fr] sm:items-stretch lg:px-7 lg:py-6">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.4] sm:hidden">{categoryLabel}</div>
        <div className="mt-1 text-base font-semibold text-white sm:mt-0 lg:text-lg">{row.label}</div>
      </div>
      <div className="rounded-[24px] border border-white/8 bg-white/[0.04] px-4 py-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.4] sm:hidden">{traditionalLabel}</div>
        <div className="mt-1 text-sm font-medium leading-7 text-white/[0.72] sm:mt-0 lg:text-base">{row.traditional}</div>
      </div>
      <div className="rounded-[24px] border border-brand/15 bg-gradient-to-br from-[#00aac3]/12 to-[#00e2ae]/10 px-4 py-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.48] sm:hidden">{periovoxLabel}</div>
        <div className="mt-1 flex items-center gap-2 text-sm font-semibold leading-7 text-white sm:mt-0 lg:text-base">
          <CheckIcon className="h-4 w-4 shrink-0 text-mint" />
          {row.periovox}
        </div>
      </div>
    </div>
  )
}

function SocialLink({ platform, href }) {
  const Icon = socialIconMap[platform]

  return (
    <a
      href={href}
      target={href === '#' ? undefined : '_blank'}
      rel={href === '#' ? undefined : 'noreferrer'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-brand/25 hover:text-ink"
      aria-label={platform}
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default function App() {
  const [language, setLanguage] = useState(readInitialLanguage)
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copy = siteContent[language]
  const legalLinks = {
    terms: legalDocuments.terms,
    privacy: legalDocuments.privacy[language],
    cookies: legalDocuments.cookies,
  }

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      setScrollY(window.scrollY || 0)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = copy.locale
    document.title = copy.meta.title

    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')

    if (description) {
      description.setAttribute('content', copy.meta.description)
    }

    if (ogTitle) {
      ogTitle.setAttribute('content', copy.meta.title)
    }

    if (ogDescription) {
      ogDescription.setAttribute('content', copy.meta.description)
    }
  }, [copy.locale, copy.meta.description, copy.meta.title, language])

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const heroShift = Math.min(scrollY * 0.08, 56)

  const switchLanguage = (nextLanguage) => {
    if (nextLanguage === language) {
      return
    }

    startTransition(() => {
      setLanguage(nextLanguage)
      setMobileMenuOpen(false)
    })
  }

  const openCookieSettings = (event) => {
    event.preventDefault()
    window.dispatchEvent(new Event(COOKIE_OPEN_EVENT))
  }

  return (
    <div className="relative overflow-x-hidden pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[58rem] bg-[radial-gradient(circle_at_12%_8%,rgba(0,178,235,0.18),transparent_32%),radial-gradient(circle_at_84%_10%,rgba(0,226,174,0.16),transparent_28%)]" />
      <div
        className="pointer-events-none absolute right-[-10rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl"
        style={{ transform: `translateY(${heroShift * 0.45}px)` }}
      />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="shell">
          <div className="panel flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <a href="#top" className="min-w-0" onClick={() => setMobileMenuOpen(false)}>
              <BrandLogo compactText size="xl" />
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-500 lg:flex">
              {copy.nav.map((item) => (
                <a key={item.label} href={item.href} className="transition-colors duration-200 hover:text-ink">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher language={language} onChange={switchLanguage} />
              <PrimaryButton label={copy.buttons.primary} className="shrink-0 px-5 py-3" />
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher language={language} onChange={switchLanguage} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:text-ink"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="panel mt-3 p-5 lg:hidden">
              <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                {copy.nav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-3 transition hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton label={copy.buttons.primary} className="mt-2 w-full justify-center border-0" />
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section id="top" className="shell scroll-mt-28 pt-10 sm:pt-16 lg:pt-20">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[40px] border border-white/80 shadow-premium">
              <img
                src="/media/higienista-periovoxai.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  transform: `translateY(${heroShift * -0.14}px) scale(1.04)`,
                  objectPosition: '68% center',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, rgba(8, 19, 33, 0.9) 0%, rgba(8, 19, 33, 0.78) 38%, rgba(8, 19, 33, 0.38) 72%, rgba(8, 19, 33, 0.18) 100%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 14% 10%, rgba(0, 178, 235, 0.22), transparent 28%), radial-gradient(circle at 82% 16%, rgba(0, 226, 174, 0.16), transparent 24%)',
                }}
              />

              <div className="relative z-10 flex min-h-[36rem] flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[40rem] lg:px-14 lg:py-14">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-4 rounded-full border border-white/[0.14] bg-[#123550]/55 px-5 py-3 text-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.45)] backdrop-blur-md">
                      <BrandLogo markOnly size="md" />
                      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-white/92">
                        {copy.hero.badge}
                      </span>
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.1] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky shadow-none">
                      {copy.hero.eyebrow}
                    </span>
                  </div>

                  <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-[5.15rem]">
                    {copy.hero.title}
                  </h1>

                  <p className="mt-7 max-w-2xl text-balance text-xl leading-9 text-white/[0.86]">{copy.hero.description}</p>

                  <div className="mt-6 flex max-w-2xl items-start gap-3 rounded-[26px] border border-white/[0.14] bg-white/[0.1] p-4 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.45)] backdrop-blur-md">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.12] text-sky">
                      <SparklesIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-white/[0.82]">{copy.hero.valueStatement}</p>
                  </div>

                  <div className="mt-9">
                    <PrimaryButton label={copy.buttons.primary} />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-2 sm:-mt-12">
            <SectionReveal delay={160}>
              <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="panel outline-gradient p-6 sm:p-7">
                  <span className="micro-pill">
                    <BrowserIcon className="h-4 w-4 text-brand" />
                    {copy.hero.eyebrow}
                  </span>
                  <p className="mt-4 max-w-md text-base leading-8 text-slate-600">{copy.hero.ctaNote}</p>
                </div>

                <div className="panel outline-gradient p-6 sm:p-7">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">{copy.hero.disclaimerLabel}</div>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{copy.hero.disclaimer}</p>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {copy.hero.highlights.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 110}
                className="outline-gradient rounded-[30px] bg-white/[0.84] p-5 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                  {(() => {
                    const Icon = iconMap[item.icon]
                    return <Icon className="h-5 w-5" />
                  })()}
                </div>
                <div className="mt-5 text-lg font-semibold text-ink">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </SectionReveal>
            ))}
          </div>
        </section>

        <SectionReveal as="section" id="breakthrough" className="shell mt-16 scroll-mt-28 sm:mt-20">
          <div className="panel-dark relative overflow-hidden px-8 py-10 sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute left-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-sky/[0.15] blur-3xl" />
            <div className="absolute right-[-5rem] bottom-[-5rem] h-48 w-48 rounded-full bg-mint/10 blur-3xl" />

            <div className="relative">
              <span className="section-tag border-white/10 bg-white/[0.06] text-white/70 shadow-none">{copy.breakthrough.label}</span>
              <h2 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.65rem]">
                {copy.breakthrough.title}
              </h2>
              <p className="mt-5 max-w-3xl text-balance text-lg leading-8 text-white/[0.72]">{copy.breakthrough.description}</p>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {copy.breakthrough.points.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 120}>
                    <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-sky">
                        {(() => {
                          const Icon = iconMap[item.icon]
                          return <Icon className="h-5 w-5" />
                        })()}
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/[0.68]">{item.description}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="problem" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeader label={copy.problem.label} title={copy.problem.title} description={copy.problem.description} />
              <div className="panel outline-gradient mt-8 p-8">
                <p className="text-balance text-2xl font-semibold leading-tight text-ink sm:text-[2rem]">{copy.problem.quote}</p>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{copy.problem.body}</p>
              </div>
            </div>

            <div className="space-y-4">
              <SectionReveal delay={80}>
                <div className="overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-soft">
                  <img
                    src="/media/hygienist-probing.jpg"
                    alt={language === 'es' ? 'Higienista realizando sondaje periodontal' : 'Hygienist performing periodontal probing'}
                    className="h-[18rem] w-full object-cover sm:h-[22rem]"
                  />
                </div>
              </SectionReveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {copy.problem.cards.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 100}>
                    <Bullet {...item} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="workflow" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <SectionHeader align="center" label={copy.workflow.label} title={copy.workflow.title} description={copy.workflow.description} />

          <div className="mt-14 grid gap-5 xl:grid-cols-3">
            {copy.workflow.steps.map((step, index) => {
              const Icon = iconMap[step.icon]

              return (
                <SectionReveal key={step.title} delay={index * 120} className="h-full">
                  <div className="outline-gradient flex h-full flex-col rounded-[34px] bg-white/[0.84] p-7 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{step.step}</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                    <div className="mt-6 flex-1">
                      <WorkflowCardVisual variant={step.visual} language={language} />
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>

          <SectionReveal delay={360} className="panel mt-8 p-6 text-center sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {language === 'es' ? '¿Por qué no existía esto antes?' : 'Why has this not existed before?'}
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-balance text-2xl font-semibold leading-tight text-ink sm:text-[2rem]">{copy.workflow.footer}</p>
          </SectionReveal>
        </SectionReveal>

        <SectionReveal as="section" id="voice" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionHeader label={copy.voiceSection.label} title={copy.voiceSection.title} description={copy.voiceSection.description} />
              <div className="mt-8 space-y-3">
                {copy.voiceSection.bullets.map((item, index) => (
                  <SectionReveal key={item} delay={index * 100}>
                    <div className="flex items-start gap-3 rounded-[22px] border border-white/90 bg-white/[0.82] px-4 py-4 shadow-soft">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-mist text-brand">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-slate-600">{copy.voiceSection.note}</p>
            </div>

            <SectionReveal delay={160}>
              <div className="panel outline-gradient overflow-hidden p-6 sm:p-8">
                <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
                  <div className="panel-dark p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sky">
                        <MicrophoneIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{copy.voiceSection.transcriptTitle}</div>
                        <div className="text-xs text-white/60">{copy.hero.description}</div>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      {copy.voiceSection.transcript.map((line) => (
                        <div key={line} className="rounded-2xl bg-white/[0.08] px-4 py-3 text-sm leading-7 text-white/[0.82]">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-soft">
                      <img src="/media/probing-closeup.jpg" alt="" className="h-44 w-full object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-soft">
                      <img src="/media/probing-diagram.jpg" alt="" className="h-44 w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="difference" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <SectionHeader align="center" label={copy.difference.label} title={copy.difference.title} description={copy.difference.description} />

          <div className="panel-dark relative mt-14 overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute left-[-4rem] top-[-5rem] h-44 w-44 rounded-full bg-sky/[0.14] blur-3xl" />
            <div className="absolute right-[-3rem] bottom-[-4rem] h-48 w-48 rounded-full bg-mint/10 blur-3xl" />

            <div className="relative">
              <div className="grid gap-4 xl:grid-cols-4">
                {copy.difference.bullets.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 120}>
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-sky">
                          {(() => {
                            const Icon = iconMap[item.icon]
                            return <Icon className="h-5 w-5" />
                          })()}
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">{item.title}</div>
                          <p className="mt-2 text-sm leading-7 text-white/[0.7]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal delay={180}>
                <div className="mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
                  <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.06] px-5 py-5 text-white sm:grid-cols-[1.08fr_0.92fr_0.92fr] sm:items-center lg:px-7 lg:py-6">
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/[0.55]">{copy.difference.comparison.header}</div>
                      <div className="mt-2 text-xl font-semibold text-white">{copy.difference.comparison.category}</div>
                    </div>
                    <div className="text-base font-semibold text-white/78 lg:text-lg">{copy.difference.comparison.traditional}</div>
                    <div className="text-base font-semibold text-white lg:text-lg">{copy.difference.comparison.periovox}</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {copy.difference.comparison.rows.map((row) => (
                      <ComparisonRow
                        key={row.label}
                        row={row}
                        categoryLabel={copy.difference.comparison.category}
                        traditionalLabel={copy.difference.comparison.traditional}
                        periovoxLabel={copy.difference.comparison.periovox}
                      />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="reports" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeader label={copy.reports.label} title={copy.reports.title} description={copy.reports.description} />
              <div className="mt-8 space-y-4">
                {copy.reports.bullets.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 120}>
                    <div className="rounded-[28px] border border-white/90 bg-white/[0.84] p-5 shadow-soft">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                          {(() => {
                            const Icon = iconMap[item.icon]
                            return <Icon className="h-5 w-5" />
                          })()}
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-ink">{item.title}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <SectionReveal delay={180}>
              <div className="panel outline-gradient overflow-hidden p-3 sm:p-4 lg:p-5">
                <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-soft">
                  <img
                    src="/media/periovox-dashboard-2.png"
                    alt={language === 'es' ? 'Pantallazo de PerioVoxAI con comparación periodontal' : 'PerioVoxAI periodontal comparison screenshot'}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="insights" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
            <SectionReveal delay={120}>
              <TimelinePreview copy={copy.visuals.timelineCard} />
            </SectionReveal>

            <div>
              <SectionHeader label={copy.insights.label} title={copy.insights.title} description={copy.insights.description} />
              <div className="mt-8 space-y-4">
                {copy.insights.bullets.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 110}>
                    <div className="rounded-[28px] border border-white/90 bg-white/[0.82] p-5 shadow-soft">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                          {(() => {
                            const Icon = iconMap[item.icon]
                            return <Icon className="h-5 w-5" />
                          })()}
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-ink">{item.title}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="hardware" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="panel outline-gradient relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeader label={copy.hardware.label} title={copy.hardware.title} description={copy.hardware.description} />
                <div className="mt-8 space-y-4">
                  {copy.hardware.bullets.map((item, index) => (
                    <SectionReveal key={item.title} delay={index * 100}>
                      <div className="rounded-[28px] border border-white/90 bg-white/[0.84] p-5 shadow-soft">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                            {(() => {
                              const Icon = iconMap[item.icon]
                              return <Icon className="h-5 w-5" />
                            })()}
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-ink">{item.title}</div>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>

              <SectionReveal delay={160}>
                <BrowserFlowCard copy={copy.visuals.browserCard} />
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="language" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
            <div>
              <SectionHeader label={copy.language.label} title={copy.language.title} description={copy.language.description} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {copy.language.bullets.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 90}>
                    <Bullet {...item} className="h-full" />
                  </SectionReveal>
                ))}
              </div>
            </div>

            <SectionReveal delay={180}>
              <LanguagePreviewCard copy={copy.visuals.languageCard} />
            </SectionReveal>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="principles" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <SectionReveal delay={100}>
              <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-soft">
                <img src="/media/hygienist-patient.jpg" alt={copy.principles.imageAlt} className="h-[34rem] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081321]/88 via-[#081321]/36 to-transparent p-6 sm:p-8">
                  <span className="section-tag border-white/10 bg-white/[0.08] text-white/70 shadow-none">{copy.principles.label}</span>
                  <p className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white">{copy.principles.title}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-2 text-sm font-medium text-white/80">
                      {language === 'es' ? 'Flujo para un solo operador' : 'Single-operator workflow'}
                    </span>
                    <span className="rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-2 text-sm font-medium text-white/80">
                      {language === 'es' ? 'Basado en navegador' : 'Browser-based'}
                    </span>
                    <span className="rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-2 text-sm font-medium text-white/80">
                      {language === 'es' ? 'Documentación con IA' : 'AI documentation'}
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <div>
              <SectionHeader label={copy.principles.label} title={copy.principles.title} description={copy.principles.description} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {copy.principles.cards.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 100}>
                    <Bullet {...item} className="h-full" />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="roadmap" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <SectionHeader align="center" label={copy.roadmap.label} title={copy.roadmap.title} description={copy.roadmap.description} />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {copy.roadmap.items.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 100}>
                <div className="outline-gradient h-full rounded-[32px] bg-white/[0.86] p-7 shadow-soft">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.status}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                      {(() => {
                        const Icon = iconMap[item.icon]
                        return <Icon className="h-5 w-5" />
                      })()}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="trust" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeader label={copy.trust.label} title={copy.trust.title} description={copy.trust.description} />
              <div className="mt-8 rounded-[30px] border border-brand/[0.12] bg-white/90 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{copy.trust.disclaimerLabel}</div>
                    <p className="mt-3 text-base leading-8 text-slate-600">{copy.trust.disclaimer}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                  <a href={legalLinks.privacy} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.footer.links.privacy}
                  </a>
                  <a href={legalLinks.terms} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.footer.links.terms}
                  </a>
                  <a href={legalLinks.cookies} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.footer.links.cookies}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.trust.cards.map((item, index) => (
                <SectionReveal key={item.title} delay={index * 100}>
                  <Bullet {...item} className="h-full" />
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="access" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="panel-dark relative overflow-hidden px-8 py-10 sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute left-[-3rem] top-[-2rem] h-36 w-36 rounded-full bg-brand/[0.14] blur-3xl" />
            <div className="absolute right-[-2rem] bottom-[-3rem] h-40 w-40 rounded-full bg-mint/[0.12] blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <div>
                <span className="section-tag border-white/10 bg-white/[0.08] text-white/70 shadow-none">{copy.access.label}</span>
                <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">{copy.access.title}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">{copy.access.description}</p>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky">
                  {copy.access.badge}
                </div>
                <p className="mt-6 text-2xl font-semibold leading-tight text-white">{copy.hero.description}</p>
                <p className="mt-4 text-sm leading-7 text-white/[0.72]">{copy.hero.disclaimer}</p>
                <div className="mt-7">
                  <PrimaryButton label={copy.buttons.primary} className="border-0" />
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="sustainability" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <SectionHeader align="center" label={copy.sustainability.label} title={copy.sustainability.title} description={copy.sustainability.description} />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {copy.sustainability.items.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 100}>
                <Bullet {...item} className="h-full" />
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="contact" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader label={copy.contact.label} title={copy.contact.title} description={copy.contact.description} />
              <div className="mt-8 rounded-[30px] border border-white/80 bg-white/[0.88] p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-brand">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{copy.contact.directLabel}</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block text-lg font-semibold text-ink transition hover:text-brand">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{copy.contact.helper}</p>
              </div>
            </div>

            <SectionReveal delay={120}>
              <div className="panel outline-gradient flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-2xl font-semibold text-ink">{copy.contact.cardTitle}</div>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{copy.contact.cardDescription}</p>
                </div>
                <div className="mt-8">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="cta-primary w-full justify-center sm:w-auto">
                    {copy.contact.cta}
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </SectionReveal>

        <SectionReveal as="section" id="final-cta" className="shell mt-28 scroll-mt-28 sm:mt-36">
          <div className="panel-dark relative overflow-hidden px-8 py-10 sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,178,235,0.16),transparent_30%),radial-gradient(circle_at_88%_85%,rgba(0,226,174,0.14),transparent_30%)]" />
            <div className="relative text-center">
              <span className="section-tag border-white/10 bg-white/[0.08] text-white/70 shadow-none">{copy.finalCta.label}</span>
              <h2 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.75rem]">
                {copy.finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-balance text-lg leading-8 text-white/[0.72]">{copy.finalCta.description}</p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton label={copy.buttons.primary} className="border-0" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </main>

      <footer className="shell mt-24">
        <div className="panel px-6 py-8 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr]">
            <div>
              <BrandLogo tagline={language === 'es' ? 'IA periodontal por voz' : 'Voice-first dental AI'} />
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{copy.footer.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {Object.entries(socialLinks).map(([platform, href]) => (
                  <SocialLink key={platform} platform={platform} href={href} />
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{copy.footer.sections.product}</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a href="#breakthrough" className="block transition-colors hover:text-ink">
                  {copy.footer.links.about}
                </a>
                <a href="#contact" className="block transition-colors hover:text-ink">
                  {copy.footer.links.contact}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="block transition-colors hover:text-ink">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{copy.footer.sections.legal}</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a href={legalLinks.terms} target="_blank" rel="noreferrer" className="block transition-colors hover:text-ink">
                  {copy.footer.links.terms}
                </a>
                <a href={legalLinks.privacy} target="_blank" rel="noreferrer" className="block transition-colors hover:text-ink">
                  {copy.footer.links.privacy}
                </a>
                <a href={legalLinks.cookies} target="_blank" rel="noreferrer" className="block transition-colors hover:text-ink">
                  {copy.footer.links.cookies}
                </a>
                <button type="button" onClick={openCookieSettings} className="block text-left transition-colors hover:text-ink">
                  {copy.buttons.cookieSettings}
                </button>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{copy.footer.disclaimerLabel}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{copy.footer.disclaimer}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200/80 pt-5 text-sm text-slate-500">{copy.footer.copyright}</div>
        </div>
      </footer>

      <CookieConsent copy={copy.cookie} legalLinks={legalLinks} />
    </div>
  )
}
