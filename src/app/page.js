export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-slate-100 px-4 py-12 md:px-8 md:py-20 relative overflow-hidden justify-center items-start">
      
      {/* Efecto de luces de fondo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Contenedor Principal: Ocupa el ancho máximo de la pantalla */}
      <section className="max-w-[100vw] w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 items-stretch text-left md:mt-12">
        
        {/* COLUMNA IZQUIERDA: Tarjeta de Identidad */}
        <div className="h-full flex flex-col justify-between bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl">
          
          <div className="space-y-6">
            {/* Badge de disponibilidad */}
            <span className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para nuevos proyectos
            </span>

            {/* Título e Identidad */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                Miguel Jorquera Marín
              </h1>
              
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-200">
                  Analista Programador
                </h2>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Estudiante de Ingeniería en Informática
                </p>
              </div>
            </div>
          </div>

          {/* Tags de Tecnologías Clave al fondo de la tarjeta */}
          <div className="pt-8 space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Tecnologías que estoy aprendiendo
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 shadow-sm">Docker & WSL2</span>
              <span className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 shadow-sm">Pentaho / ETL</span>
              <span className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 shadow-sm">Python & Django</span>
              <span className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 shadow-sm">MySQL / Kimball</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Tarjeta Acerca de Mí (Mismo tamaño exacto) */}
        <div className="h-full flex flex-col justify-between bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl text-slate-300 leading-relaxed">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight border-b border-slate-800 pb-3">
              Acerca de mí
            </h3>

            <p className="text-base sm:text-lg text-slate-300">
              Soy un programador en constante proceso de capacitación y certificación, apasionado por resolver problemas complejos mediante tecnología eficiente. Actualmente me mantengo enfocado en el estudio profundo de la automatización de datos y el desarrollo backend moderno.
            </p>
          </div>

          {/* Botón de acción empujado hacia el fondo de la tarjeta */}
          <div className="pt-8">
            <a 
              href="#contacto" 
              className="inline-block px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:opacity-90 transition shadow-lg shadow-teal-500/10 text-sm tracking-wide"
            >
              Contactar
            </a>
          </div>

        </div>

      </section>
    </main>
  );
}