import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            This is my boilerplate code for react and heroku. Feel free to use it.
        </p>
        <a
          className="App-link"
          href="https://luffy1727.github.io/my-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
            Author
        </a>
      </header>
    </div>
  );
}

export default App;
