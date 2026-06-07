export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-slate-100 px-6 py-12 md:py-24 relative overflow-hidden justify-center items-center">
      
      {/* Efecto de luces de fondo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Contenedor Principal en Sistema de Dos Columnas */}
      <section className="max-w-5xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: Nombre, Carreras y Estado */}
        <div className="flex flex-col space-y-4 md:sticky md:top-24">
          
          {/* Badge de disponibilidad */}
          <span className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevos proyectos
          </span>

          {/* Título e Identidad */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Miguel Jorquera Marín
          </h1>
          
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-300">
              Analista Programador
            </h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Estudiante de Ingeniería en Informática
            </p>
          </div>

          {/* Tags de Tecnologías Clave (Píldoras) */}
          <div className="pt-4 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-400">Docker & WSL2</span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-400">Pentaho / ETL</span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-400">Python & Django</span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-400">MySQL / Kimball</span>
          </div>
        </div>

        {/* COLUMNA DERECHA: Acerca de mí y contenido detallado */}
        <div className="space-y-6 text-slate-400 border-t border-slate-900 pt-8 md:border-t-0 md:pt-0 leading-relaxed">
          
          <h3 className="text-xl font-bold text-slate-200 tracking-tight">
            Acerca de mí
          </h3>

          <p className="text-base sm:text-lg">
            Soy un programador en constante proceso de capacitación y certificación, apasionado por resolver problemas complejos mediante tecnología eficiente. Actualmente me mantengo enfocado en el estudio profundo de la automatización de datos y el desarrollo backend moderno.
          </p>


          {/* Botón de acción rápido alineado a la derecha */}
          <div className="pt-4">
            <a 
              href="#contacto" 
              className="inline-block px-5 py-2.5 rounded-lg font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:opacity-90 transition shadow-lg shadow-teal-500/10 text-sm"
            >
              Contactar
            </a>
          </div>

        </div>

      </section>
    </main>
  );
}