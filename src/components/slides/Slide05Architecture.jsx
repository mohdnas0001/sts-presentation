import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const layers = [
  { label: 'Data Layer', color: 'from-blue-900 to-blue-700', border: 'border-blue-500', chips: ['Departments','Programs','Project Owners','Partners'], desc: 'All organizational data sources feeding into STS' },
  { label: 'Processing Layer', color: 'from-purple-900 to-purple-700', border: 'border-purple-500', chips: ['KPI Standardization','Validation','Milestone Tracking'], desc: 'Data normalization and quality assurance engine' },
  { label: 'Intelligence Layer', color: 'from-amber-900 to-amber-700', border: 'border-amber-500', chips: ['Performance Scoring','Trend Analytics','Risk Prediction'], desc: 'AI-assisted insights and early warning signals' },
  { label: 'Experience Layer', color: 'from-green-900 to-green-700', border: 'border-green-500', chips: ['Leadership Dashboard','Pillar Scorecards','Report Exports'], desc: 'Presentation layer for decision-makers and stakeholders' },
]

export default function Slide05Architecture({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-8">STS <span className="text-[#00A859]">Architecture</span> End-to-End</motion.h2>
      <div className="flex flex-col gap-3 w-full max-w-3xl">
        {layers.map((l, i) => (
          <motion.div key={i} initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}} transition={{delay:0.15*i+0.2}}
            className={`bg-gradient-to-r ${l.color} border-l-4 ${l.border} rounded-xl px-5 py-3 flex items-center gap-4`}> 
            <div className="flex-1">
              <p className="text-white font-bold text-sm mb-1">{l.label}</p>
              <p className="text-white/50 text-xs">{l.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {l.chips.map((c,j) => (
                <span key={j} className="bg-white/10 text-white/80 text-xs px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="flex justify-center mt-2">
          <span className="text-[#00A859] text-2xl animate-bounce">↑ Data flows upward through all layers</span>
        </div>
      </div>
    </motion.div>
  )
}