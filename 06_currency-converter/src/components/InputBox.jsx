/* 
This component is the Input part of the project: enter amount(onAmountChange), and choosing currency(onCurrencyChange).
That's why it's doing 2 things:
1. as soon as the Amount entered by in inputbox, onChange will set onAmountChange provides that 'amount' immediately.

2. as soon as the currency is selected such as 'inr' -> onCurrencyChange will choose that currency form the currencyOptions array.
*/

import React from "react";
import { useId } from "react"; 

// These arguments in InputBox component are props
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = "",   // for any customized classname
    }){
        const id = useId()
        return(
            <div className="bg-white p-3 rounded-lg text-sm flex ${className}">
                <div className='w-1-2'>
                    <label htmlFor={id} className="text-black/40 mb-2 inline-block"></label>  {/* useId is a hook */}
                    <input 
                    id={id}
                    type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // main1: onAmountChange
                    />
                </div>

                <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}         // main2: onCurrencyChange
                disabled={currencyDisabled}
                >
                    {/* It just provides the options to select currency from the list  */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                </div>
            </div>
        )
}

export default InputBox