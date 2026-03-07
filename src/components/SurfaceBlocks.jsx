import {
  BrowserIcon,
  CheckIcon,
  ClipboardIcon,
  GlobeIcon,
  HardwareIcon,
  MicrophoneIcon,
  ReportIcon,
  SparklesIcon,
  TimelineIcon,
} from './Icons'
import { Waveform } from './Waveform'

export function WorkflowCardVisual({ variant, language }) {
  if (variant === 'voice') {
    return (
      <div className="panel-dark relative overflow-hidden p-5">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sky">
              <MicrophoneIcon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold text-white">
                {language === 'es' ? 'Dictado en directo' : 'Live dictation'}
              </div>
              <div className="text-xs text-white/60">
                {language === 'es' ? 'Valores periodontales hablados con naturalidad' : 'Periodontal values spoken naturally'}
              </div>
            </div>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
            {language === 'es' ? 'Activo' : 'Active'}
          </span>
        </div>
        <Waveform className="mt-5 text-sky" />
        <div className="mt-4 space-y-2 text-sm text-white/75">
          {language === 'es' ? (
            <>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Tres, dos, tres en 36</div>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Dos, tres, dos en 35</div>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Sangrado distal en 34</div>
            </>
          ) : (
            <>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Three, two, three on 36</div>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Two, three, two on 35</div>
              <div className="rounded-2xl bg-white/[0.08] px-4 py-3">Bleeding distal on 34</div>
            </>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'interpret') {
    const inputTokens =
      language === 'es'
        ? ['3', '2', '3', '36', 'SOP', '34']
        : ['3', '2', '3', '36', 'BOP', '34']
    const mappedStructure =
      language === 'es'
        ? ['PD 36 -> 3 2 3', 'PD 35 -> 2 3 2', 'SOP 34 -> presente']
        : ['PD 36 -> 3 2 3', 'PD 35 -> 2 3 2', 'BOP 34 -> present']

    return (
      <div className="panel outline-gradient overflow-hidden p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] bg-mist p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {language === 'es' ? 'Tokens de entrada' : 'Input tokens'}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {inputTokens.map((token) => (
                <span key={token} className="rounded-full border border-brand/[0.15] bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  {token}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-slate-100 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {language === 'es' ? 'Estructura mapeada' : 'Mapped structure'}
            </div>
            <div className="mt-3 space-y-2">
              {mappedStructure.map((field) => (
                <div key={field} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="panel outline-gradient overflow-hidden p-5">
      <div className="grid grid-cols-[64px_repeat(4,minmax(0,1fr))] gap-2">
        <div className="rounded-2xl bg-slate-950 px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          PD
        </div>
        {['3 2 3', '2 3 2', '3 3 4', '4 3 3'].map((value, index) => (
          <div
            key={value}
            className="animate-pulse-soft rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3 text-center text-sm font-semibold text-ink"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[26px] bg-mist p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <ReportIcon className="h-4 w-4 text-brand" />
            {language === 'es' ? 'Informe listo' : 'Auto-report ready'}
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
            {language === 'es' ? 'Completo' : 'Complete'}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {language === 'es'
            ? 'Voz dentro. Grafico estructurado fuera. Documentacion incluida.'
            : 'Voice in. Structured chart out. Documentation attached.'}
        </p>
      </div>
    </div>
  )
}

export function ReportPreviewCard({ copy }) {
  return (
    <div className="panel outline-gradient relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-6 top-6 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        {copy.badge}
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
          <ReportIcon className="h-5 w-5" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{copy.eyebrow}</div>
          <h3 className="mt-3 text-2xl font-semibold text-ink">{copy.title}</h3>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <div className="rounded-[28px] bg-mist p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.summaryLabel}</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">{copy.summary}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-slate-100 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.findingsLabel}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {copy.findings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-slate-100 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.formatLabel}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {copy.format.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TimelinePreview({ copy }) {
  return (
    <div className="panel outline-gradient relative overflow-hidden p-6 sm:p-8">
      <div className="absolute left-1/2 top-20 bottom-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-brand/0 via-brand/[0.45] to-mint/0 sm:block" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.visitA}</div>
              <div className="mt-2 text-lg font-semibold text-ink">{copy.visitATitle}</div>
            </div>
            <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-500">{copy.visitAStatus}</span>
          </div>
          <div className="mt-5 space-y-3">
            {copy.visitAItems.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-brand/[0.15] bg-mist p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.visitB}</div>
              <div className="mt-2 text-lg font-semibold text-ink">{copy.visitBTitle}</div>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand">{copy.visitBStatus}</span>
          </div>
          <div className="mt-5 space-y-3">
            {copy.visitBItems.map((item) => (
              <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[28px] bg-ink px-6 py-5 text-white shadow-premium">
        <div className="flex items-center gap-3 text-sm font-semibold text-white">
          <TimelineIcon className="h-4 w-4 text-sky" />
          {copy.summaryTitle}
        </div>
        <p className="mt-3 text-sm leading-7 text-white/[0.72]">{copy.summary}</p>
      </div>
    </div>
  )
}

export function BrowserFlowCard({ copy }) {
  return (
    <div className="panel outline-gradient relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-sky/10 via-transparent to-mint/10" />

      <div className="relative rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            <span className="h-3 w-3 rounded-full bg-slate-200" />
          </div>
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-500">{copy.tag}</span>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] bg-mist p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <BrowserIcon className="h-4 w-4 text-brand" />
              {copy.leftTitle}
            </div>
            <div className="mt-4 space-y-3">
              {copy.leftItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  <CheckIcon className="h-4 w-4 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-100 bg-white p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <HardwareIcon className="h-4 w-4 text-brand" />
              {copy.rightTitle}
            </div>
            <div className="mt-4 space-y-3">
              {copy.rightItems.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <SparklesIcon className="h-4 w-4 text-sky" />
            {copy.footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ContextPreviewCard({ copy }) {
  return (
    <div className="panel outline-gradient relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-brand/[0.12] blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
              <ClipboardIcon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{copy.eyebrow}</div>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{copy.title}</h3>
          </div>
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-500">{copy.badge}</span>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[26px] bg-mist p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.questionnaireTitle}</div>
            <div className="mt-4 space-y-3">
              {copy.questionnaireItems.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  <span>{item}</span>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-500">{copy.shortLabel}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-dark p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <SparklesIcon className="h-4 w-4 text-sky" />
              {copy.insightTitle}
            </div>
            <p className="mt-4 text-sm leading-7 text-white/[0.72]">{copy.insightBody}</p>
            <div className="mt-5 space-y-3">
              {copy.insightItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.08] px-4 py-3 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LanguagePreviewCard({ copy }) {
  return (
    <div className="panel outline-gradient relative overflow-hidden p-6 sm:p-8">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-mint/[0.14] blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
              <GlobeIcon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{copy.eyebrow}</div>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{copy.title}</h3>
          </div>
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-500">{copy.badge}</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[26px] bg-mist p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.interfaceLabel}</div>
            <div className="mt-3 text-2xl font-semibold text-ink">{copy.interfaceTitle}</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">{copy.interfaceBody}</p>
          </div>
          <div className="rounded-[26px] border border-slate-100 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{copy.voiceLabel}</div>
            <div className="mt-3 text-2xl font-semibold text-ink">{copy.voiceTitle}</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">{copy.voiceBody}</p>
          </div>
        </div>

        <div className="mt-4 rounded-[26px] border border-slate-100 bg-white p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CheckIcon className="h-4 w-4 text-brand" />
            {copy.notationTitle}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">{copy.notationBody}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-center rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <img src="/partners/ada-logo.jpg" alt="ADA logo" className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <img src="/partners/fdi-logo.png" alt="FDI logo" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {['ADA', 'FDI', 'EN', 'ES', 'FR', 'PT', 'DE', 'IT', 'AR', 'TR', '45+'].map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
