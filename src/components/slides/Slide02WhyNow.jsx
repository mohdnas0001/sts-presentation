import { motion } from 'framer-motion'
import { FaBullseye, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const cards = [
  {
    icon: FaBullseye,
    title: 'Ambitious National Digital Agenda',
    body: 'SRAP 2.0 has multiple pillars, programs, and stakeholders — each requiring coordinated oversight across Nigeria\'s digital economy transformation.',
    color: 'from-blue-900/60 to-blue-800/40',
    border: 'border-blue-400/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: FaNetworkWired,
    title: 'Execution Complexity',
    body: 'Progress tracking is fragmented across units and reporting formats — making it impossible to get a unified, accurate picture of performance.',
    color: 'from-amber-900/60 to-amber-800/40',
    border: 'border-amber-400/40',
    iconColor: 'text-amber-400',
  },
  {
    icon: FaTachometerAlt,
    title: 'Leadership Needs Real-Time Insight',
    body: 'Decisions require live evidence, not delayed reports. Without real-time data, interventions come too late and opportunities are missed.',
    color: 'from-green-900/60 to-green-800/40',
    border: 'border-[#00A859]/40',
    iconColor: 'text-[#00A859]',
  },
]

export default function Slide02WhyNow({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white">Why STS, <span className="text-[#00A859]">Why Now?</span></h2>
        <p className="text-white/40 mt-3 text-sm">The case for a unified execution intelligence platform</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((c, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
            className={`bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl p-7 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default`}>
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5`}></div>
            <h3 className="text-white font-bold text-lg mb-3 leading-snug">{c.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}