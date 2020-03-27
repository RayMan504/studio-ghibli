import React, { useState } from 'react';
import './App.css';
import Films from './components/Films.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Studio Ghibli Films
      </header>

      <Films />
    </div>
  );
}

export default App;
