import BpComponentProps from "./components/bp-component-props copy"
import CamelCase from "./components/camel-case"
import ClosingTags from "./components/closing-tags"
import ComponentProps from "./components/component-props"
import DynamicProps from "./components/dynamic-props"
import Interpolation from "./components/interpolation"
import ObjectComponentProps from "./components/object-component-props"
import SingleRoot from "./components/single-root"

function App() {
  const tnListe = [
    { vorname: 'Donald', nachname: 'Trump', nr: 5, klasse: 'Amerika' },
    { vorname: 'Si', nachname: 'Jin Ping', nr: 6, klasse: 'China' }
  ]

  return (
    <main>
      <h1>Rules of JSX</h1>

      {/* 1.Single Root Element */}
      <section>
        <h2>Single Root Element </h2>
        <h3>z.B. &lt;Fragment&gt;&lt;/Fragment&gt;, &lt;&gt;&lt;/&gt;</h3>
        <p> JSX-Ausdrücke dürfen nur ein einzelnes oberstes Root-Element haben.
          Lösung ist entweder ein sinnfreier div-Tag außen rum,
          oder ein React-Fragment.
        </p>
        <div>
          <SingleRoot />
        </div>
      </section>

      {/* 2.Closing Tags */}
      <section>
        <h2>Tags müssen geschlossen werden </h2>
        <h3>z.B. &lt;br /&gt;, &lt;img... /&gt; </h3>
        <p>HTML erlaubt nicht geschlossene Tags, JSX ist da näher an XML</p>
        <div>
          <ClosingTags />
        </div>
      </section>

      {/* 3.camelCase */}
      <section>
        <h2>camelCase für viele für JSX-Properties (HTML-Properties)</h2>
        <h3>z.B. classList </h3>
        <p>In JSX müssen sehr viele HTML-Attribute camelCase geshreiben werden.
          Außerdem entsprechen die JSX-Properties den DOM-Properties.
          Deshalb zum Beispiel <strong>className</strong> statt <strong>class</strong> verwenden.
        </p>
        <div>
          <CamelCase />
        </div>
      </section>

      {/* 4.Interpolation */}
      <section>
        <h2>Interpolation</h2>
        <h3>z.B. &#123; expression &#125; </h3>
        <p>
          Andere Begriffe: JavaScript in JSX, JS/JSX-Kontectwechsel
          <br />
          In geschweiften Klammern könen im Tag-Content(!) JavaScript-Ausdrücke stehen.
        </p>
        <div>
          <Interpolation />
        </div>
      </section>

      {/* 5.Dynamic Attributes, Properties */}
      <section>
        <h2>Dynamische Attribute (Properties)</h2>
        <p>
          Auch JSX-Properties können "berechnet" werden.
          Die Syntax ist hinter dem Attributes-Gleichheitszeichen geschweifte Klammern zu verwenden
        </p>
        <div>
          <DynamicProps />
        </div>
      </section>

      {/* 6.Component Properties */}
      <section>
        <h2>Component Properties</h2>
        <p>
          Auch React-Komponenten können Properties verarbeiten. Die Syntax in JSX
          ist identisch zu der Element-Properties Syntax von eben.
        </p>
        <div>
          <ul>
            <ComponentProps vorname={"Siri"} nachname="Luck" nr={1} klasse="FIAE39" />
            <ComponentProps vorname={"Max"} nachname="Mustermann" nr={2} klasse="KFF" />
            {/* Best Practice : Deconstructure */}
            <BpComponentProps vorname="Mike" nachname="Muster" nr={3} klasse="FISI39"  />
            {/* Object */}
            <ObjectComponentProps tn={{ vorname: 'Yoyo', nachname: 'Master', nr: 4, klasse: "Nö" }} />
            <ObjectComponentProps tn={tnListe[0]} /> 
            <ComponentProps {...tnListe[1]} />
          </ul>
        </div>
      </section>


    </main>
  )
}

export default App
