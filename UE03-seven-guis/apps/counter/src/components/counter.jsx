import { useState } from "react"

export function Counter() {

  const [num, setNum] = useState(0);
  //console.log(num);

  return <>
    <div className="box bordered">
      <input type="number" readOnly value={num} onChange={(ev)=> setNum(ev.target.value)} />
      <button className="btn" onClick={() => setNum(num+1)}>Count</button>
    </div>
  </>
}
