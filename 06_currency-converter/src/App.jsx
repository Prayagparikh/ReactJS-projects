import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import wallpaper from './assets/wallpaper.png'
import './App.css'
import useCurrencyInfo from './custom_hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  // again, useState are the varaibles which will change on our webpage and we need to do something immediately after it. here when Amount changes, from or to currency changes
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState()

  // Use of custom hook to get the object containing all conversion rates of 'from - to' currency  -> 'usd': {inr: 1, gbp: 0.2,....}
  const currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)
  // console.log(options)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  // Just the UI part of our App
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${wallpaper})`}}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()   // This will call change the state once amount and currency are selected
          }}>
            <div className='w-full mb-1'>
              {/* using our Component with props */}
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectedCurrency={fromCurrency}
              />
              </div>

              {/* This swap button will just swap from and to currencies up and down using swap() function */}
              <div className='relative w-full h-0.5'>
                <button
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}>Swap
                </button>
              </div>

              <div className='w-full mb-1'>
              {/* using our Component with props */}
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                // onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectedCurrency={toCurrency}
                amountDisabled={true}
              />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App


/* Important thing to note: 
1. onAmountChange={(amount) => setAmount(amount)}
2. onCurrencyChange=(currency) => setFromCurrency(currency)

These 2 could have been written just like:
1. onAmountChange={setAmount(amount)} 

directly but previously in the handwritten notes also I've written that to change the state(useState) immediately we use the first way of 'callback'. 
Otherwise, in the 2nd case when we have to write seAmount(amount) more than once, then all the calls will bundle up and all calls will be considered as only 1 single call.
*/