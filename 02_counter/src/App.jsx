import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)

  // let counter = 15 + 1 only happens everytime -> even though setCounter written twice. because all setCounter functions bundles up and considered as one, unless it's written like in removeValue using callback (prevCounter)
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
