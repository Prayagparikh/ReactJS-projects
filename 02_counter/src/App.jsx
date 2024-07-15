import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)

  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    // console.log(counter)
  }
  const removeValue = () => {
    // It will get reduced by 2
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <h1>React app</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
