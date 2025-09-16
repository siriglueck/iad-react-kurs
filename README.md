# Bleib ruhig und lern
## Trust the process


## React Konzepte
## Elemente

Mit Hilfe von der Bibliothek React kann ich (React-) Elemente erzeugen,
Das sind einfache Objekte mit Eigenschaften. Diese Objekte sind lightweight.

Also wesentlich effizienter zu behandeln als DOM-Elemente und die entsprechen DOM-Objekte.

Dazu wird die Funktion `React.createElement` benutzt, um einen solchen Elemente-Baum zu erzeugen.

## Renter to DOM
Diesen Elementebaum kann die `react-DOM` - Bibliothek nun in einen sogenannten ReactDOM-Root hinein 'render'.

Dies geschieht sehr effizient und schnell. Bestehendes HTML wird auch nicht ersetzt, falls es identisch wäre mit dem jetzt zu erzeugen HTML.

```
// root erzeugen
const root = ReactDOM.createRoot(document.getElementById('app'));
// tree erzeugen
reactRoot.render(app);
```

## JSX

Um das Erzeugen dieses Elemente-Baums start zu vereinfachen,
hat sich Facebook/Meta/React eine Erweiterung für JavaScript 