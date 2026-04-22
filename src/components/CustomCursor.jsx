import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px'
        dotRef.current.style.top = y + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = x + 'px'
        ringRef.current.style.top = y + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const addHover = () => ringRef.current?.classList.add('scale-150', 'border-green-400')
    const removeHover = () => ringRef.current?.classList.remove('scale-150', 'border-green-400')
    const els = document.querySelectorAll('button, a, [data-hover]')
    els.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover) })
    return () => els.forEach(el => { el.removeEventListener('mouseenter', addHover); el.removeEventListener('mouseleave', removeHover) })
  })

  return (
    <>
      <div ref={dotRef} className="fixed w-2.5 h-2.5 bg-[#00A859] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-none" style={{transitionDuration:'0ms'}} />
      <div ref={ringRef} className="fixed w-9 h-9 border-2 border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200" />
    </>
  )
}