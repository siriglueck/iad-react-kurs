import { useState } from "react";

export default function Disposable() {
    
    const [visible, setVisible] = useState(true);

    return <>
        <div>
            <button onClick={() => setVisible(!visible)}>Toggle</button>
            <hr />
            <div style={{visibility: visible? 'visible' : 'hidden'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita placeat eveniet minima voluptate ullam architecto fuga odio saepe esse magni consectetur, labore ut sunt nesciunt mollitia ea temporibus suscipit.</p>
            </div>
        </div>
    </>
}