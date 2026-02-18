import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Capabilities from "./components/Capabilities.jsx";
import ServicesProducts from "./components/ServicesProducts.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // init theme
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector("nav");
      const glass = nav?.querySelector(".glass-nav");
      if (!nav || !glass) return;

      if (window.scrollY > 50) {
        nav.classList.add("py-2");
        glass.classList.add("shadow-2xl");
      } else {
        nav.classList.remove("py-2");
        glass.classList.remove("shadow-2xl");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30">
      <Navbar />

      <Hero />
      <About />
      <Capabilities />
      <ServicesProducts />
      <Contact />
      <Footer />

      {/* Floating dark mode toggle (from your contact HTML) */}
      <button
        type="button"
        onClick={toggleDark}
        className="fixed bottom-6 right-6 p-3 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:scale-110 transition-transform z-50"
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        <span className={"material-symbols-outlined " + (dark ? "hidden" : "block")}>dark_mode</span>
        <span className={"material-symbols-outlined " + (dark ? "block" : "hidden")}>light_mode</span>
      </button>
    </div>
  );
}
