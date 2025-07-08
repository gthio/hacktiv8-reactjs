import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'

let currencyList = ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP']

function App() {

  const [rates, setRates] = useState([])
  const [stamp, setStamp] = useState([])

  async function fetchRates() {

    try {
      console.log('Fetching exchange rates...')

      let url = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c917dbdbe2b5457c89fdd7de49050529'

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const originalData = await response.json()

      console.log('Exchange rates fetched successfully:', originalData)

      const filteredRate = Object.entries(originalData.rates)
      .filter(([currency]) => currencyList.includes(currency))
      .map(([currency, rate]) => ({
        currency,
        rate: parseFloat(rate).toFixed(5),
        buy: parseFloat(rate * 0.9).toFixed(5),
        sell: parseFloat(rate * 1.05).toFixed(5),
      }));

      const sortedfilteredRate = filteredRate.sort((a, b) => a.currency.localeCompare(b.currency));

      console.log('Exchange rates transformed successfully:', filteredRate);

      setRates(sortedfilteredRate);
      setStamp(new Date());
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
    }
  }

  useEffect(() => {
    fetchRates();

    const interval = setInterval(() => {
      fetchRates();
    }, 60000) // Fetch rates every 60 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  let content = <MainPage rates={rates} stamp={stamp} />

  return content
}

export default App
