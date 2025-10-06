# Tipps

## React Router

- Falls im Data-Modus benutzt: ESlint Plugin React Refresh entfernen (eslint.config.js and package.js)
- Installation des Routers: npm install react-router
- Empfehlung auch für minimale Anwendungen: Data Modus

```
const router = createBrowserRouter([]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```
- Ursprüngliche App kann gelöscht werden. (Außer der Router wird in der App provided)
- Routen ablegen als React-Komponenten mit default export in einem extrac Verzeichnis (routes, pages, views, ...)
- Best Practice: Catch-All Route am Ende (damit wir die seite 404 bekommen) (Path: '*')
- Meistens ersparen Layout-Routen viel Boilerplate-code (zum Beispiel, Menu, Navigation)
- Navigation zu anderen Routen geschieht mit:
  1. Link oder NavLink Elementen zum Navigieren mit JSX-Elementen
  2. useNavigate-Hook gibt eine Funktion zurück zum Navigieren per Code

## Remote Data
- Browser kann kein DB lesen oder mit DB Kommunizieren
- Wir brauchen serverseitig .. PHP, Nodejs, Java, .NET (Backend)
- HTTP-Protokoll gestützt (REST, RESTFull, JSON-API, ...)
- Im Code: native fetch oder Hilfbibliothek wie Axios
- Best Practice: API-Zugriffe in einer eigenen Datei ablegen (gesammelt)
- Best Practice: Anwendung konfigurierbar machen (API_URLs, API_KEYs, ...) in Environment-Variablen ablegen (für Vite .env)
- Falls die Anwendung Features braucht wie Caching, Reloading ohne Navigation, ... empfiehlt sich die Verwendung von Tanstack Query

# Anwendungs State
- Oder die Frage: wie bekommt eine Route Daten/Informationen?
- Es geht dabei nicht um die Remote-Daten!
- Wir brauchen State abseits des Komponenten-States
- Lösungen:
  1. Context API (nicht gut! - dauerhalf speichern)
  2. Global State via Library (Zustand, Valtio, ...) (nicht gut! - - dauerhaft speichern bis einloggon/ausloggen) 
  3. Session- oder LocalStorage (nicht gut! - dauerhalf speichern)
  3. Use the Platform! URL Params (Router Params) oder URL Search Params (W3C)

# Formulare
- In SPA-Anwendungen muss der Form-Submit durch den Browser unterbunden werden. 
Also entweder 
``` handleSubmit(e) { e.preventDefault() } ```
oder eine handleAction.
- Vorteil bei action-Handlern: kein explizites prevenDefault und ein automatisches Form-Reset. (ist aber nicht immer gewüncht)

- Wie komme ich an die Daten des Formulars (also was hat der User eingetragen)?
  1. Controlled Inputs with State
  2. Uncontrolled Inputs with Refs
  3. FormData (Use the Platform) 
