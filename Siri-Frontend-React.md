## Name:

# Leistungsfeststellung

> **Modul:** Frontend Entwicklung, **Datum:** 26.09.2025

## Abschnitt Frontententwicklung Web

1. Was ist *React*?

- [ ] Eine Programmiersprache
- [ ] Eine standardisierte API in Web-Browsern
- [x] Eine Bibliothek zum Erstellen von User Interfaces
- [ ] Ein Framework zum Erstellen von Browser Anwendungen

2. Was ist *Vite*?

- [ ] Eine Programmiersprache
- [x] Ein Tool, dass beim Entwicklen und Bereitstellen von Anwendungen und Bibliotheken unterstützt
- [ ] Eine Laufzeit für JavaScript im Browser
- [ ] Ein JavaScript-Editor

3. Warum ist (meißtens) eine Node-Installation auf dem Entwickler-Rechner notwendig

- [ ] Node ist die Laufzeit-Umgebung in der mein fertiges Web-Projekt läuft
- [ ] Node ist die Basis für React-Anwendungen
- [x] Hilfs-Tools zum Erstellen einer Web-Anwendung werden durch Node ausgeführt
- [ ] Node wird als optionale Abhängikeit von React installiert

## Abschnitt React Grundlagen

4. React erstellt User Interfaces. Was sind die "Building Blocks" (Kern-Bausteine) dieser Interfaces?

- [x] Komponenten
- [ ] Klassen
- [ ] Funktionen
- [ ] Variablen

5. Was ist *JSX*?

- [ ] Eine Programmiersprache
- [x] Eine Erweiterung der Programmiersprache JavaScript, die neue Syntax einführt, um in Tag-Form - ähnlich zu XML - Elemente zu definieren
- [ ] Ein Compiler, der HTML in JavaScript erkennt
- [ ] Ein Tool, um JavaScript für React zu übersetzen

6. Im modernen React ist eine Komponente ...

- [ ] ein HTML-Element, dass JavaScript-Code und CSS-Styles kapselt
- [ ] eine Variable, deren Inhalt eine Zeichenkette `"<div>Works</div>"` ist
- [x] eine Funktion, die React-Elemente zurückgibt
- [ ] eine Klasse, die im Konstruktor HTML erzeugt

## Abschnitt JSX

7. Nenne kurz mit Schlagwort zwei Grundregeln der JSX-Syntax

    1.) Single Root Element


    2.) Interpolation


8. Was ist bei JSX im Vergleich zu HTML anders?

- [ ] Alle Attribute sind exakt gleich wie in HTML.
- [x] Man kann JavaScript-Ausdrücke in geschweiften Klammern einfügen.
- [ ] for wird für Labels ganz normal wie in HTML benutzt.
- [ ] JSX wird direkt vom Browser verstanden.


9. Welche der folgenden Auschnitte sind korrektes JSX?

- [x] `<h1>Hello World</h1>`
- [ ] `<h1>Hello World`
- [ ] `<h1><b>Hello World</h1>`
- [x] `<h1>"Hello World"</h1>`

10. Wie interpoliere (setze ich den Wert) der Variable `message` in einem `span`-Tag ein?

- [ ] `<span>${message}</span>`
- [ ] `<span>{message</span>`
- [ ] `<span>message</span>`
- [x] `<span children={message} />`

11. In der Variablen `reactURL` ist die URL zur React-Homepage abgelegt. Wie kann ich diese Variable in einem `a`-Element (HTML-Anchor) nutzen?

- [ ] `<a href="reactURL">React</a>`
- [ ] `<a href=reactURL>React</a>`
- [x] `<a href={reactURL}>React</a>`
- [ ] `<a href={"reactURL"}>React</a>`

12. Gegeben sei eine korrekte lokale Funktion `handleClick`. Wie wird diese Funktion korrekt als Event-Handler benutzt?

- [ ] `<button onClick={handleClick()} />`
- [ ] `<button onClick=handleClick />`
- [x] `<button onClick={handleClick} />`
- [x] `<button onclick={() => handleClick()} />`

13. In einem JSX-Label Element muss ich statt des `for`-Attributes wie in HML stattdessen `htmlFor` verwenden. Warum?

- [ ] `for` ist ein JavaScript-Schlüsselwort und darf(!) nicht in JSX benutzt werden
- [ ] Die React-Entwickler haben damals ihre Entscheidung so getroffen
- [x] Die DOM-Property (standardisiert durch das W3C) heißt `htmlFor`
- [ ] Ich muss es gar nicht so machen

14. Wie setzt man in JSX korrekt eine CSS-Klasse per Attribut?

- [ ] `class="container"`
- [ ] `style="container"`
- [ ] `css="container"`
- [x] `className="container"`

15. Wie setzt man in JSX korrekt die `color`-Eigenschaft als *Inline*-Style?

- [ ] `style={{color: red}}`
- [ ] `style={color: 'red'}`
- [x] `style={{color: 'red'}}`
- [ ] `style="color: red;"`

## Abschnitt Komponenten

16. Welche der folgenden Funktionen definiert eine Komponenten?

- [x] `function Komponente () {}`
- [ ] `function komponente () {}`
- [ ] `const Komponente = () => {}`
- [ ] `const komponente = () = {}`

17. Eine React-Komponente erhält Properties in JSX in der Form: `<MyComponent prop="10" max={20} />`. Wie kann die Komponente beide Properties entgegen nehmen?

- [x] `function MyComponent (props) {}`
- [ ] `function MyComponent (prop, max) {}`
- [ ] `function MyComponent (...props) {}`
- [x] `function MyComponent ({ prop, max }) {}`


## Abschnitt State

18. Wann "rendered" eine React-Komponente, die nicht optimiert wurde (*memoized*)?

- [ ] Wenn ein Event ausgelöst wird
- [x] Wenn eine State-Änderung in der Komponente gemacht wird
- [x] Wenn eine Eltern-Komponente eine State-Änderung bekommt
- [ ] Wenn eine beliebige Variable in der Komponente geändert wird

19. Wie sieht der Code aus, wenn eine Variable zu einer *State Variablen* gemacht werden muus, weil sie einen neuen Wert bekommt und neu "gerendered" werden muss?

   `let nachricht = 'Ich ändere mich'`

```js
// 1.

import { useState } from "react";

export function My Component() {

    // let nachricht = 'Ich ändere mich';
    // 2. 
    const [nachricht, setNachricht] = userState('Ich ändere mich');
    

    function handleChange() {
        // nachricht = 'Ich bin geändert';
        // 3.
        setNachricht('Ich bin geändert');

    }

    // ...
}
```

Setzen an den Code-Stellen 1 bis 3 jeweils den korrekten Code ein. Zeilen die dann überflüssig sind bitte durchstreichen (oder auskommentieren)

20. Ein State wird wie folgt erzeugt:

   `const [stateVar] = useState(42);`

Warum ist dies reichlich sinnfrei/falsch?

Da State normalerweisee Variable und Setter zurückgibt. In diesem Fall bekommt man kein Setter.







21. Ein State wird wie folgt erzeugt:

   `const [,setState] = useState(42);`

Warum könnte dies aber sinnvoll sein?

Nach dem Destructuring gibt State [variable, setterFunction] zurück. Der Syntax hier ist korrekt. setState ist benutzbar.







