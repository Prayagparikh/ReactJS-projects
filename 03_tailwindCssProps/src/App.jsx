import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)
  
    let myObj = {
      name: 'Hitesh',
      age: 25,
      address: {
        city: 'Jaipur',
        state: 'Rajasthan',
        country: 'India'
      }
    }
    let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
      // These <> </> empty braces are called "React Fragments. They are used to group a list of children elements without adding extra nodes to the DOM."
      <>
        <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
        <Card username="Prayag" post="software developer" />
        <Card username='ironman' post='superhero' />
        <Card username={myObj.address.city} post={newArr} />
      </>
    )
}

export default App
