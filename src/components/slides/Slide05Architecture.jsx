import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const layers = [
  {
    label: 'Experience Layer',
    color: 'from-green-900/80 to-green-800/60',
    border: 'border-l-[#00A859]',
    icon: '🖥️',
    chips: ['Leadership Dashboard', 'Pillar Scorecards', 'Report Exports'],
    desc: 'Decision-maker interface — what leadership sees and acts on',
  },
  {
    label: 'Intelligence Layer',
    color: 'from-amber-900/80 to-amber-800/60',
    border: 'border-l-amber-400',
    icon: '🧠',
    chips: ['Performance Scoring', 'Trend Analytics', 'Risk Prediction'],
    desc: 'AI-assisted insights, early-warning signals and forecasting',
  },
  {
    label: 'Processing Layer',
    color: 'from-purple-900/80 to-purple-800/60',
    border: 'border-l-purple-400',
    icon: '⚙️',
    chips: ['KPI Standardization', 'Validation', 'Milestone Tracking'],
    desc: 'Data normalization, quality assurance and transformation engine',
  },
  {
    label: 'Data Layer',
    color: 'from-blue-900/80 to-blue-800/60',
    border: 'border-l-blue-400',
    icon: '🗄️',
    chips: ['Departments', 'Programs', 'Project Owners', 'Partners'],
    desc: 'All organizational data sources feeding into STS',
  },
]

export default function Slide05Architecture({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white mb-8">
        STS <span className="text-[#00A859]">Architecture</span> <span className="text-white/50 text-3xl font-normal">(End-to-End)</span>
      </motion.h2>

      <div className="flex flex-col gap-3 w-full max-w-4xl">
        {layers.map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i + 0.2 }}
            className={`bg-gradient-to-r ${l.color} border-l-4 ${l.border} rounded-xl px-6 py-4 flex items-center gap-5`}>  
            <span className="text-2xl">{l.icon}</span>
            <div className="flex-1">
              <p className="text-white font-bold text-base">{l.label}</p>
              <p className="text-white/50 text-xs mt-0.5">{l.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {l.chips.map((c, j) => (
                <span key={j} className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="flex justify-center mt-2 gap-4">
          {['Data flows upward ↑', 'Insights flow downward ↓'].map((t, i) => (
            <span key={i} className="text-white/30 text-xs">{t}</span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}