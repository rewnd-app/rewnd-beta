import { QRCodeSVG } from 'qrcode.react'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/9vV2qTf4'
const ICON = `${import.meta.env.BASE_URL}rewnd-icon.png`

// Rewnd isotype — inherits color via currentColor.
function RewndMark({ className = '' }) {
  return (
    <svg viewBox="0 0 301 257" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="Rewnd" className={className}>
      <path d="M205.036 0C250.986 0.000129745 280.348 22.0624 293.121 50.4287C298.098 61.2113 300.586 72.8236 300.586 84.4355V85.5967C300.586 97.5404 298.098 109.65 293.121 120.599C280.016 149.297 250.489 171.692 204.538 171.692H179.655C187.452 178.66 196.41 185.295 208.354 190.271C222.951 196.409 241.863 200.391 268.238 200.391H300.586V256.128H268.238C226.435 256.128 197.902 248.663 176.337 237.549C154.772 226.435 140.506 211.837 126.903 197.902C121.263 192.096 115.789 186.455 109.651 181.811C103.845 177.332 97.2096 173.683 89.2471 171.692H58.2266V256.128H0V0H205.036ZM78.8457 58.6348C64.1481 58.6348 52.2336 70.5495 52.2334 85.2471C52.2334 99.9448 64.148 111.86 78.8457 111.86H201.15C215.848 111.86 227.763 99.9447 227.763 85.2471C227.762 70.5496 215.848 58.6349 201.15 58.6348H78.8457Z" />
      <circle cx="81.5" cy="85.5" r="18.5" />
    </svg>
  )
}

const STEPS = [
  'Instala TestFlight desde la App Store.',
  'Escanea el código QR con la cámara de tu iPhone (o toca el botón).',
  'Toca «Aceptar» e instala Rewnd desde TestFlight.',
  'Monta el teléfono en la pista, juega y toca para guardar los últimos 60 s.',
]

export default function App() {
  return (
    <main className="relative min-h-[100dvh] w-full flex items-center justify-center px-5 py-12 bg-hero-glow overflow-hidden">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dot opacity-50" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center gap-7">

        {/* App icon */}
        <img
          src={ICON}
          alt="Icono de la app Rewnd"
          width={88}
          height={88}
          className="w-20 h-20 rounded-[22px] shadow-glow ring-1 ring-primary/20"
        />

        {/* Wordmark + beta tag */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-primary">
            <RewndMark className="h-5 w-auto" />
            <span className="font-logo text-2xl leading-none tracking-tight">Rewnd</span>
          </div>
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
        <p className="font-mono text-[11px] tracking-wider text-muted/80">
          ¿Necesitas ayuda? Escríbenos · rewnd.app
        </p>
      </div>
    </main>
  )
}
