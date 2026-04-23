import { motion } from 'framer-motion'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const phases = [
  { days: '0–30 Days', title: 'Phase 1: Discovery', desc: 'KPI harmonization, governance setup', badge: 'Kickoff', color: 'border-blue-400', dot: 'bg-blue-400' },
  { days: '31–90 Days', title: 'Phase 2: MVP Build', desc: 'Pilot with selected pillars', badge: 'Pilot Go-live', color: 'border-purple-400', dot: 'bg-purple-400' },
  { days: '91–150 Days', title: 'Phase 3: Full Rollout', desc: 'Full SRAP onboarding + training', badge: 'Full Rollout', color: 'border-amber-400', dot: 'bg-amber-400' },
  { days: '151–180 Days', title: 'Phase 4: Optimization', desc: 'Predictive analytics integration', badge: 'Executive Review', color: 'border-[#00A859]', dot: 'bg-[#00A859]' },
]

const areaData = [
  { month: 'M1', Onboarded: 0 }, { month: 'M2', Onboarded: 10 },
  { month: 'M3', Onboarded: 35 }, { month: 'M4', Onboarded: 65 },
  { month: 'M5', Onboarded: 85 }, { month: 'M6', Onboarded: 100 },
]

export default function Slide09Roadmap({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#0B1F3A] flex flex-col items-center justify-center px-10 pb-14">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-8">
        180-Day <span className="text-[#00A859]">Rollout Roadmap</span>
      </motion.h2>

      <div className="relative flex w-full max-w-4xl items-start mb-6">
        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-[22px] left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 via-amber-400 to-[#00A859]" />

        {phases.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.2 }}
            className="flex-1 flex flex-col items-center relative z-10">
            <div className={`w-5 h-5 rounded-full ${p.dot} border-2 border-white mb-4 shadow-lg`} />
            <div className={`bg-[#112240] border-l-4 ${p.color} rounded-xl p-3 text-center w-11/12`}>{
              <p className="text-white/40 text-xs mb-1">{p.days}</p>
              <p className="text-white font-bold text-sm">{p.title}</p>
              <p className="text-white/50 text-xs mt-1 leading-snug">{p.desc}</p>
              <span className="inline-block mt-2 bg-[#00A859]/20 text-[#00A859] text-xs px-2 py-0.5 rounded-full font-semibold">{p.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="w-full max-w-4xl bg-[#112240] rounded-2xl p-4">
        <p className="text-white/40 text-xs mb-2 text-center">Projected SRAP Initiatives Onboarded (%)</p>
        <ResponsiveContainer width="100%" height={90}>
          <AreaChart data={areaData}>
            <XAxis dataKey="month" tick={{ fill: '#ffffff50', fontSize: 10 }} />
            <YAxis tick={{ fill: '#ffffff50', fontSize: 10 }} />
            <Tooltip contentStyle={{ background: '#112240', border: 'none', color: '#fff', fontSize: 11 }} formatter={v => v + '%'} />
            <Area type="monotone" dataKey="Onboarded" stroke="#00A859" fill="#00A85930" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}