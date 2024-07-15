/*
Every hook is essentially a JS function only which will be imported somewhere (in our case App.jsx)

This hook fetch() the currency all conversion rates: i.e. if selectedCurrency='usd' then the api will fetch all prices of 'usd' to 'all other currencies' -> this object(data) will be returned to caller(App.jsx)
*/

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState({});

    // 1. fetches particular currency data
    // 2. set the 'usd' to 'other currency prices' object to currencyData
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setCurrencyData(res[currency]));
    }, [currency]);

    return currencyData;
}

export default useCurrencyInfo;