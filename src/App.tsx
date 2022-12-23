import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h3>OVC</h3>
      </header>
      <main className="App-main">
        <a href="mailto:oskydiverps@gmail.com">Email Me</a>
      </main>
    </div>
  );
}


const Button = ({ label = 'Click me!' }) => {
  return <button>{label}</button>
}

export default App;
