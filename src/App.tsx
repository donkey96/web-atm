import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import TopPage from './components/pages/login';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './app/store';
import { Routes } from './routers/routers';

function App() {
  return (
    <div className="App">
        <ConnectedRouter history={history}>
          {Routes}
        </ConnectedRouter>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <Counter />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <span>*/}
      {/*    <span>Learn </span>*/}
      {/*    <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://reactjs.org/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      React*/}
      {/*    </a>*/}
      {/*    <span>, </span>*/}
      {/*    <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://redux.js.org/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      Redux*/}
      {/*    </a>*/}
      {/*    <span>, </span>*/}
      {/*    <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://redux-toolkit.js.org/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      Redux Toolkit*/}
      {/*    </a>*/}
      {/*    ,<span> and </span>*/}
      {/*    <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://react-redux.js.org/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      React Redux*/}
      {/*    </a>*/}
      {/*  </span>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
