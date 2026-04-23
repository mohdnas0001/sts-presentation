import { motion } from 'framer-motion'
import { FaRocket, FaUserTie, FaLink, FaCoins } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const asks = [
  { icon: FaRocket, num: '01', title: 'Approve 90-Day Pilot Deployment', desc: 'Authorize the initial pilot phase with selected SRAP 2.0 pillars and a defined scope.' },
  { icon: FaUserTie, num: '02', title: 'Nominate Executive Sponsor & PMO Focal Team', desc: 'Designate key leadership and coordination ownership for accountability.' },
  { icon: FaLink, num: '03', title: 'Authorize Cross-Department Data Integration Mandate', desc: 'Enable seamless data flows across all NITDA departments and project units.' },
  { icon: FaCoins, num: '04', title: 'Approve Implementation Budget & Governance Model', desc: 'Secure resources and a governance structure for full STS deployment and sustainability.' },
]

export default function Slide12Ask({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-16">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-2 text-center">
        Decision Required <span className="text-[#00A859]">to Proceed</span>
      </motion.h2>
      <p className="text-white/40 text-sm mb-8">Four actions needed to launch the Smart Tracking System</p>

      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full mb-8">
        {asks.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i + 0.2 }}
            className="bg-[#112240] rounded-2xl p-5 border border-white/5 hover:border-[#00A859]/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 cursor-default group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A859]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A859] transition-colors duration-300">
                <a.icon className="text-[#00A859] group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <span className="text-[#00A859]/50 text-xs font-mono">{a.num}</span>
                <p className="text-white font-bold text-sm mb-1 mt-0.5">{a.title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
        className="text-center">
        <div className="w-12 h-0.5 bg-[#00A859] mx-auto mb-4" />
        <p className="text-[#00A859] text-xl font-bold italic max-w-2xl mx-auto leading-relaxed">
          "What gets measured with integrity gets delivered with impact."
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <p className="text-white/30 text-sm">NITDA · Smart Tracking System · April 2026</p>
          <span className="text-white/20">|</span>
          <a href="https://groove-trust-75001135.figma.site/" target="_blank" rel="noreferrer"
            className="text-[#00A859]/60 hover:text-[#00A859] text-xs transition-colors underline">View Demo ↗</a>
        </div>
      </motion.div>
    </motion.div>
  )
}