import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState -> for state management of all small parts of our UI which needs to get updated
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false) 

  // used inside 'password' html input tag as ref={passwordRef} such that passwordRef variable will always have the reference of password input field
  const passwordRef = useRef(null)

  // Once UI is done in return() we'll write the passwordGenerator method and use useCallback hook -> to recognize the change (length, numbersAllowed, charsAllowed) and based on that to generate the random password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str += "0123456789"
    if(charsAllowed) str += "!@#$^&*?"

    for(let i=1; i<length; i++){
      let char = Math.round(Math.random() * str.length + 1)
      pass += str.charAt(char)  // to pick only this random 'char' from the "str"
    }

    setPassword(pass) // to finally set the password in the input field using this method by useState

  }, [length, numbersAllowed, charsAllowed])
  
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password) // the browser's DOM (window) allows to write into browser's local clipboard
    passwordRef.current?.select() 
  }

  // highly used hook to put the method 'passwordGenerator()' into effect when [length, numbersAllowed, charsAllowed] any of these 3 changes -> when we check number/character/drag the length.
  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charsAllowed])

  // All UI part
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""  
              />
              <label htmlFor="length">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange = {() => {
                setNumbersAllowed((prevValue) => !prevValue)
              }}
            />
              <label htmlFor="number">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charsAllowed}
              onChange = {() => {
                setCharsAllowed((prevValue) => !prevValue)
              }}
            />
              <label htmlFor="charInput">Character</label>
          </div>

        </div>
    </div>
  )
}

export default App
