import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function Slide01Cover({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center relative overflow-hidden px-8 text-center">

      {/* Nigeria map SVG outline - subtle background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 80 L150 60 L200 55 L250 65 L290 80 L310 110 L320 150 L315 190 L300 220 L280 250 L260 270 L240 290 L220 310 L200 320 L180 310 L160 290 L140 265 L120 240 L100 210 L90 180 L85 150 L90 120 Z" stroke="#00A859" strokeWidth="1.5" fill="#00A85910"/>
        <circle cx="200" cy="180" r="6" fill="#00A859" opacity="0.5"/>
        <circle cx="170" cy="160" r="3" fill="#00A859" opacity="0.3"/>
        <circle cx="230" cy="200" r="3" fill="#00A859" opacity="0.3"/>
        <circle cx="190" cy="220" r="3" fill="#00A859" opacity="0.3"/>
        <circle cx="210" cy="150" r="3" fill="#00A859" opacity="0.3"/>
      </svg>

      {/* Digital grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00A859" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated glow circles */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute rounded-full border border-[#00A859]/10 animate-pulse"
          style={{ width: 200 + i * 120, height: 200 + i * 120, animationDelay: `${i * 0.5}s`, animationDuration: `${3 + i}s` }} />
      ))}

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#00A859]/15 border border-[#00A859]/30 rounded-full px-5 py-1.5 text-[#00A859] text-xs font-semibold mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse" />
          NITDA · SRAP 2.0 · 2024–2027
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 leading-tight tracking-tight">
          Smart Tracking
        </h1>
        <h1 className="text-6xl md:text-7xl font-bold text-[#00A859] mb-6 leading-tight tracking-tight">
          System (STS)
        </h1>

        {/* Green accent line */}
        <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-[#00A859] to-transparent mx-auto mb-6 rounded-full" />

        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          Real-Time Execution Intelligence for NITDA SRAP 2.0 (2024–2027)
        </p>
        <p className="text-[#00A859]/80 text-base italic mb-12">
          "From strategy documents to measurable national outcomes."
        </p>

        <a href="https://groove-trust-75001135.figma.site/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#00A859] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm shadow-lg shadow-green-900/30 mb-10">
          <span>View Live Demo</span>
          <span>↗</span>
        </a>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-sm">Presented by: NITDA Digital Transformation Team &nbsp;|&nbsp; April 2026</p>
        </div>
      </motion.div>
    </motion.div>
}