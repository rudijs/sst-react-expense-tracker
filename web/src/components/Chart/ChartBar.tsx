import "./ChartBar.css"

interface ChartBarProps {
  maxValue: number
  value: number
  label: string
}

const ChartBar: React.FC<ChartBarProps> = ({ maxValue, value, label }) => {
  let barFillHeight = "0%"

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%"
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar
