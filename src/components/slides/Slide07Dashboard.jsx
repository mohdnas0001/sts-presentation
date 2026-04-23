import { motion } from 'framer-motion'
import { RadialBarChart, RadialBar,
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  LineChart, Line,
  ResponsiveContainer, Legend
} from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const radialData = [{ name: 'Score', value: 78, fill: '#00A859' }]
const pieData = [
  { name: 'On Track', value: 60 },
  { name: 'At Risk', value: 25 },
  { name: 'Delayed', value: 15 },
]
const COLORS = ['#00A859', '#F59E0B', '#EF4444']
const barData = [
  { pillar: 'Digital Infra', val: 82 },
  { pillar: 'Talent Dev', val: 67 },
  { pillar: 'Cybersecurity', val: 74 },
  { pillar: 'Innovation', val: 55 },
  { pillar: 'Policy', val: 88 },
  { pillar: 'Research', val: 61 },
]
const lineData = [
  { month: 'Jan', Budget: 20, Progress: 15 },
  { month: 'Feb', Budget: 35, Progress: 30 },
  { month: 'Mar', Budget: 50, Progress: 47 },
  { month: 'Apr', Budget: 63, Progress: 60 },
  { month: 'May', Budget: 78, Progress: 72 },
  { month: 'Jun', Budget: 90, Progress: 85 },
]
const atRisk = [
  { name: 'Digital Skills Programme', risk: 'High', progress: '32%' },
  { name: 'State Connectivity Rollout', risk: 'High', progress: '41%' },
  { name: 'Startup Funding Initiative', risk: 'Medium', progress: '55%' },
  { name: 'Broadband Infrastructure', risk: 'Medium', progress: '58%' },
  { name: 'Policy Review Programme', risk: 'Low', progress: '70%' },
]
const tt = { contentStyle: { background: '#0d1f38', border: 'none', color: '#fff', fontSize: 10 } }

export default function Slide07Dashboard({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#070f1e] flex flex-col items-center justify-center px-8">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mb-4">
        What Leadership Will See <span className="text-[#00A859]">In Real Time</span>
      </motion.h2>

      <div className="grid grid-cols-4 gap-3 w-full max-w-5xl">
        {/* Radial Score */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="bg-[#112240] rounded-2xl p-3 flex flex-col items-center border border-white/5">
          <p className="text-white/50 text-xs mb-1">Overall SRAP Score</p>
          <ResponsiveContainer width="100%" height={100}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="80%" data={radialData} startAngle={90} endAngle={-270}>
              <RadialBar dataKey="value" cornerRadius={8} />
            </RadialBarChart>
          </ResponsiveContainer>
          <p className="text-[#00A859] text-3xl font-bold -mt-3">78%</p>
          <p className="text-white/30 text-xs mt-1">Performance Index</p>
        </motion.div>

        {/* Pie RAG */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}
          className="bg-[#112240] rounded-2xl p-3 flex flex-col items-center border border-white/5">
          <p className="text-white/50 text-xs mb-1">Initiative Status (RAG)</p>
          <ResponsiveContainer width="100%" height={110}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={42} dataKey="value">
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip {...tt} />
              <Legend wrapperStyle={{ color: '#fff', fontSize: 9 }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar pillar */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          className="bg-[#112240] rounded-2xl p-3 col-span-2 border border-white/5">
          <p className="text-white/50 text-xs mb-1">Pillar Completion Rates (%)</p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={barData} margin={{ top: 0, right: 5, left: -25, bottom: 0 }}>
              <XAxis dataKey="pillar" tick={{ fill: '#ffffff50', fontSize: 8 }} />
              <YAxis tick={{ fill: '#ffffff50', fontSize: 8 }} />
              <Tooltip {...tt} />
              <Bar dataKey="val" fill="#00A859" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Line budget vs progress */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }}
          className="bg-[#112240] rounded-2xl p-3 col-span-2 border border-white/5">
          <p className="text-white/50 text-xs mb-1">Budget vs Progress Trend</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" tick={{ fill: '#ffffff50', fontSize: 9 }} />
              <YAxis tick={{ fill: '#ffffff50', fontSize: 9 }} />
              <Tooltip {...tt} />
              <Legend wrapperStyle={{ color: '#fff', fontSize: 9 }} />
              <Line type="monotone" dataKey="Budget" stroke="#F59E0B" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Progress" stroke="#00A859" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top at-risk */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="bg-[#112240] rounded-2xl p-3 col-span-2 border border-white/5">
          <p className="text-white/50 text-xs mb-2">Top 5 At-Risk Initiatives</p>
          <table className="w-full text-xs">
            <thead><tr className="text-white/30"><th className="text-left font-normal pb-1">Initiative</th><th className="text-center font-normal pb-1">Risk</th><th className="text-right font-normal pb-1">Progress</th></tr></thead>
            <tbody>
              {atRisk.map((r, i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="text-white/70 py-1 pr-2">{r.name}</td>
                  <td className="text-center py-1">
                    <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${r.risk === 'High' ? 'bg-red-900/40 text-red-400' : r.risk === 'Medium' ? 'bg-amber-900/40 text-amber-400' : 'bg-green-900/40 text-green-400'}`}>{r.risk}</span>
                  </td>
                  <td className="text-right text-white/50 py-1">{r.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="mt-3 flex items-center gap-2">
        <a href="https://groove-trust-75001135.figma.site/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#00A859]/20 border border-[#00A859]/40 hover:bg-[#00A859] text-[#00A859] hover:text-white font-semibold px-4 py-1.5 rounded-full transition-all duration-300 text-xs">
          View Full Demo ↗
        </a>
      </motion.div>
    </motion.div>
  )
}