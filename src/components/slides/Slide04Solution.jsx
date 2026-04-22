import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const features = [
  { label: 'Unified Data Integration', angle: 0 },
  { label: 'Intelligent KPI Engine', angle: 72 },
  { label: 'Risk Alerts & Escalation', angle: 144 },
  { label: 'Executive Dashboards', angle: 216 },
  { label: 'Evidence-Based Reporting', angle: 288 },
]

export default function Slide04Solution({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-2 text-center">Introducing the <span className="text-[#00A859]">Smart Tracking System</span></motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-white/60 text-center max-w-2xl mb-10 text-sm">A centralized digital platform to monitor, evaluate, and report all SRAP 2.0 initiatives in real time.</motion.p>
      <div className="relative w-80 h-80">
        {/* Center badge */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3,type:'spring'}}
            className="w-24 h-24 rounded-full bg-[#00A859] flex items-center justify-center shadow-2xl shadow-green-500/40">
            <span className="text-white font-bold text-xl">STS</span>
          </motion.div>
        </div>
        {features.map((f, i) => {
          const rad = (f.angle - 90) * (Math.PI / 180)
          const r = 140
          const x = 160 + r * Math.cos(rad)
          const y = 160 + r * Math.sin(rad)
          return (
            <motion.div key={i} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.4+i*0.1}}
              className="absolute group cursor-default"
              style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}>
              <div className="bg-[#112240] border border-white/10 group-hover:border-[#00A859] group-hover:shadow-lg group-hover:shadow-green-500/20 rounded-xl px-3 py-2 text-white text-xs font-semibold text-center w-36 transition-all duration-300">
                {f.label}
              </div>
            </motion.div>
          )
        })}
        {/* Lines from center to nodes */}
        <svg className="absolute inset-0 w-full h-full" style={{zIndex:0}}>
          {features.map((f, i) => {
            const rad = (f.angle - 90) * (Math.PI / 180)
            const r = 115
            return <line key={i} x1="160" y1="160" x2={160+r*Math.cos(rad)} y2={160+r*Math.sin(rad)} stroke="#00A85940" strokeWidth="1.5" strokeDasharray="4 3" />
          })}
        </svg>
      </div>
    </motion.div>
  )
}