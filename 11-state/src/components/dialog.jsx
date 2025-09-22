import { useState } from "react"

export default function Dialog() {

    const [show, setShow] = useState(false);

    return <>
        <button onClick={()=> setShow(!show)}>Show</button>
        <dialog open={show}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint expedita natus, molestiae vel consequatur perspiciatis. Nesciunt exercitationem deserunt ad harum perferendis! Sed, labore? Omnis suscipit id voluptas autem perspiciatis?</p>
            <button onClick={()=> setShow(false)}>Close</button>
        </dialog>
    </>
}