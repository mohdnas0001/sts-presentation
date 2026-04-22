import { motion } from 'framer-motion'
import { FaShieldAlt } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const checks = [
  'Role-based access controls','Audit trails and change logs','Data validation workflows',
  'Secure hosting and encryption','Compliance-ready reporting structures','Disaster recovery and data backup',
]

export default function Slide10Governance({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-10">Designed for <span className="text-[#00A859]">Public-Sector Reliability</span></motion.h2>
      <div className="flex gap-12 items-center max-w-4xl w-full">
        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.2,type:'spring'}} className="flex-shrink-0">
          <div className="w-40 h-40 rounded-full bg-[#00A859]/10 border-2 border-[#00A859]/30 flex items-center justify-center animate-pulse">
            <FaShieldAlt className="text-[#00A859] text-7xl" />
          </div>
        </motion.div>
        <div className="flex-1">
          {checks.map((c,i) => (
            <motion.div key={i} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.1}}
              className="flex items-center gap-3 mb-3 bg-[#112240] rounded-xl px-4 py-2.5">
              <span className="text-[#00A859] text-lg font-bold">✓</span>
              <span className="text-white/80 text-sm">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.9}} className="flex gap-4 mt-6">
        {['ISO-Aligned','NDPR Compliant','Government-Grade Security'].map((b,i) => (
          <span key={i} className="bg-[#00A859]/20 border border-[#00A859]/40 text-[#00A859] text-sm font-semibold px-4 py-1.5 rounded-full">{b}</span>
        ))}
      </motion.div>
    </motion.div>
  )
}