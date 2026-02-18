import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-nav rounded-2xl border-white/10 flex items-center justify-between px-6 py-3">
          {/* <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <img src={logo} alt="ASAUVIA Logo" className="h-10 w-auto" />
          </a> */}

          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              A
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">ASAUVIA</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#home">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#capabilities">Capabilities</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="hidden sm:block text-sm font-semibold px-5 py-2.5 bg-primary hover:bg-indigo-600 text-white rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95"
              href="#contact"
            >
              Contact
            </a>
            <button className="md:hidden p-2 text-slate-400" type="button" aria-label="Open menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
