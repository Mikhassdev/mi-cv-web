export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100 px-6 py-24 relative overflow-hidden">
      
      {/* Efecto de luces de fondo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Contenedor Principal */}
      <section className="max-w-3xl text-center z-10">
        
        {/* Badge de disponibilidad */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para nuevos proyectos
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
          Miguel Jorquera Marín
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-3 text-slate-400">
          Analista Programador & Estudiante de Ingeniería en Informática
        </h2>

        {/* Descripción Breve */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Programador en proceso de capacitación y certificación. Me mantengo estudiando automatización de procesos mediante: <strong className="text-cyan-400 font-medium">ETL</strong> y desarrollo de soluciones backend robustas con entornos contenerizados.
        </p>

        {/* Tags de Tecnologías Clave (Píldoras) */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono text-slate-300">Docker & WSL2</span>
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono text-slate-300">Pentaho / ETL</span>
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono text-slate-300">Python & Django</span>
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono text-slate-300">MySQL / Kimball</span>
        </div>

        {/* Botones de Acción */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
        
        </div>

      </section>
    </main>
  );
}