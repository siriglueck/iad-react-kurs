console.log("Your starting point. Enjoy the ride! 🚀");
let count = 0;
// This create only once (on app start)
const domRoot = ReactDOM.createRoot(document.getElementById("app"));

function createAndMountUI() {

    // ----------------------------------------------------
    // -- [Create UI] React way --
    const app = React.createElement('div', null, 
                    "Zähler: ",
                    React.createElement('span', {id: 'displayCounter'}, count),
                    React.createElement('br', null),
                    React.createElement('button', {id: 'buttonIncrement', disabled: count >= 2, onClick: () => {
                        ++count;
                        // Re-render UI to see the new Counter value
                        createAndMountUI(); 
                        }
                    }, 'Increment')
    )

    /* -- [Create UI] Anstatt Manual DOM Manipulation --
    const div = document.createElement("div");
    const labelText = document.createTextNode("Zähler: ");
    const span = document.createElement("span");
    const br = document.createElement("br");
    const button = document.createElement("button");

    span.id = "displayCounter";
    span.textContent = "0";
    button.id = "buttonIncrement";
    button.textContent = "Increment";

    div.append(labelText, span, br, button);
    */

    // ----------------------------------------------------
    // -- [Mount UI] React way --
    // this will not create domRoot again, it works like a pointer
    domRoot.render(app);

    /* -- [Mount UI] Anstatt Manual Mounting --
    document.getElementById("app").append(div); 
    */

}

createAndMountUI();

// ----------------------------------------------------
// --- [App Logik] Alternativ : kürzere Version vom Dozent ---
// document.getElementById("buttonIncrement").addEventListener("click", () => {
//     document.getElementById("displayCounter").textContent = ++count;
// });

// --- [App Logik] eigene Version ---
// const btnInc = document.getElementById("btnIncrement");
// const counter = document.getElementById("counterDisplay");
// btnInc.addEventListener("click", () => {
//     ++count;
//     counter.textContent = count;
// });
    