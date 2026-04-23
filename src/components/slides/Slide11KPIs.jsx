import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const kpiData = [
  { kpi: '% SRAP Initiatives Onboarded', Baseline: 0, Target: 100 },
  { kpi: 'Reporting Cycle Time Reduction', Baseline: 0, Target: 70 },
  { kpi: 'On-Time Milestone Completion', Baseline: 45, Target: 85 },
  { kpi: 'Risk Detection Lead Time', Baseline: 20, Target: 100 },
  { kpi: 'Dashboard Usage Rate', Baseline: 0, Target: 90 },
  { kpi: 'Decision Turnaround Reduction', Baseline: 0, Target: 60 },
]

const tableRows = [
  { kpi: '% SRAP Initiatives Onboarded', baseline: '0%', target: '100%' },
  { kpi: 'Reporting Cycle Time Reduction', baseline: 'N/A', target: '70% faster' },
  { kpi: 'On-Time Milestone Completion', baseline: '45%', target: '85%' },
  { kpi: 'Avg Risk Detection Lead Time', baseline: '2 days', target: '14 days' },
  { kpi: 'Executive Dashboard Usage Rate', baseline: '0%', target: '90%' },
  { kpi: 'Decision Turnaround Reduction', baseline: 'N/A', target: '60% faster' },
]

export default function Slide11KPIs({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-6">
        How We Measure <span className="text-[#00A859]">STS Performance</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="bg-[#112240] rounded-2xl p-5">
          <p className="text-white/40 text-xs mb-3">Baseline vs Target (%)</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={kpiData} layout="vertical" margin={{ left: 130, right: 10 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#ffffff50', fontSize: 9 }} tickFormatter={v => v + '%'} />
              <YAxis type="category" dataKey="kpi" tick={{ fill: '#ffffffa0', fontSize: 9 }} width={125} />
              <Tooltip contentStyle={{ background: '#0B1F3A', border: 'none', color: '#fff', fontSize: 10 }} formatter={v => v + '%'} />
              <Legend wrapperStyle={{ color: '#fff', fontSize: 10 }} />
              <Bar dataKey="Baseline" fill="#ffffff20" radius={[0, 4, 4, 0]} name="Baseline" />
              <Bar dataKey="Target" fill="#00A859" radius={[0, 4, 4, 0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="bg-[#112240] rounded-2xl p-5 overflow-auto">
          <p className="text-white/40 text-xs mb-3">KPI Summary Table</p>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-white/30 border-b border-white/10">
                <th className="text-left font-normal pb-2 pr-3">KPI</th>
                <th className="text-center font-normal pb-2">Baseline</th>
                <th className="text-center font-normal pb-2">Target</th>
                <th className="text-center font-normal pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((r, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="text-white/70 py-2 pr-3">{r.kpi}</td>
                  <td className="text-center text-white/50 py-2">{r.baseline}</td>
                  <td className="text-center text-[#00A859] py-2 font-semibold">{r.target}</td>
                  <td className="text-center py-2">
                    <span className="bg-[#00A859]/20 text-[#00A859] text-xs px-2 py-0.5 rounded-full">Target</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  )
}