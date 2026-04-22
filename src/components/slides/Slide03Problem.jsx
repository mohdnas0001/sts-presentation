import { motion } from 'framer-motion'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const data = [
  { subject: 'Data Integration', Current: 2, Desired: 9 },
  { subject: 'KPI Consistency', Current: 3, Desired: 9 },
  { subject: 'Risk Visibility', Current: 2, Desired: 8 },
  { subject: 'Reporting Speed', Current: 3, Desired: 9 },
  { subject: 'Cross-pillar View', Current: 2, Desired: 9 },
]

const pains = ['Siloed data across departments','Manual and delayed reporting cycles','Inconsistent KPI definitions','Weak early-risk signaling','Limited cross-pillar visibility']

export default function Slide03Problem({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-8">Current <span className="text-red-400">Monitoring Gaps</span></motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{delay:0.2}} className="bg-[#112240] rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4 text-lg">Pain Points</h3>
          <ul className="space-y-3">
            {pains.map((p,i) => (
              <motion.li key={i} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.1}}
                className="flex items-start gap-3 text-white/70 text-sm"> 
                <span className="text-red-400 mt-0.5 text-lg">●</span>{p}
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 font-semibold text-sm mb-2">Impact</p>
            {['Slow decision-making','Missed milestones','Reduced accountability','Lower policy impact traceability'].map((t,i)=>(
              <p key={i} className="text-red-300/70 text-xs">⚠ {t}</p>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{delay:0.3}} className="bg-[#112240] rounded-2xl p-4 flex flex-col">
          <h3 className="text-white font-semibold mb-2 text-sm text-center">Current State vs Desired State</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={data}>
              <PolarGrid stroke="#ffffff20" />
              <PolarAngleAxis dataKey="subject" tick={{fill:'#ffffff80',fontSize:11}} />
              <Radar name="Current" dataKey="Current" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
              <Radar name="Desired" dataKey="Desired" stroke="#00A859" fill="#00A859" fillOpacity={0.3} />
              <Legend wrapperStyle={{color:'#fff',fontSize:12}} />
              <Tooltip contentStyle={{background:'#112240',border:'none',color:'#fff'}} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  )
}