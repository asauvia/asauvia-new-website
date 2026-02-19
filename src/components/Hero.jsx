export default function Hero() {
  return (
    <main id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-gradient pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-accent-cyan/10 blur-[120px] rounded-full" />

        <svg className="absolute bottom-0 left-0 w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgba(99,102,241,0.2)", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "rgba(34,211,238,0.2)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgba(168,85,247,0.2)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <path
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z"
            fill="url(#wave-gradient)"
            fillOpacity="1"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z;
                M0,120L48,138.7C96,157,192,195,288,202.7C384,210,480,187,576,170.7C672,155,768,145,864,165.3C960,185,1056,235,1152,240C1248,245,1344,207,1392,187.7L1440,168L1440,320L0,320Z;
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/50 text-slate-300 mb-8 animate-float">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase">V 2.0.4 • Enterprise AI Suite</span>
        </div> */}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] pt-12">
          <span className="hero-gradient-text">Transforming Business Through</span>
          <span className="block bg-gradient-to-r from-primary via-accent-cyan to-accent-purple bg-clip-text text-transparent pb-6">
            Intelligent Automation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Asauvia builds enterprise-grade software and AI systems designed to scale with your ambition.
          Systemized, engineered, and performance-first foundations for the modern era.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a className="glowing-btn w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2" href="#contact">
            Get Started
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#services">
            Explore Solutions
          </a>
        </div>
        {/* <div className="pt-12 ">
         <div className="pt-12 border-t border-white/5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Trusted by Global Enterprise Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-60 hover:grayscale-0 transition-all duration-500">
            {[
              ["apartment", "SKYLINE"],
              ["storm", "VORTEX"],
              ["account_tree", "QUANTUM"],
              ["hexagon", "NOVA"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
                <span className="text-xl font-bold tracking-tight text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}
