import * as React from 'react';
import './App.css';
import logo from './logo.svg';

interface AppProps {}

function App({}: React.Props<AppProps>) {
  return (
    <div className={'App'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://mobx.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Mobx
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
