import { useEffect, useState } from 'react'
import { CookieIcon, CloseIcon } from './Icons'
import { COOKIE_OPEN_EVENT } from '../content'
import {
  defaultCookieConsent,
  readCookieConsent,
  writeCookieConsent,
} from '../lib/cookieConsent'

function CategoryToggle({ title, description, checked, disabled = false, onChange, alwaysOnLabel }) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-[24px] border border-slate-200/75 bg-white/90 px-4 py-4 shadow-[0_20px_45px_-35px_rgba(8,19,33,0.22)]">
      <div>
        <div className="text-sm font-semibold text-ink">{title}</div>
        <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <span className="shrink-0">
        {disabled ? (
          <span className="inline-flex min-w-[5.8rem] justify-center rounded-full border border-brand/20 bg-mist px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            {alwaysOnLabel}
          </span>
        ) : (
          <span className="relative inline-flex items-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="peer sr-only"
            />
            <span className="h-7 w-12 rounded-full bg-slate-200 transition-colors duration-200 peer-checked:bg-brand/90" />
            <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
          </span>
        )}
      </span>
    </label>
  )
}

export function CookieConsent({ copy, legalLinks }) {
  const [consent, setConsent] = useState(defaultCookieConsent)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const savedConsent = readCookieConsent()
    setConsent(savedConsent)
    setShowBanner(savedConsent.status !== 'set')

    const openSettings = () => {
      setConsent(readCookieConsent())
      setShowSettings(true)
      setShowBanner(false)
    }

    window.addEventListener(COOKIE_OPEN_EVENT, openSettings)

    return () => {
      window.removeEventListener(COOKIE_OPEN_EVENT, openSettings)
    }
  }, [])

  useEffect(() => {
    if (!showSettings) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSettings(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showSettings])

  const persist = (nextConsent) => {
    const savedConsent = writeCookieConsent(nextConsent)
    setConsent(savedConsent)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () =>
    persist({
      preferences: true,
      analytics: true,
      advertising: true,
    })

  const rejectNonEssential = () =>
    persist({
      preferences: false,
      analytics: false,
      advertising: false,
    })

  const savePreferences = () => {
    persist(consent)
  }

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-4 bottom-4 z-[70] sm:inset-x-auto sm:right-6 sm:w-[30rem]">
          <div className="cookie-panel rounded-[30px] border border-white/80 bg-white/[0.92] p-5 shadow-premium backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mist text-brand">
                <CookieIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-ink">{copy.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy.description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                  <a href={legalLinks.cookies} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.links.cookies}
                  </a>
                  <a href={legalLinks.privacy} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.links.privacy}
                  </a>
                  <a href={legalLinks.terms} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                    {copy.links.terms}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={acceptAll} className="cta-primary w-full justify-center border-0 sm:w-auto">
                {copy.accept}
              </button>
              <button type="button" onClick={rejectNonEssential} className="cta-secondary w-full justify-center sm:w-auto">
                {copy.reject}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand/30 hover:text-ink"
              >
                {copy.settings}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(8,19,33,0.28)] p-4 sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[34px] border border-white/80 bg-[#f8fbfc]/95 p-6 shadow-premium backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-white/90 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  <CookieIcon className="h-4 w-4 text-brand" />
                  {copy.title}
                </div>
                <h3 id="cookie-settings-title" className="mt-5 text-3xl font-semibold text-ink">
                  {copy.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{copy.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition hover:text-ink"
                aria-label={copy.close}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {copy.categories.map((category) => (
                <CategoryToggle
                  key={category.key}
                  title={category.title}
                  description={category.description}
                  checked={Boolean(consent[category.key])}
                  disabled={category.key === 'necessary'}
                  alwaysOnLabel={copy.alwaysOn}
                  onChange={() =>
                    setConsent((currentConsent) => ({
                      ...currentConsent,
                      [category.key]: !currentConsent[category.key],
                    }))
                  }
                />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
              <a href={legalLinks.cookies} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                {copy.links.cookies}
              </a>
              <a href={legalLinks.privacy} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                {copy.links.privacy}
              </a>
              <a href={legalLinks.terms} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                {copy.links.terms}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={savePreferences} className="cta-primary w-full justify-center border-0 sm:w-auto">
                {copy.save}
              </button>
              <button type="button" onClick={acceptAll} className="cta-secondary w-full justify-center sm:w-auto">
                {copy.accept}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand/30 hover:text-ink"
              >
                {copy.reject}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
