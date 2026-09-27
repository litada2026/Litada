export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">LITADA Consulting</p>
          <p>Strategy. Architecture. Execution.</p>
        </div>
        <p className="md:text-right">
          © {new Date().getFullYear()} LITADA Consulting • litada.com • it@litada.com
        </p>
      </div>
    </footer>
  );
}
