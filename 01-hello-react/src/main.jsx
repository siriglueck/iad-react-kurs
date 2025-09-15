// JSX: Eine JavaScript-Erweiterungssyntax, die JSX Tags in JavaScript-Code erlaubt.

// Wer übersetzt JSX für den Browser?
// 1. babel.js (ursprüngliche erste offizielle Lösung)
// 2. TypeScript
// 3. Bundler, Produktionstool

let count = 0;

const reactRoot = ReactDOM.createRoot(document.getElementById('app'));

function main() {
  
    const app = <div>
        Zähle: <span>{count}</span>
        <br />
        <button onClick={() => { ++count; main(); }}>Increment</button>
    </div>;

    reactRoot.render(app);
}

console.log(app);

main();