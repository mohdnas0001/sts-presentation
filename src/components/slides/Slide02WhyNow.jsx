import { motion } from 'framer-motion'
import { FaBullseye, FaNetworkWired, FaChartLine } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const cards = [
  { icon: FaBullseye, title: 'Ambitious National Digital Agenda', body: 'SRAP 2.0 spans multiple pillars, programs, and stakeholders across Nigeria\'s digital economy transformation.' },
  { icon: FaNetworkWired, title: 'Execution Complexity', body: 'Progress tracking is fragmented across units, departments, and reporting formats with no unified view.' },
  { icon: FaChartLine, title: 'Leadership Needs Real-Time Insight', body: 'Decisions require live evidence and data — not delayed static reports delivered weeks after the fact.' },
]

export default function Slide02WhyNow({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
        className="text-4xl font-bold text-white mb-12">Why STS, <span className="text-[#00A859]">Why Now?</span></motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((c, i) => (
          <motion.div key={i} initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.2+i*0.15}}
            className="bg-[#112240] border-t-4 border-[#00A859] rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 cursor-default">
            <c.icon className="text-[#00A859] text-3xl mb-4" />
            <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}