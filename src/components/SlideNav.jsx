export default function SlideNav({ current, total, goTo }) {
  return (
    <>
      {/* Dot nav */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#00A859] scale-125' : 'bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
      {/* Bottom nav */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
        <button onClick={() => goTo(current - 1)} disabled={current === 0}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm disabled:opacity-30 transition">← Prev</button>
        <span className="text-white/50 text-sm font-mono">{String(current + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
        <button onClick={() => goTo(current + 1)} disabled={current === total - 1}
          className="px-4 py-2 rounded-full bg-[#00A859] hover:bg-green-600 text-white text-sm disabled:opacity-30 transition">Next →</button>
      </div>
      <p className="fixed bottom-2 left-1/2 -translate-x-1/2 text-white/20 text-xs z-50">Use ← → arrow keys to navigate</p>
    </>
  )
}