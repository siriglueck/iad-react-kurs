export function TemperatureConverterExample2Display({ unit, value, onChange }) {
  return <>
    <input id={unit} type="number" value={value} onChange={(ev) => { onChange(ev.target.value) }} step="0.01" />
    <label htmlFor={unit}>{unit}</label>
  </>
}
