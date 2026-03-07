import { COOKIE_CONSENT_KEY } from '../content'

export const defaultCookieConsent = {
  status: 'unset',
  necessary: true,
  preferences: false,
  analytics: false,
  advertising: false,
  updatedAt: null,
}

const GA_MEASUREMENT_ID = 'G-3EV0RZHYDN'

function syncGoogleAnalyticsConsent(consent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  const analyticsGranted = Boolean(consent?.analytics)
  const advertisingGranted = Boolean(consent?.advertising)
  const preferencesGranted = Boolean(consent?.preferences)

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = !analyticsGranted

  window.gtag('consent', 'update', {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_storage: advertisingGranted ? 'granted' : 'denied',
    ad_user_data: advertisingGranted ? 'granted' : 'denied',
    ad_personalization: advertisingGranted ? 'granted' : 'denied',
    functionality_storage: preferencesGranted ? 'granted' : 'denied',
    personalization_storage: preferencesGranted ? 'granted' : 'denied',
    security_storage: 'granted',
  })

  if (analyticsGranted && typeof window.__periovoxInitGA === 'function') {
    window.__periovoxInitGA()
  }
}

export function normalizeCookieConsent(consent) {
  return {
    status: consent?.status === 'set' ? 'set' : 'unset',
    necessary: true,
    preferences: Boolean(consent?.preferences),
    analytics: Boolean(consent?.analytics),
    advertising: Boolean(consent?.advertising),
    updatedAt: consent?.updatedAt ?? null,
  }
}

export function readCookieConsent() {
  if (typeof window === 'undefined') {
    return defaultCookieConsent
  }

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY)

    if (!raw) {
      return defaultCookieConsent
    }

    return normalizeCookieConsent(JSON.parse(raw))
  } catch (error) {
    return defaultCookieConsent
  }
}

export function writeCookieConsent(consent) {
  if (typeof window === 'undefined') {
    return defaultCookieConsent
  }

  const nextConsent = normalizeCookieConsent({
    ...consent,
    status: 'set',
    updatedAt: new Date().toISOString(),
  })

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(nextConsent))
  window.__periovoxCookieConsent = nextConsent
  syncGoogleAnalyticsConsent(nextConsent)
  window.dispatchEvent(
    new CustomEvent('periovox:cookie-consent-change', {
      detail: nextConsent,
    }),
  )

  return nextConsent
}

export function canUseCookies(category) {
  const consent = readCookieConsent()

  if (category === 'necessary') {
    return true
  }

  return Boolean(consent?.[category])
}
