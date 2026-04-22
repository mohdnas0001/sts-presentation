import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const phases = [
  { phase: 'Phase 1', days: '0–30 Days', title: 'Discovery', desc: 'KPI harmonization, governance setup', badge: 'Kickoff', color: 'border-blue-400' },
  { phase: 'Phase 2', days: '31–90 Days', title: 'MVP Build', desc: 'Pilot with selected pillars', badge: 'Pilot Go-live', color: 'border-purple-400' },
  { phase: 'Phase 3', days: '91–150 Days', title: 'Full Rollout', desc: 'Full SRAP onboarding + training', badge: 'Full Rollout', color: 'border-amber-400' },
  { phase: 'Phase 4', days: '151–180 Days', title: 'Optimization', desc: 'Predictive analytics integration', badge: 'Executive Review', color: 'border-green-400' },
]

const areaData = [
  {month:'M1',Onboarded:0},{month:'M2',Onboarded:10},{month:'M3',Onboarded:35},
  {month:'M4',Onboarded:65},{month:'M5',Onboarded:85},{month:'M6',Onboarded:100},
]

export default function Slide09Roadmap({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-16">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-8">180-Day <span className="text-[#00A859]">Rollout Roadmap</span></motion.h2>
      <div className="relative flex w-full max-w-4xl items-start mb-6">
        <div className="absolute top-6 left-0 w-full h-0.5 bg-white/20" />
        {phases.map((p,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2+i*0.15}}
            className="flex-1 flex flex-col items-center relative z-10">
            <div className={`w-4 h-4 rounded-full bg-[#00A859] border-2 border-white mb-3`} />
            <div className={`bg-[#112240] border-l-4 ${p.color} rounded-xl p-3 text-center w-11/12`}> 
              <p className="text-white/50 text-xs">{p.days}</p>
              <p className="text-white font-bold text-sm">{p.title}</p>
              <p className="text-white/50 text-xs mt-1">{p.desc}</p>
              <span className="inline-block mt-2 bg-[#00A859]/20 text-[#00A859] text-xs px-2 py-0.5 rounded-full">{p.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="w-full max-w-4xl bg-[#112240] rounded-2xl p-4">
        <p className="text-white/50 text-xs mb-2 text-center">Projected Initiatives Onboarded (%)</p>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={areaData}>
            <XAxis dataKey="month" tick={{fill:'#ffffff60',fontSize:10}} />
            <YAxis tick={{fill:'#ffffff60',fontSize:10}} />
            <Tooltip contentStyle={{background:'#112240',border:'none',color:'#fff',fontSize:11}} />
            <Area type="monotone" dataKey="Onboarded" stroke="#00A859" fill="#00A85930" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}