import React from 'react';
import logo from './logo.svg';
import headshot from './images/headshot.png';
//import profile from './images/web.gif';
//import loading from './loading.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WELCOME
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={headshot} className="App-headshot" alt="profile" />
        </a>
      </header>
      <footer>
        <p>created by yours truly using </p>
        <img src={logo} className="App-logo" alt="logo"/>
      </footer>
    </div>
  );
}

export default App;
