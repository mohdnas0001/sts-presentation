import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const pillars = ['Knowledge', 'Policy', 'Infrastructure', 'Innovation', 'Entrepreneurship & Capital', 'Trade']

const srapPoints = [
  'Tracks initiatives across all SRAP 2.0 strategic pillars',
  'Connects targets to outputs and measurable outcomes',
  'Enables transparent implementation oversight',
  'Supports evidence-led performance reviews',
]

const ministryPoints = [
  'Supports evidence-led delivery across all strategic priorities',
  'Bridges ministry policy intent with field execution',
  'Provides real-time visibility into cross-pillar progress',
]

export default function Slide06Alignment({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-16">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-8 text-center">
        Built for <span className="text-[#00A859]">SRAP 2.0</span> + Ministry Priorities
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl w-full mb-6">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#112240] rounded-2xl p-6 border border-[#00A859]/20">
          <h3 className="text-[#00A859] font-bold text-lg mb-4">SRAP 2.0 Alignment</h3>
          {srapPoints.map((t, i) => (
            <div key={i} className="flex gap-2 mb-3 text-white/70 text-sm">
              <span className="text-[#00A859] mt-0.5 flex-shrink-0">✓</span>{t}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="bg-[#112240] rounded-2xl p-6 border border-[#00A859]/20">
          <h3 className="text-[#00A859] font-bold text-lg mb-2">Ministry of Communications, Innovation & Digital Economy</h3>
          {ministryPoints.map((t, i) => (
            <div key={i} className="flex gap-2 mb-2 text-white/70 text-sm">
              <span className="text-[#00A859] mt-0.5 flex-shrink-0">✓</span>{t}
            </div>
          ))}
          <p className="text-white/40 text-xs mt-3 mb-3">Covers all 6 strategic pillars:</p>
          <div className="flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.07 }}
                className="bg-[#00A859]/20 border border-[#00A859]/40 text-[#00A859] text-xs font-semibold px-3 py-1 rounded-full">{p}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
        className="w-full max-w-5xl bg-gradient-to-r from-[#00A859] to-green-700 rounded-2xl p-4 text-center shadow-xl shadow-green-900/30">
        <p className="text-white font-bold text-lg">🇳🇬 STS = Execution Backbone for Nigeria's Digital Economy Goals</p>
      </motion.div>
    </motion.div>
  )
}