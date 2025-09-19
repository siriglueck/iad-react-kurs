// app.jsx
// React Komponent, die im ersten Schnitt das komplette HTML
// der index.html enthält (unterhalb #app Div-Tags natürlich)
// und in der main.js als Hauptkomponente eine React-Anwendung
// gestartet wird.
// Die Komponente returned also die Zeilen 13-128 aus der index.html


// here is ein shell
// then import data from seed and render the data from it

import PostsShell from "./components/posts-shell";
import "./styles.css";

export default function App() {
  return <div>
    <h2 className="title has-text-centered dividing-header">UpVote! </h2> 
    <PostsShell />
  </div>;
}