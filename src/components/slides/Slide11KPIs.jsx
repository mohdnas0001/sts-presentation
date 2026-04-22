import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const data = [
  { kpi: 'Initiatives Onboarded', Baseline: 0, Target: 100 },
  { kpi: 'Reporting Cycle Reduction', Baseline: 0, Target: 70 },
  { kpi: 'On-Time Milestones', Baseline: 45, Target: 85 },
  { kpi: 'Risk Detection Lead Time', Baseline: 20, Target: 100 },
  { kpi: 'Dashboard Usage Rate', Baseline: 0, Target: 90 },
  { kpi: 'Decision Turnaround', Baseline: 0, Target: 60 },
]

export default function Slide11KPIs({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-white mb-6">How We Measure <span className="text-[#00A859]">STS Performance</span></motion.h2>
      <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.2}} className="w-full max-w-4xl bg-[#112240] rounded-2xl p-5">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} layout="vertical" margin={{left:120,right:20}}>
            <XAxis type="number" domain={[0,100]} tick={{fill:'#ffffff60',fontSize:10}} tickFormatter={v=>v+'%'} />
            <YAxis type="category" dataKey="kpi" tick={{fill:'#ffffffa0',fontSize:11}} width={115} />
            <Tooltip contentStyle={{background:'#0B1F3A',border:'none',color:'#fff',fontSize:11}} formatter={v=>v+'%'} />
            <Legend wrapperStyle={{color:'#fff',fontSize:11}} />
            <Bar dataKey="Baseline" fill="#ffffff30" radius={[0,4,4,0]} name="Baseline" />
            <Bar dataKey="Target" fill="#00A859" radius={[0,4,4,0]} name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}