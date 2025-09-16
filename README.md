# Bleib ruhig und lern
## Trust the process


 React Konzepte

## Elemente

Mit Hilfe von der Bibliothek React kann ich (React-) Elemente erzeugen. Das sind
einfache Objekte mit Eigenschaften. Diese Objekte sind lightweight. Also wesentlich
effizienter zu behandeln als DOM-Elemente und die entsprechen DOM-Objekte.

Dazu wird die Funktion `React.createElement` benutzt, um einen solchen Elemente-Baum
zu erzeugen.

## Render to DOM

Diesen Elementebaum kann die `react-dom`-Bibliothek nun in einen sogenannten
ReactDOM-Root hinein "rendern".
Dies geschieht sehr effizient und schnell. Bestehendes HTML wird auch nicht ersetzt,
falls es identisch wäre mit dem jetzt zu erzeugenden HTML.

```js
const root = ReactDOM.createRoot(document.getElementById('app')); // root erzeugen
root.render(app);  // Elementbaum rendern
```

## JSX

Um das Erzeugen dieses Elemente-Baums stark zu vereinfachen, hat sich Facebook/Meta/React
eine Erweiterung für JavaScript ausgedacht, die es uns erlaubt mit einer XML-ähnlichen
Syntax diesen Baum direkt im JavaScript-Code zu erzeugen.

## Komponenten

In React und vielen anderen Frameworks/Libraries werden die Oberflächen (UI) aus
Komponenten zusammengesetzt. D.h. man teilt die UI in seperate Bausteine auf.
Damit kann der Code der zu einem Teil der Anwendung gehört besser abstrahiert und
separiert werden.

Was ist in React eine Komponente?

1. React.createClass (deprecated und existiert nicht mehr in React selbst)
2. Eine Funktion, die JSX returned (Achtung: Funktionsname muss mit Großbuchstaben beginnen!)
3. Eine Klasse, die von React.Component ableitet und in einer render-Methode JSX returned

# NB

Casing:

- PascalCase, EinKleinesBeispiel
- camelCase, einKleinesBeispiel
- snake_case, ein_kleines_beispiel
- kebap-case, ein-kleines-beispiel

