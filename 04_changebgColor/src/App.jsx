import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state management using useState -> initially 'olive' color
  const [color, setColor] = useState('olive')

  return (
    // onClick of function setColor(colorname) will change to the color which will create a 'new state' and react will update that new state immediately here using {backgroundColor: color} -> this is the reason why we use React state management, because changes would not be visible immediately otherwise.

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>   {/*'color' variable is used here*/}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        {/* on click of button, it takes callback function where we can use setColor() state method */}
        <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >red</button>

          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >green</button>

          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'blue'}}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App