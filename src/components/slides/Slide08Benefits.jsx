import { motion } from 'framer-motion'
import { FaCrown, FaCogs, FaUniversity } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const cols = [
  {
    icon: FaCrown,
    title: 'For Leadership',
    color: 'border-blue-400',
    iconColor: 'text-blue-400',
    bg: 'bg-blue-900/10',
    points: [
      'Faster, evidence-based decisions',
      'Early intervention on delayed projects',
      'Clear strategic performance overview',
    ],
  },
  {
    icon: FaCogs,
    title: 'For Delivery Teams',
    color: 'border-[#00A859]',
    iconColor: 'text-[#00A859]',
    bg: 'bg-green-900/10',
    points: [
      'Clear accountability and milestone ownership',
      'Reduced manual reporting workload',
      'Standardized progress communication',
    ],
  },
  {
    icon: FaUniversity,
    title: 'For Public Sector Accountability',
    color: 'border-amber-400',
    iconColor: 'text-amber-400',
    bg: 'bg-amber-900/10',
    points: [
      'Traceable impact reporting',
      'Increased transparency and trust',
      'Better confidence in government delivery',
    ],
  },
]

export default function Slide08Benefits({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#F7F9FC] flex flex-col items-center justify-center px-10">

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-[#0B1F3A] mb-2">
        Expected <span className="text-[#00A859]">Outcomes</span> & Benefits
      </motion.h2>
      <p className="text-gray-500 text-sm mb-10">Value delivered across every stakeholder group</p>

      <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
        {cols.map((c, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
            className={`bg-white rounded-2xl shadow-xl p-7 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default border-b-4 ${c.color} ${c.bg}`}> 
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5">
              <c.icon className={`${c.iconColor} text-2xl`} />
            </div>
            <h3 className="text-[#0B1F3A] font-bold text-lg mb-4">{c.title}</h3>
            <ul className="space-y-3">
              {c.points.map((p, j) => (
                <li key={j} className="text-gray-600 text-sm flex gap-2 items-start">
                  <span className="text-[#00A859] mt-0.5 flex-shrink-0">✓</span>{p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}