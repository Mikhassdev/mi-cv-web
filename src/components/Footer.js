export default function Footer() {
  return (
    <footer className="w-full bg-slate-950/60 backdrop-blur-md border-t border-slate-900 px-4 py-6 md:px-8 text-center z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-xs text-slate-500 font-mono tracking-wide">
        <p>© {new Date().getFullYear()} — Miguel Jorquera Marín</p>
      </div>
    </footer>
  );
}