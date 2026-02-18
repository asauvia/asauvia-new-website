export default function About() {
  const features = [
    {
      icon: "terminal",
      iconWrap: "bg-primary/10 text-primary",
      title: "Next-Gen Software",
      desc: "End-to-end web architecture using robust design systems and scalable frameworks for high-load environments.",
    },
    {
      icon: "psychology",
      iconWrap: "bg-accent-cyan/10 text-accent-cyan",
      title: "AI Integration",
      desc: "Embedding predictive models and LLMs directly into your proprietary business logic for real-time decision making.",
    },
    {
      icon: "cloud_done",
      iconWrap: "bg-accent-purple/10 text-accent-purple",
      title: "Cloud Architecture",
      desc: "Automated CI/CD pipelines and cloud orchestration ensuring 100% reliability and global distribution.",
    },
    {
      icon: "database",
      iconWrap: "bg-emerald-500/10 text-emerald-400",
      title: "Data Strategy",
      desc: "Systemizing your unstructured data into actionable insights through sophisticated engineering layers.",
    },
  ];

  return (
    <section id="about" className="about-gradient py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering Excellence for the <span className="text-accent-cyan">AI-First</span> Enterprise
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don't just build applications; we engineer intelligent ecosystems. At Asauvia, we bridge the gap between
              legacy infrastructure and futuristic automation, ensuring your business leads the curve in operational efficiency.
            </p>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20">
                <span className="material-symbols-outlined text-accent-cyan">verified</span>
              </div>
              <div>
                <p className="text-white font-semibold">SOC2 Type II Certified</p>
                <p className="text-sm text-slate-500">Enterprise security by default</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent-cyan/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-1 rounded-3xl overflow-hidden">
              <div className="bg-midnight/80 rounded-[1.4rem] p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  <div className="ml-auto text-xs font-mono text-slate-500">asauvia_deploy_log.v2</div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <p className="text-accent-cyan flex gap-3"><span className="text-slate-600">01</span> &gt; Initializing neural pipeline...</p>
                  <p className="text-accent-purple flex gap-3"><span className="text-slate-600">02</span> &gt; Scaling microservices cluster...</p>
                  <p className="text-emerald-400 flex gap-3"><span className="text-slate-600">03</span> &gt; Optimization successful (0.042ms)</p>
                  <p className="text-slate-400 flex gap-3"><span className="text-slate-600">04</span> &gt; Monitoring system health [OK]</p>
                  <div className="pt-4 flex justify-between items-end">
                    <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-accent-cyan" />
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">System Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card group p-8 rounded-3xl">
              <div className={`w-12 h-12 ${f.iconWrap} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
