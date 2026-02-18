export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">dataset</span>
              </div>
              <span className="text-xl font-extrabold tracking-tighter uppercase italic">Asauvia</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Engineering the intelligence layer for the modern enterprise. Systemized, scalable, and performance-first.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Platform</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-white transition-colors" href="#capabilities">AI & Automation</a></li>
              <li><a className="hover:text-white transition-colors" href="#capabilities">Web Development</a></li>
              <li><a className="hover:text-white transition-colors" href="#services">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
              <li><a className="hover:text-white transition-colors" href="#services">Careers</a></li>
              <li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Connect</h5>
            <div className="flex gap-4">
              {["share", "rss_feed", "alternate_email"].map((icon) => (
                <a key={icon} className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="#" aria-label={icon}>
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 Asauvia Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
