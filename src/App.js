import React, { useState } from 'react';
import Button from "./components/UI/Button/Button"

import './App.css';

function App() {

  const [showTex, setShowText] =  useState(false)

  const showtexthandler = () => {
    setShowText(previous => !previous)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showTex && <p>This is new</p>}
      <Button onClick={showtexthandler}>Toggle</Button>
    </div>
  );
}

export default App;
