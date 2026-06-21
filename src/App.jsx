import { QRCodeSVG } from 'qrcode.react'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/9vV2qTf4'
const OFFICIAL_SITE = 'https://www.rewnd.app/'
const CONTACT_EMAIL = 'admin@rewnd.app'
const ICON = `${import.meta.env.BASE_URL}rewnd-icon.png`

// Pre-filled WhatsApp message (wa.me wants the number with country code, no + or spaces).
const WA_MESSAGE = encodeURIComponent('Hola, me gustaría saber más sobre Rewnd :)')
const WHATSAPP = [
  { label: 'WhatsApp +52 618 801 9247', href: `https://wa.me/526188019247?text=${WA_MESSAGE}` },
  { label: 'WhatsApp +52 618 299 3654', href: `https://wa.me/526182993654?text=${WA_MESSAGE}` },
]

function MailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

const STEPS = [
  'Instala TestFlight desde la App Store.',
  'Escanea el código QR con la cámara de tu iPhone (o toca el botón).',
  'Toca «Aceptar» e instala Rewnd desde TestFlight.',
  'Monta el teléfono en la cancha, juega y toca para guardar tus Rewnds.',
]

export default function App() {
  return (
    <main className="relative min-h-[100dvh] w-full flex items-center justify-center px-5 py-12 bg-hero-glow overflow-hidden">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-50" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center gap-7">

        {/* Brand → official site. App icon on top, Rewnd title below. */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={OFFICIAL_SITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al sitio oficial de Rewnd"
            className="group flex flex-col items-center gap-3"
          >
            <img
              src={ICON}
              alt="Rewnd"
              width={80}
              height={80}
              className="w-20 h-20 rounded-[22px] shadow-glow ring-1 ring-primary/20 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-logo text-4xl leading-none tracking-tight text-primary no-underline">
              Rewnd
            </span>
          </a>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(220,255,120,0.9)]" />
            Acceso Beta
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display font-black text-3xl sm:text-4xl leading-[0.95] uppercase text-light">
            Únete a la beta de Rewnd
          </h1>
          <p className="font-sans text-base text-white/80 max-w-sm">
            Escanea el código con la cámara de tu iPhone para instalar Rewnd
            desde TestFlight y empezar a guardar tus mejores puntos.
          </p>
        </div>

        {/* QR card */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-3xl bg-white p-5 shadow-glow-lg ring-1 ring-primary/30">
            <QRCodeSVG
              value={TESTFLIGHT_URL}
              size={224}
              level="H"
              marginSize={0}
              bgColor="#FFFFFF"
              fgColor="#131C1B"
              imageSettings={{
                src: ICON,
                height: 48,
                width: 48,
                excavate: true,
              }}
            />
          </div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            Escanea con la cámara de tu iPhone
          </p>
        </div>

        {/* Direct button (for users already on their phone) */}
        <a
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-sans font-bold text-dark transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] shadow-glow"
        >
          Abrir en TestFlight
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M17 7H8M17 7v9" />
          </svg>
        </a>

        {/* Steps */}
        <ol className="w-full card-surface p-6 flex flex-col gap-4 text-left">
          {STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3.5">
              <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 border border-primary/30 font-mono text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="font-sans text-sm leading-relaxed text-white/85">{step}</span>
            </li>
          ))}
        </ol>

        {/* Footer */}
        <div className="flex flex-col items-center gap-5 pt-1">
          <a
            href={OFFICIAL_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Más información sobre Rewnd
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M17 7H8M17 7v9" />
            </svg>
          </a>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              ¿Feedback? Escríbenos
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-sans text-sm text-white/85 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MailIcon className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
              {WHATSAPP.map((w) => (
                <a
                  key={w.href}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={w.label}
                  title={w.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface text-[#25D366] transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
