export function CounterDisplay({count = 0, label = "Stand:"}) {
    return <>
      <div className="counter-display">
        <span>{label}</span>
        <span>{count}</span>
      </div>
    </>
}