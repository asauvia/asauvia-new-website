import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="ASAUViA Logo" className="h-16 w-auto" />
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
              {/* <li><a className="hover:text-white transition-colors" href="#services">Careers</a></li> */}
              <li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Connect</h5>
            <div className="flex gap-4">
              {[
                { icon: "linkedin", href: "https://www.linkedin.com/company/asauvia/?viewAsMember=true" },
                { icon: "alternate_email", href: "mailto:info@asauvia.com" }
              ].map(({ icon, href }) => (
                <a key={icon} className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white" href={href} aria-label={icon}>
                  {icon === "linkedin" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-3.5 h-3.5" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  ) : (
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 ASAUViA Systems. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
