export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
      <div className="h-full bg-[#00A859] transition-all duration-500" style={{ width: pct + '%' }} />
    </div>
  )
}