import './App.css';
import Button from "./components/AwesomeButton";
import Counter from "./components/counter";
import Collapse from './components/Collapse';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des components paramétrables (props)</h1>

          <Button backgroundColor="blue"
          onClick={function () {
            alert("foo");
          }}
          label="je rend"
          variant ="triangle"
         />
        <Button 
          backgroundColor="red"
          onClick={function () {
            alert("Barfoo!");
          }}
          label ="alert foo"
          variant ="squared"
        />
        <Button
          backgroundColor="green"
          onClick={function () {
            alert("Aled");
          }}
          label="console bar"
          variant = "arounded"
        />
        <Button backgroundColor="yellow" />

        <h1>Gestion des states (useState)</h1>

        <Counter />
        <Collapse />
        <Collapse title="TD 1" body="Answer to TD" />
        <Collapse title="TD 2" body="Answer to TD" />
        <Collapse title="TD 3" body="Answer to TD" />

        <h1>Listing</h1>
        <FAQ />

        <h1>Gallery</h1>

        <Gallery />

      </header>
    </div>
  );
}

export default App;
