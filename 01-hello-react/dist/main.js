// JSX: Eine JavaScript-Erweiterungssyntax, die JSX Tags in JavaScript-Code erlaubt.

// Wer übersetzt JSX für den Browser?
// 1. babel.js (ursprüngliche erste offizielle Lösung)
// 2. TypeScript
// 3. Bundler, Produktionstool

let count = 0;
const reactRoot = ReactDOM.createRoot(document.getElementById('app'));
function main() {
  const app = /*#__PURE__*/React.createElement("div", null, "Z\xE4hle: "
    , /*#__PURE__*/React.createElement("span", null, count)
    , /*#__PURE__*/React.createElement("br", null)
    , /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      ++count;
      main();
    }
  }, "Increment"));
  reactRoot.render(app);
}
console.log(app);
main();