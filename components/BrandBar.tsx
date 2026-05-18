/** Logo only — no nav (reduces distraction) */
export function BrandBar() {
  return (
    <header className="pt-6 pb-2">
      <div className="mx-auto flex max-w-6xl justify-center px-5 sm:px-6">
        <div className="flex items-center gap-2" aria-label="ReGlow">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 text-lg font-bold text-white shadow-md">
            R
          </span>
          <span className="text-xl font-bold bg-gradient-to-l from-brand-600 to-purple-600 bg-clip-text text-transparent">
            ReGlow
          </span>
        </div>
      </div>
    </header>
  );
}
