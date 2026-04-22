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
      {/* Animated particles */}
      {Array.from({length: 20}).map((_,i) => (
        <div key={i} className="absolute rounded-full bg-[#00A859]/10 animate-pulse"
          style={{ width: Math.random()*80+20, height: Math.random()*80+20, left: Math.random()*100+'%', top: Math.random()*100+'%', animationDelay: Math.random()*3+'s', animationDuration: Math.random()*4+2+'s' }} />
      ))}
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.7}}>
        <div className="inline-block bg-[#00A859]/20 border border-[#00A859]/40 rounded-full px-4 py-1 text-[#00A859] text-sm font-semibold mb-6 tracking-widest uppercase">NITDA · SRAP 2.0 · 2024–2027</div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Smart Tracking<br /><span className="text-[#00A859]">System</span></h1>
        <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-2xl mx-auto">Real-Time Execution Intelligence for NITDA SRAP 2.0</p>
        <p className="text-[#00A859] text-lg italic mb-10">"From strategy documents to measurable national outcomes."</p>
        <div className="w-16 h-0.5 bg-[#00A859] mx-auto mb-6" />
        <p className="text-white/40 text-sm">Presented by NITDA &nbsp;|&nbsp; April 2026</p>
      </motion.div>
    </motion.div>
  )
}