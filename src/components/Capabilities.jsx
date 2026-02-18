export default function Capabilities() {
  const cards = [
    {
      icon: "psychology",
      iconWrap: "bg-primary/10 group-hover:bg-primary",
      iconText: "text-primary group-hover:text-white",
      title: "AI & Automation",
      desc: "Custom LLM fine-tuning and autonomous agent deployments that streamline complex decision-making processes.",
    },
    {
      icon: "developer_mode",
      iconWrap: "bg-emerald-500/10 group-hover:bg-emerald-500",
      iconText: "text-emerald-400 group-hover:text-white",
      title: "Web & App Dev",
      desc: "High-performance full-stack architectures built for scale, performance, and unmatched user experiences.",
    },
    {
      icon: "hub",
      iconWrap: "bg-purple-500/10 group-hover:bg-purple-500",
      iconText: "text-purple-400 group-hover:text-white",
      title: "HR & Ops Systems",
      desc: "Systemized operational workflows and internal HR tools designed to reduce overhead and human error.",
    },
    {
      icon: "deployed_code",
      iconWrap: "bg-orange-500/10 group-hover:bg-orange-500",
      iconText: "text-orange-400 group-hover:text-white",
      title: "Custom Software",
      desc: "Tailor-made enterprise solutions that solve specific bottlenecks and provide competitive advantages.",
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Engineered systems for the next era of business.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            Asauvia is an enterprise-grade automation powerhouse. We handle the complexities of modern software engineering,
            from LLM integration to full-stack ecosystems, so you can focus on scaling your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${c.iconWrap} flex items-center justify-center mb-6 transition-colors`}>
                <span className={`material-symbols-outlined ${c.iconText}`}>{c.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">{c.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            ["verified_user", "Enterprise-Trustworthy", "Security-first approach with rigorous testing protocols to ensure system stability and data integrity."],
            ["speed", "Performance-First", "Optimized for LCP, CLS, and TTFB. We build systems that are not just smart, but incredibly fast."],
            ["layers", "Systemized Scaling", "Every solution functions as a design system foundation, built to grow as your enterprise expands."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex gap-6">
              <div className="shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
