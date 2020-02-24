import React, { useState } from 'react'
import fetch from 'unfetch'

const defaultValues = {
  currency: 'USD',
  setCurrency: () => {},
}

const CurrencyContext = React.createContext(defaultValues)

export const setCurrencyFromAPI = setCurrency => ({ currency }) => {
  return ['USD', 'EUR', 'CHF'].includes(currency) && setCurrency(currency)
}
const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD')

  React.useEffect(() => {
    fetch('https://ipapi.co/json')
      .then(response => response.json())
      .then(setCurrencyFromAPI(setCurrency))
      .catch(err => err)
  }, [])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyContext
export { CurrencyProvider }
