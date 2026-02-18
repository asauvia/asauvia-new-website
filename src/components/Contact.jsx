export default function Contact() {
  return (
    <section id="contact" className="mesh-gradient-bg py-20 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We handle the complexities of modern software engineering so you can focus on your business goals. Everything under one roof.
          </p>
        </div>

        <div className="bg-white/95 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row contact-card-shadow">
          {/* Left info */}
          <div className="md:w-[40%] bg-gradient-to-br from-cyan-500 via-primary to-blue-600 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-cyan-50 mb-10 text-lg opacity-90 leading-relaxed">
                Tell us what you’re building—our team will respond with a clear plan and next steps.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2.5 rounded-lg">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-100 font-medium">Phone Number</p>
                    <p className="text-lg font-semibold">+8801779717686</p>
                    <p className="text-lg font-semibold">+988678363866</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2.5 rounded-lg">
                    <span className="material-symbols-outlined text-2xl">alternate_email</span>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-100 font-medium">Email Address</p>
                    <p className="text-lg font-semibold">support@asauvia.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2.5 rounded-lg">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-100 font-medium">Headquarters</p>
                    <p className="text-lg font-semibold">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10 flex space-x-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#" aria-label="Facebook">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#" aria-label="Twitter">
                <span className="material-symbols-outlined">rss_feed</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#" aria-label="Email">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="md:w-[60%] p-8 md:p-14 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  ["name", "Your Name", "text"],
                  ["email", "Your Email", "email"],
                  ["company", "Company", "text"],
                  ["subject", "Subject", "text"],
                ].map(([id, label, type]) => (
                  <div className="relative group" key={id}>
                    <input
                      className="floating-label-input block w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-all duration-300 placeholder-transparent focus:ring-0"
                      id={id}
                      name={id}
                      placeholder=" "
                      type={type}
                    />
                    <label className="absolute left-0 top-2.5 text-slate-500 dark:text-slate-400 transition-all duration-300 pointer-events-none origin-left" htmlFor={id}>
                      {label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <textarea
                  className="floating-label-input block w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-all duration-300 placeholder-transparent focus:ring-0 resize-none"
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={4}
                />
                <label className="absolute left-0 top-2.5 text-slate-500 dark:text-slate-400 transition-all duration-300 pointer-events-none origin-left" htmlFor="message">
                  Write here your message
                </label>
              </div>

              <div className="pt-4">
                <button
                  className="gradient-btn group relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-lg shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-black text-white tracking-tighter">asauvia</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <div className="flex space-x-8 text-sm font-medium text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </section>
  );
}
