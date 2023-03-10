import React, { useCallback, useState } from 'react';
import Button from "./components/UI/Button/Button"
import DemoOutput from "./components/Demo/DemoOutput"

import './App.css';

function App() {
  console.log("APP IS RUNNING")

  const [showText, setShowText] =  useState(false)
  const [allowToggle, setAllowToggle] =  useState(false)

  const showtexthandler = useCallback(() => {
    if (allowToggle) {
      setShowText(previous => !previous)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showText} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={showtexthandler}>Toggle</Button>
    </div>
  );
}

export default App;
