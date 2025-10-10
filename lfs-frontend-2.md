## Name:

# Leistungsfeststellung 2

> **Modul:** Frontend Entwicklung, **Datum:** 10.10.2025

## State Management

**1. Was passiert, wenn man State direkt mutiert?**

```javascript
const [items, setItems] = useState([1, 2, 3]);
items.push(4);
```

- [X] Die Komponente re-rendert nicht
- [ ] React wirft einen Fehler
- [ ] Es funktioniert normal
- [ ] Nur beim ersten Mal wird gerendert

---

**2. Wann sollte man die funktionale Form von setState verwenden?**

```javascript
setCount(count + 1)  // vs.
setCount(prev => prev + 1)
```

- [ ] Immer, ist sicherer
- [X] Wenn der neue State vom vorherigen abhängt
- [ ] Nur bei Arrays und Objekten
- [ ] Nie, beide sind identisch

---

**3. Was wird in der Konsole ausgegeben?**

```javascript
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count);
}
```

- [ ] 1
- [X] 0
- [ ] undefined
- [ ] Es kommt ein Fehler

---

**4. Welche Variable verursacht einen Re-Render wenn sie sich ändert?**

```javascript
function Component() {
  const [state, setState] = useState(0);
  let variable = 0;
  const ref = useRef(0);
  
  // ...
}
```

- [X] Nur `state`
- [ ] `state` und `variable`
- [ ] `state` und `ref`
- [ ] Alle drei

---

**5. Was ist "lifting state up"?**

- [ ] State in localStorage speichern
- [X] State in die nächsthöhere gemeinsame Parent-Komponente verschieben
- [ ] State mit useEffect synchronisieren
- [ ] State in globalen Context packen

---

## Effects

**6. Wann wird dieser Effect ausgeführt?**

```javascript
useEffect(() => {
  console.log('Effect läuft');
}, []);
```

- [ ] Bei jedem Re-Render
- [X] Nur beim ersten Render (Mount)
- [ ] Nie
- [ ] Nur beim Unmount

---

**7. Was verursacht hier einen Infinite Loop?**

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
});
```

- [X] Es fehlt das Dependency-Array
- [ ] count sollte nicht im Effect verwendet werden
- [ ] setCount sollte async sein
- [ ] Es gibt keinen Loop, der Code ist korrekt

---

**8. Wozu dient die Cleanup-Function?**

```javascript
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  
  return () => clearInterval(timer);
}, []);
```

- [ ] Um Fehler abzufangen
- [X] Um Ressourcen aufzuräumen (z.B. Timer, Subscriptions)
- [ ] Um State zurückzusetzen
- [ ] Um den Effect zu wiederholen

---

**9. Welches Dependency-Array ist korrekt?**

```javascript
const [userId, setUserId] = useState(1);

useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data));
}, ???);
```

- [ ] `[]`
- [X] `[userId]`
- [ ] `[fetch]`
- [ ] Kein Array notwendig

---

**10. In welcher Reihenfolge wird was ausgegeben beim ersten Rendering?**

```javascript
useEffect(() => {
  console.log('A');
  return () => console.log('B');
}, []);

console.log('C');
```

- [ ] A, B, C
- [X] C, A, B
- [ ] C, A
- [ ] A, C, B

---

## Refs

**11. Was ist der Hauptunterschied zwischen useState und useRef?**

- [ ] useRef ist für DOM-Elemente, useState für Daten
- [X] useRef triggert keinen Re-Render bei Änderung
- [ ] useState ist schneller
- [ ] useRef funktioniert nur in Class Components

---

**12. Wie greift man auf das referenzierte DOM-Element zu?**

```javascript
function Component() {
  const inputRef = useRef(null);
  
  return <input ref={inputRef} />;
}
```
- [ ] `inputRef`
- [ ] `inputRef.value`
- [X] `inputRef.current`
- [ ] `inputRef.element`

---

**13. Wann ist useRef die richtige Wahl?**

- [ ] Für Daten die in der UI angezeigt werden
- [ ] Für Werte die Re-Renders triggern sollen
- [X] Für Timer-IDs, Previous-Values, oder DOM-Zugriff
- [ ] Für asynchrone Daten vom Backend

---

**14. Was wird ausgegeben?**

```javascript
const ref = useRef(0);

function handleClick() {
  ref.current = ref.current + 1;
  console.log(ref.current);
}
```

- [ ] Immer 0
- [X] Der korrekte inkrementierte Wert
- [ ] undefined
- [ ] Es kommt ein Fehler

---

## Backend-Kommunikation

**15. Was fehlt in diesem fetch-Beispiel? (Best Practice)**

```javascript
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

- [X] Error Handling
- [ ] async/await
- [ ] Dependency Array ist falsch
- [ ] Nichts, ist perfekt

---

**16. Was muss man nach einem erfolgreichen fetch als erstes tun?**

```javascript
fetch('/api/data')
  .then(res => ???)
```

- [ ] Die Daten direkt verwenden
- [X] Mit `.json()` in JavaScript-Objekt umwandeln
- [ ] Mit `JSON.parse()` parsen
- [ ] In State speichern

---

**17. Wie kann ich einen erfolgreichen HTTP-Status prüfen?**

```javascript
fetch('/api/data')
  .then(res => {
    if (???) {
      return res.json();
    }
  })
```

- [X] `res.status === 200`
- [X] `res.ok`
- [ ] `res.success`
- [ ] `!res.error`

---

**18. Welche HTTP-Methode verwendet man normalerweise zum Erstellen neuer Daten?**

```javascript
fetch('/api/users', {
  method: '???',
  body: JSON.stringify({ name: 'Max' })
})
```

- [ ] GET
- [X] POST
- [ ] UPDATE
- [ ] CREATE

---

**19. Welche HTTP-Methoden verwendet man zum Aktualisieren von Daten?**

```javascript
fetch('/api/users/' + id, {
  method: '???',
  body: JSON.stringify({ name: 'Max' })
})
```

- [X] PUT
- [ ] POST
- [ ] UPDATE
- [X] PATCH

---

**20. Was gehört in den Header beim Senden von JSON-Daten?**

```javascript
fetch('/api/data', {
  method: 'POST',
  headers: {
    ???
  },
  body: JSON.stringify(data)
})
```

- [X] `'Content-Type': 'application/json'`
- [ ] `'Data-Type': 'json'`
- [ ] `'Accept': 'json'`
- [ ] Nichts, fetch macht das automatisch

---

## Tanstack Query / State-Libraries

**21. Was ist der Hauptvorteil von Tanstack Query (React Query)?**

- [ ] Komponenten werden schneller
- [X] Automatisches Caching, Loading und Error States
- [ ] Kleinere Bundle-Size
- [ ] Funktioniert ohne useEffect

---

**22. Welche Library ist für globalen State Management gedacht?**

- [ ] React Router
- [ ] Axios
- [X] Zustand
- [ ] Tanstack Table

---

**23. Wann braucht man eine State-Library wie Zustand oder Redux?**

- [ ] Immer in React-Projekten
- [X] Wenn viele Komponenten denselben State teilen müssen
- [ ] Nur für Backend-Daten
- [ ] Für lokalen Component-State

---

## React Router

**24. Wozu braucht man React Router?**

- [ ] Für API-Calls
- [X] Für Navigation zwischen verschiedenen Seiten/Views
- [ ] Für State Management
- [ ] Für Styling

---

**25. Welche Komponente definiert eine Route?**

```javascript
import { BrowserRouter, ??? } from 'react-router';

<BrowserRouter>
  <Routes>
    <??? path="/home" element={<Home />} />
  </Routes>
</BrowserRouter>
```

- [ ] `<Link>`
- [X] `<Route>`
- [ ] `<Navigate>`
- [ ] `<Path>`

---

**26. Wie erstellt man einen Link zu einer anderen Route?**

```javascript
import { ??? } from 'react-router';

<??? to="/about">Über uns</???>
```

- [ ] `<a href="/about">`
- [X] `<Link>`
- [ ] `<Navigate>`
- [ ] `<Router>`

## Formular-Handling

**27. Was ist eine "Controlled Component"?**

```javascript
<input 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>
```

- [ ] Ein Input der nur lesbar ist
- [X] Ein Input dessen Wert von React State kontrolliert wird
- [ ] Ein Input mit Validierung
- [ ] Ein Input in einem <form>-Tag

---

**28. Wie liest man den Wert eines uncontrolled Inputs aus?**

```javascript
const inputRef = useRef();

function handleSubmit() {
  const value = ???;
}

<input ref={inputRef} />
```

- [ ] `inputRef.value`
- [X] `inputRef.current.value`
- [ ] `inputRef.current`
- [ ] `inputRef.input.value`

---

**29. Wie verhindert man das Standard-Verhalten beim Formular-Submit?**

```javascript
function handleSubmit(e) {
  ???
  // Daten verarbeiten
}

<form onSubmit={handleSubmit}>
```

- [ ] `return false`
- [X] `e.preventDefault()`
- [ ] `e.stopPropagation()`
- [ ] `e.stopSubmit()`

---

**30. Wie greift man auf Formular-Daten mit FormData zu?**

```javascript
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = ???;
}

<form onSubmit={handleSubmit}>
  <input name="username" />
</form>
```

- [ ] `formData.username`
- [X] `formData.get('username')`
- [ ] `formData['username']`
- [ ] `formData.value('username')`
