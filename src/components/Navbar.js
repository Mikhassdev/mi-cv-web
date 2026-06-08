export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950/60 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Título de la sección */}
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Enlaces Profesionales
        </span>

        {/* Botones de Redes */}
        <div className="flex items-center gap-4">
          {/* Botón GitHub */}
          <a
            href="https://github.com/Mikhassdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-teal-400 transition"
          >
            GitHub
          </a>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/miguel-angel-jorquera-marin-4026ba400/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:opacity-90 transition font-semibold"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </nav>
  );
}