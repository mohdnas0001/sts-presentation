import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const pillars = ['Knowledge','Policy','Infrastructure','Innovation','Entrepreneurship & Capital','Trade']

export default function Slide06Alignment({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-16">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-8 text-center">Built for <span className="text-[#00A859]">SRAP 2.0</span> + Ministry Priorities</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{delay:0.2}} className="bg-[#112240] rounded-2xl p-6 border border-[#00A859]/20"> 
          <h3 className="text-[#00A859] font-bold text-lg mb-4">SRAP 2.0 Alignment</h3>
          {['Tracks all initiatives across SRAP 2.0 strategic pillars','Creates traceability: Target → Activity → Impact','Enables transparent implementation oversight','Supports evidence-led performance reviews'].map((t,i)=>(
            <div key={i} className="flex gap-2 mb-2 text-white/70 text-sm"><span className="text-[#00A859]">✓</span>{t}</div>
          ))}
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{delay:0.3}} className="bg-[#112240] rounded-2xl p-6 border border-[#00A859]/20"> 
          <h3 className="text-[#00A859] font-bold text-lg mb-2">Ministry of Communications, Innovation & Digital Economy</h3>
          <p className="text-white/50 text-xs mb-4">STS directly supports delivery across all 6 ministry strategic pillars:</p>
          <div className="flex flex-wrap gap-2">
            {pillars.map((p,i) => (
              <motion.span key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4+i*0.08}}
                className="bg-[#00A859]/20 border border-[#00A859]/40 text-[#00A859] text-xs font-semibold px-3 py-1 rounded-full">{p}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6}}
        className="mt-6 w-full max-w-4xl bg-[#00A859] rounded-2xl p-4 text-center">
        <p className="text-white font-bold text-lg">STS = Execution Backbone for Nigeria's Digital Economy Goals</p>
      </motion.div>
    </motion.div>
  )
}