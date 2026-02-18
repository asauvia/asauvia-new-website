export default function ServicesProducts() {
  const services = [
    {
      icon: "monitor_heart",
      title: "API Monitoring",
      desc: "Real-time observability and health tracking for your critical endpoints with automated alerting and latency analysis.",
      badge: null,
    },
    {
      icon: "query_stats",
      title: "SEO Optimization",
      desc: "Advanced algorithmic ranking strategies powered by data science to dominate search engine visibility.",
      badge: null,
    },
    {
      icon: "receipt_long",
      title: "Invoicera",
      desc: "Next-generation automated billing and ledger management for cross-border SaaS operations.",
      badge: "Coming Soon",
    },
    {
      icon: "forum",
      title: "WhatsApp Bot",
      desc: "Intelligent customer support automation integrated directly into the world's most popular messaging platform.",
      badge: "In Progress",
    },
  ];

  const products = [
    { icon: "smart_toy", title: "AI Chatbots", desc: "Context-aware agents for complex data retrieval." },
    { icon: "bolt", title: "Slack Bots", desc: "Streamline internal workflows and Ops notifications." },
    { icon: "terminal", title: "Customized ADK", desc: "Application Development Kits tailored to your stack." },
    { icon: "psychology", title: "Intelligent Systems", desc: "Self-healing architectures and predictive analytics." },
  ];

  return (
    <section id="services" className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-primary/30">
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Enterprise Solutions</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Services</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Scalable, high-performance infrastructure and AI-driven automation designed for modern enterprise ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s) => (
            <div key={s.title} className={"glass-card p-8 rounded-3xl relative overflow-hidden group " + (s.badge ? "border-dashed border-slate-700" : "")}>
              {s.badge && (
                <div className="absolute top-6 right-6">
                  <span
                    className={
                      "text-[10px] font-bold text-white px-2 py-1 rounded-full uppercase tracking-wider " +
                      (s.badge === "Coming Soon"
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                        : "bg-gradient-to-r from-amber-500 to-red-500")
                    }
                  >
                    {s.badge}
                  </span>
                </div>
              )}

              <div className={"w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 " + (s.badge ? "opacity-60" : "group-hover:scale-110 transition-transform")}>
                <span className="material-symbols-outlined text-primary text-3xl">{s.icon}</span>
              </div>

              <h3 className={"text-xl font-display font-bold mb-3 " + (s.badge ? "opacity-80" : "")}>{s.title}</h3>
              <p className={"text-slate-500 dark:text-slate-400 leading-relaxed " + (s.badge ? "opacity-60" : "")}>{s.desc}</p>

              {!s.badge && (
                <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative w-full mb-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full blur-sm opacity-50" />
        </div>

        <div className="text-center mb-16 space-y-4" id="products">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">Products</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Standalone engineering toolkits and intelligent platforms built for developers and visionary teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <div key={p.title} className="glass-card p-6 rounded-2xl group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
              </div>
              <h4 className="text-lg font-display font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/20 text-center">
          <h3 className="text-3xl font-display font-bold mb-6">Ready to scale your engineering?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 text-center">
              Start Integration
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 font-bold rounded-xl transition-all text-center">
              Talk to Expert
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
