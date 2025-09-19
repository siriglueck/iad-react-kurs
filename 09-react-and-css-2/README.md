# React and CSS

> Oder die Frage: Wie arbeitet ein React Developer wenn
er seine Komponenten stylen will?

Natürlich wird oft ein fertiges Design-System einer Komponenten-Bibliothek
eingesetzt. Dann muss ich mich natürlich deren Techniken anpassen.

Es gibt insgesamt vier Techniken, die eingesetzt werden.

1. Plain Old School CSS
   (oder besser Modulares CSS: https://spaceninja.com/blog/2018/what-is-modular-css/)
2. CSS-In-JS
3. CSS Modules
4. Tailwind CSS oder ähnliche Utility Libraries

## 1. Plain Old School CSS

Es werden ganz einfach in zentralen CSS-Dateien CSS-Klassen
definiert, die wir in den Komponenten einsetzen.

- Pro: Bekannte Technik
- Contra: Schwer zu "maintainen", CSS ist "weit weg" vom Code

## 2. CSS-In-JS

Mit diesen Techniken schreibt man das CSS direkt in der Code-Datei.
Dieser Ansatz war extrem populär, wird aber zuletzt kontrovers
diskutiert (siehe https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b). Allerdings bieten
Lösungen wie [Styled Components](https://styled-components.com/) oder
[Emotion](https://emotion.sh/) erste Ansätze zur Lösung dieser.

- Pro: CSS dicht beim Code
- Contra: Performance kann leiden, Problem mit Server-Seitigem Rendern
  Außerdem muss oft die Toolchain angepasst werden. Zudem fehlt auch
  eine perfekte Editor-Unterstützung

## 3. CSS Module

Komponenten bekommen jeweils ihre eigene CSS-Datei. Die dort
definierten Klassen sind auf die Kompnente "gescoped", sind also
keine globalen Klassen. Diese Technik wird durch Vite nativ
unterstützt.

- Pro: CSS "colocated", außerdem gibt es natürlich volle
  Code-Unterstützung.
- Contra: Wenig, wenn modernes CSS eingesetzt wird mit Variablen.

## 4. Utility Libraries

Styles werden hier über Klassennamen gesetzt. Dabei steht hinter
einer Klasse oft immer nur eine CSS-Regel. Die className Properties
sind dann mitunter natürlich sehr lange.

- Pro: State-Of-The-Art, bestens geeignet für Komponenten
- Contra: ? (es gibt "hater", aber die gibt es natürlich überall)

Populäre Vertreter: https://tailwindcss.com/,  https://unocss.dev/
