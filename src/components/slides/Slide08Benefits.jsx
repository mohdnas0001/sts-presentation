import { motion } from 'framer-motion'
import { FaCrown, FaCogs, FaUniversity } from 'react-icons/fa'

const variants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

const cols = [
  { icon: FaCrown, title: 'For Leadership', points: ['Faster, evidence-based decisions','Early intervention on at-risk initiatives','Clear strategic performance overview'] },
  { icon: FaCogs, title: 'For Delivery Teams', points: ['Clear ownership & milestone transparency','Reduced manual reporting workload','Standardized progress communication'] },
  { icon: FaUniversity, title: 'For Public Accountability', points: ['Traceable, evidence-based impact reporting','Increased transparency & stakeholder trust','Better confidence in government delivery'] },
]

export default function Slide08Benefits({ direction }) {
  return (
    <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-screen bg-[#F7F9FC] flex flex-col items-center justify-center px-10">
      <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-[#0B1F3A] mb-10">Expected <span className="text-[#00A859]">Outcomes</span> & Benefits</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cols.map((c, i) => (
          <motion.div key={i} initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.2+i*0.15}}
            className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default border-b-4 border-[#00A859]">
            <c.icon className="text-[#00A859] text-4xl mb-4" />
            <h3 className="text-[#0B1F3A] font-bold text-lg mb-3">{c.title}</h3>
            <ul className="space-y-2">
              {c.points.map((p,j) => (
                <li key={j} className="text-gray-600 text-sm flex gap-2"><span className="text-[#00A859]">✓</span>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}