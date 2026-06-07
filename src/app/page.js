export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-slate-100 px-4 py-12 md:px-8 md:py-20 relative overflow-hidden justify-center items-start">
      
      {/* Efecto de luces de fondo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Contenedor Principal: Expandido a lo ancho */}
      <div className="max-w-[100vw] w-full z-10 flex flex-col space-y-8 md:mt-12">
        
        {/* FILA 1: Identidad (Izquierda) + Acerca de mí (Derecha) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 items-stretch text-left">
          
          {/* TARJETA 1: Identidad y Tecnologías */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
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

            {/* Tags de Tecnologías Clave */}
            <div className="pt-4 space-y-2">
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

          {/* TARJETA 3: Acerca de Mí */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl text-slate-300 leading-relaxed flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight border-b border-slate-800 pb-3">
                Acerca de mí
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                Soy un programador en constante proceso de capacitación y certificación, apasionado por resolver problemas complejos mediante tecnología eficiente. Actualmente me mantengo enfocado en el estudio profundo de la automatización de datos y el desarrollo backend moderno.
              </p>
            </div>

            {/* Botón de acción rápido */}
            <div className="pt-6">
            </div>
          </div>

        </section>

        {/* FILA 2: Formación Académica (Izquierda) + Habilidades (Derecha) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 items-stretch text-left">
          
          {/* TARJETA 2: Formación Académica */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100 tracking-tight border-b border-slate-800 pb-3 mb-6">
                Formación académica
              </h3>
              <div className="space-y-4 relative border-l border-slate-800 pl-4 ml-1">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Ingeniería en Informática</h4>
                  <p className="text-xs text-cyan-400 font-medium">INACAP • 2026 — En curso</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Analista Programador</h4>
                  <p className="text-xs text-slate-400 font-medium">INACAP • 2024 — 2025 • Cursando práctica profesional</p>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETA 4: Mis Habilidades */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-xl text-slate-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight border-b border-slate-800 pb-3 mb-6">
                Mis habilidades
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                {/* Sub-columna Técnicas */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Técnicas</h4>
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">HTML, CSS, JS</span>
                      <span className="font-mono text-teal-400 tracking-wider">★★★☆☆</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Uso y manejo de IA</span>
                      <span className="font-mono text-teal-400 tracking-wider">★★★★☆</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Docker & WSL2</span>
                      <span className="font-mono text-teal-400 tracking-wider">★★★☆☆</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Git & GitHub</span>
                      <span className="font-mono text-teal-400 tracking-wider">★★★★☆</span>
                    </div>
                  </div>
                </div>
                
                {/* Sub-columna Gestión */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Gestión</h4>
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Autoaprendizaje</span>
                      <span className="font-mono text-blue-400 tracking-wider">★★★★★</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Resolución de problemas</span>
                      <span className="font-mono text-blue-400 tracking-wider">★★★★★</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Adaptabilidad</span>
                      <span className="font-mono text-blue-400 tracking-wider">★★★★★</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                      <span className="text-slate-300">Trabajo en equipo</span>
                      <span className="font-mono text-blue-400 tracking-wider">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}