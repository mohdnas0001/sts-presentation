import { motion } from 'framer-motion'
import { RadialBarChart, RadialBar, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer, Legend } from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const radialData = [{ name: 'Score', value: 78, fill: '#00A859' }]
const pieData = [{ name: 'On Track', value: 60 },{ name: 'At Risk', value: 25 },{ name: 'Delayed', value: 15 }]
const COLORS = ['#00A859','#F59E0B','#EF4444']
const barData = [
  { pillar: 'Digital Infra', val: 82 },{ pillar: 'Talent Dev', val: 67 },{ pillar: 'Cybersecurity', val: 74 },
  { pillar: 'Innovation', val: 55 },{ pillar: 'Policy', val: 88 },{ pillar: 'Research', val: 61 },
  { pillar: 'Partnerships', val: 79 },{ pillar: 'Org Excellence', val: 70 },
]
const lineData = [
  { month: 'Jan', Budget: 20, Progress: 15 },{ month: 'Feb', Budget: 35, Progress: 30 },
  { month: 'Mar', Budget: 50, Progress: 47 },{ month: 'Apr', Budget: 63, Progress: 60 },
  { month: 'May', Budget: 78, Progress: 72 },{ month: 'Jun', Budget: 90, Progress: 85 },
]

const tt = { contentStyle: {background:'#112240',border:'none',color:'#fff',fontSize:11} }

export default function Slide07Dashboard({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0a1628] flex flex-col items-center justify-center px-8">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-3xl font-bold text-white mb-6">What Leadership Will See <span className="text-[#00A859]">In Real Time</span></motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"> 
        {/* Radial */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.2}} className="bg-[#112240] rounded-2xl p-3 flex flex-col items-center">
          <p className="text-white/50 text-xs mb-1">SRAP Performance</p>
          <ResponsiveContainer width="100%" height={120}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" data={radialData} startAngle={90} endAngle={-270}>
              <RadialBar dataKey="value" cornerRadius={8} />
            </RadialBarChart>
          </ResponsiveContainer>
          <p className="text-[#00A859] text-2xl font-bold -mt-2">78%</p>
        </motion.div>
        {/* Pie */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.3}} className="bg-[#112240] rounded-2xl p-3 flex flex-col items-center">
          <p className="text-white/50 text-xs mb-1">Initiative Status (RAG)</p>
          <ResponsiveContainer width="100%" height={130}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={50} dataKey="value">
                {pieData.map((_,i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip {...tt} />
              <Legend wrapperStyle={{color:'#fff',fontSize:10}} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
        {/* Bar */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.4}} className="bg-[#112240] rounded-2xl p-3 col-span-2">
          <p className="text-white/50 text-xs mb-1">Pillar Completion Rates (%)</p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={barData} margin={{top:0,right:5,left:-20,bottom:0}}>
              <XAxis dataKey="pillar" tick={{fill:'#ffffff60',fontSize:9}} />
              <YAxis tick={{fill:'#ffffff60',fontSize:9}} />
              <Tooltip {...tt} />
              <Bar dataKey="val" fill="#00A859" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
        {/* Line */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.5}} className="bg-[#112240] rounded-2xl p-3 col-span-4">
          <p className="text-white/50 text-xs mb-1">Budget vs Progress Trend</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" tick={{fill:'#ffffff60',fontSize:10}} />
              <YAxis tick={{fill:'#ffffff60',fontSize:10}} />
              <Tooltip {...tt} />
              <Legend wrapperStyle={{color:'#fff',fontSize:10}} />
              <Line type="monotone" dataKey="Budget" stroke="#F59E0B" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Progress" stroke="#00A859" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  )
}