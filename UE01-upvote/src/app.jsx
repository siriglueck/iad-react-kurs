// app.jsx
// React Komponent, die im ersten Schnitt das komplette HTML
// der index.html enthält (unterhalb #app Div-Tags natürlich)
// und in der main.js als Hauptkomponente eine React-Anwendung
// gestartet wird.
// Die Komponente returned also die Zeilen 13-128 aus der index.html

import Posts from "./components/posts";
import "./styles.css";

export default function App() {
  return <div>
    <Posts />
  </div>;
}