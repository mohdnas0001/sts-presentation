import { motion } from 'framer-motion'
import { FaRocket, FaUserTie, FaLink, FaCoins } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const asks = [
  { icon: FaRocket, num: '01', title: 'Approve 90-Day Pilot Deployment', desc: 'Authorize the initial pilot phase with selected SRAP 2.0 pillars' },
  { icon: FaUserTie, num: '02', title: 'Nominate Executive Sponsor & PMO Focal Team', desc: 'Designate key leadership and coordination ownership' },
  { icon: FaLink, num: '03', title: 'Authorize Cross-Department Data Integration Mandate', desc: 'Enable seamless data flows across all NITDA departments' },
  { icon: FaCoins, num: '04', title: 'Approve Implementation Budget & Governance Model', desc: 'Secure resources for full STS deployment and sustainability' },
]

export default function Slide12Ask({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-16">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-8">Decision Required <span className="text-[#00A859]">to Proceed</span></motion.h2>
      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full mb-8">
        {asks.map((a, i) => (
          <motion.div key={i} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.15*i+0.2}}
            className="bg-[#112240] rounded-2xl p-5 border border-white/5 hover:border-[#00A859]/50 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 cursor-default group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00A859]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A859] transition-colors duration-300">
                <a.icon className="text-[#00A859] group-hover:text-white text-lg transition-colors duration-300" />
              </div>
              <div>
                <span className="text-[#00A859]/60 text-xs font-mono">{a.num}</span>
                <p className="text-white font-bold text-sm mb-1">{a.title}</p>
                <p className="text-white/50 text-xs">{a.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.8}} className="text-center">
        <p className="text-[#00A859] text-xl font-bold italic max-w-2xl">"What gets measured with integrity gets delivered with impact."</p>
        <p className="text-white/30 text-sm mt-3">NITDA · Smart Tracking System · April 2026</p>
      </motion.div>
    </motion.div>
  )
}