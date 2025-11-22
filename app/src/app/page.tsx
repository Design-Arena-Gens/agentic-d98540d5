import type { Metadata } from "next";

const palette = [
  { name: "Teal Plasma", value: "#19d1c8" },
  { name: "Metro Violet", value: "#8f3bff" },
  { name: "Neon Ember", value: "#ff6a3d" },
  { name: "Chrome Echo", value: "#f5f7ff" },
];

export const metadata: Metadata = {
  title: "Neon Vanguard Portrait",
  description:
    "Editorial portrait of a bold Korean fashion icon set inside a neon metro tunnel. Crafted as a digital illustration with electric energy.",
};

function BackgroundTunnel() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060f] via-[#0a1024] to-[#05050a]" />
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0 animate-pulse rounded-full border border-white/10"
            style={{
              animationDelay: `${index * 0.6}s`,
              borderRadius: `${40 + index * 12}%/${50 + index * 10}%`,
              opacity: 0.18 - index * 0.02,
              transform: `translateY(${index * 12 - 32}%) scale(${1 + index * 0.18})`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {["#1af0e8", "#8a42ff", "#ff6c3f"].map((color, index) => (
          <div
            key={color}
            className="absolute h-[160%] w-[160%] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
              top: `${index === 0 ? -40 : index === 1 ? 20 : 60}%`,
              left: `${index === 0 ? -30 : index === 1 ? 10 : 50}%`,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PortraitIllustration() {
  return (
    <svg
      className="w-full max-w-xl drop-shadow-[0_35px_55px_rgba(0,255,255,0.25)]"
      viewBox="0 0 600 760"
      role="img"
      aria-labelledby="portraitTitle portraitDesc"
    >
      <title id="portraitTitle">
        Bold young woman in a teal satin bomber inside a neon metro tunnel
      </title>
      <desc id="portraitDesc">
        Stylized portrait illustration depicting a confident Korean woman with
        slick hair, teal satin bomber jacket, black skirt, and neon metro tunnel
        reflections.
      </desc>
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1af0e8" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#193cbf" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#05060d" stopOpacity="0.95" />
        </radialGradient>
        <linearGradient id="jacket" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1cd4c7" />
          <stop offset="40%" stopColor="#1daab9" />
          <stop offset="100%" stopColor="#0d3e79" />
        </linearGradient>
        <linearGradient id="tunnelLines" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#12fff7" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8a42ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ff5a2f" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="skin" x1="30%" x2="90%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f7d2c4" />
          <stop offset="45%" stopColor="#f0b7a4" />
          <stop offset="100%" stopColor="#c57970" />
        </linearGradient>
        <linearGradient id="hair" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#151522" />
          <stop offset="100%" stopColor="#0b0b15" />
        </linearGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="760" fill="url(#bgGlow)" />
      {Array.from({ length: 12 }).map((_, index) => (
        <path
          key={index}
          d={`M${120 + index * 28} 40 Q300 ${index * 48 + 60} ${480 - index * 12} 740`}
          stroke="url(#tunnelLines)"
          strokeWidth={index % 3 === 0 ? 6 : 2.2}
          strokeOpacity={0.35 + (index % 4) * 0.08}
          fill="none"
        />
      ))}

      <g transform="translate(180 120)">
        <path
          d="M120 70 C90 60 58 50 32 76 C12 96 8 128 18 156 C30 188 60 209 92 216 C126 223 162 210 184 182 C210 148 210 102 190 74 C176 54 150 46 120 70Z"
          fill="url(#hair)"
        />
        <path
          d="M138 122 C136 96 114 74 92 76 C70 78 52 106 54 136 C58 182 78 214 108 214 C142 214 144 164 138 122Z"
          fill="url(#skin)"
        />
        <path
          d="M93 122 L123 124 C126 138 126 152 123 160 C114 184 90 182 83 158 C80 148 82 134 93 122Z"
          fill="#c98775"
          opacity="0.6"
        />
        <path
          d="M86 114 C94 110 104 110 112 114 C116 118 120 122 120 126 C120 130 116 132 110 130 C104 128 94 128 88 130 C82 132 78 130 78 126 C78 122 82 118 86 114Z"
          fill="#120d0d"
        />
        <g transform="translate(74 138)">
          <ellipse rx="12" ry="7" fill="#140d14" />
          <circle cx="-2" cy="-2" r="3.4" fill="#070309" />
          <circle cx="-1" cy="-2" r="2.2" fill="#2f4cff" opacity="0.6" />
          <circle cx="-0.5" cy="-2.2" r="1.2" fill="#ffffff" />
          <circle cx="-0.5" cy="-2.2" r="4" fill="url(#eyeGlow)" opacity="0.8" />
        </g>
        <g transform="translate(130 138)">
          <ellipse rx="12" ry="7" fill="#140d14" />
          <circle cx="1" cy="-2" r="3.4" fill="#070309" />
          <circle cx="1" cy="-2" r="2.2" fill="#2f4cff" opacity="0.6" />
          <circle cx="1.4" cy="-2.2" r="1.2" fill="#ffffff" />
          <circle cx="1.2" cy="-2" r="4" fill="url(#eyeGlow)" opacity="0.8" />
        </g>
        <path
          d="M112 166 C112 170 102 178 92 178 C82 178 72 170 72 166 C72 162 82 160 92 160 C102 160 112 162 112 166Z"
          fill="#7c3123"
        />
        <path
          d="M94 182 C100 184 106 184 112 182 C108 188 102 192 96 192 C90 192 84 188 80 182 C86 184 90 184 94 182Z"
          fill="#250d14"
        />
      </g>

      <g transform="translate(120 300)">
        <path
          d="M60 400 Q140 340 240 316 Q340 292 420 320 Q456 332 486 358 L520 430 Q492 468 440 496 Q328 560 188 536 Q102 520 60 400Z"
          fill="#05060c"
          opacity="0.75"
        />
        <path
          d="M80 150 Q120 60 210 40 Q300 20 380 70 Q460 120 480 220 Q496 300 468 360 Q440 420 376 440 Q310 460 248 448 Q186 436 150 392 Q110 346 98 300 Q86 254 80 150Z"
          fill="url(#jacket)"
        />
        <path
          d="M126 240 Q164 220 204 234 Q244 248 272 276 Q298 302 280 328 Q262 354 214 358 Q166 362 132 342 Q98 322 118 280 Q122 266 126 240Z"
          fill="#0f2340"
          opacity="0.7"
        />
        <path
          d="M232 368 Q260 344 292 344 Q324 344 350 362 Q374 378 364 402 Q352 430 312 432 Q272 434 240 414 Q212 398 232 368Z"
          fill="#0b1429"
        />
        <path
          d="M206 138 Q238 126 272 130 Q306 134 332 154 Q358 174 374 208 L390 256 Q362 286 324 300 Q286 314 240 308 Q194 302 158 280 Q122 258 106 230 Q128 180 206 138Z"
          fill="#26f0ff"
          fillOpacity="0.18"
        />
      </g>

      <g transform="translate(70 560)" fill="#f5f8ff" opacity="0.2">
        <rect width="460" height="4" rx="2" />
        <rect width="360" height="4" y="26" rx="2" />
        <rect width="520" height="4" y="52" rx="2" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060c] text-slate-100">
      <BackgroundTunnel />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between gap-12 px-6 py-12 sm:px-12 lg:flex-row lg:items-center lg:gap-20">
        <section className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-[0.3em] uppercase text-cyan-200/70 backdrop-blur">
            Neon Metro Editorial
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Portrait of a bold young woman holding her ground inside a glowing
            Seoul metro tunnel.
          </h1>
          <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Electric light streaks ricochet across reflective tiles while her
            teal satin bomber catches every glimmer. Slick hair frames an
            unwavering gaze that owns every inch of the platform.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-200/80 sm:text-base">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-cyan-200/80">
                Styling Notes
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-100/80">
                <li>
                  Teal satin bomber with bold &ldquo;Canker-Blossom&rdquo; typography
                </li>
                <li>Black mini-skirt and statement platform sneakers</li>
                <li>Chrome liner and softened, confident gaze</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-cyan-200/80">
                Scene Energy
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-100/80">
                <li>Neon tunnel gradients with reflective tiles</li>
                <li>Ambient metro haze with teal and violet echoes</li>
                <li>Chromatic rim light setting the confident stance</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="relative w-full max-w-xl">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/40 via-purple-600/20 to-orange-500/30 blur-3xl" />
          <div className="rounded-[36px] border border-white/15 bg-gradient-to-b from-white/12 via-white/8 to-white/6 p-6 shadow-[0_40px_100px_-40px_rgba(18,255,247,0.35)] backdrop-blur-xl">
            <PortraitIllustration />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {palette.map((swatch) => (
              <div
                key={swatch.value}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
              >
                <span
                  className="h-9 w-9 rounded-xl border border-white/20 shadow-lg"
                  style={{ background: swatch.value }}
                />
                <div className="text-xs uppercase tracking-wide text-slate-200/80">
                  <p>{swatch.name}</p>
                  <p className="text-[10px] text-slate-200/60">{swatch.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
