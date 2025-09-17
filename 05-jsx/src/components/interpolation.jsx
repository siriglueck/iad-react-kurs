import React from "react";

function add(a,b) { return a+b; }

export default function Interpolation() {
    const vorname = 'Siri';
    const heute = new Date();
  
    return <>
        <div>Ich kann rechnen: { 17+4 }</div>
        <div>Heute ist der  { heute.toLocaleDateString() }</div>
        <div>Ich kann rechnen: { vorname }</div>
        <div>Übrigens kann ich wirklich rechnen: { add(5,6) }</div>
        <div>{ heute.getHours() > 10 ? <h2>Es ist Pause</h2> : <h2>Noch nicht</h2> }</div>
        <div>Spezielfälle: { null } { undefined } { true } { false } { 0 } </div>
        <div>Achtung: Objekte können nicht ausgegeben werden {"{ heute }"} </div>
    </>
}