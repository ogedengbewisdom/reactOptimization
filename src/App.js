import React, { useState } from 'react';
import Button from "./components/UI/Button/Button"
import DemoOutput from "./components/Demo/DemoOutput"

import './App.css';

function App() {
  console.log("APP IS RUNNING")

  const [showTex, setShowText] =  useState(false)

  const showtexthandler = () => {
    setShowText(previous => !previous)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={showtexthandler}>Toggle</Button>
    </div>
  );
}

export default App;
