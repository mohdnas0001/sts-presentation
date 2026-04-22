import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ProgressBar from './components/ProgressBar'
import SlideNav from './components/SlideNav'
import Slide01Cover from './components/slides/Slide01Cover'
import Slide02WhyNow from './components/slides/Slide02WhyNow'
import Slide03Problem from './components/slides/Slide03Problem'
import Slide04Solution from './components/slides/Slide04Solution'
import Slide05Architecture from './components/slides/Slide05Architecture'
import Slide06Alignment from './components/slides/Slide06Alignment'
import Slide07Dashboard from './components/slides/Slide07Dashboard'
import Slide08Benefits from './components/slides/Slide08Benefits'
import Slide09Roadmap from './components/slides/Slide09Roadmap'
import Slide10Governance from './components/slides/Slide10Governance'
import Slide11KPIs from './components/slides/Slide11KPIs'
import Slide12Ask from './components/slides/Slide12Ask'

const slides = [
  Slide01Cover, Slide02WhyNow, Slide03Problem, Slide04Solution,
  Slide05Architecture, Slide06Alignment, Slide07Dashboard, Slide08Benefits,
  Slide09Roadmap, Slide10Governance, Slide11KPIs, Slide12Ask
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index) => {
    if (index < 0 || index >= slides.length) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(current - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  const SlideComponent = slides[current]

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0B1F3A] relative">
      <CustomCursor />
      <ProgressBar current={current} total={slides.length} />
      <AnimatePresence mode="wait" custom={direction}>
        <SlideComponent key={current} direction={direction} />
      </AnimatePresence>
      <SlideNav current={current} total={slides.length} goTo={goTo} />
    </div>
  )
}
