import { useState } from "react";
import { sculptureList } from "../image-data"

export default function ImageList() {

    const [index, setIndex] = useState(0);
    const sculpture = sculptureList[index];

    function nextIndex() {
        setIndex((index + 1) % sculptureList.length);
    }

    function prevIndex() {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    }

    return <>
        <div>
            <button onClick={nextIndex}>Next</button>
            <button onClick={prevIndex}>Previous</button>
            <h2>{sculpture.name}</h2>
            <p>({index})</p>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </div>
    </>
}