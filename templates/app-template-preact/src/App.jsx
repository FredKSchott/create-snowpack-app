import { h } from "preact";
import Logo from "./logo";
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <header className="App-header">
        <Logo width="180px" height="180px" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://preactjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  );
}

export default App;
