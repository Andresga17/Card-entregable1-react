import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {
  
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomElement(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomElement(colors))

  const handleClick = () => {
    setQuoteRandom(getRandomElement(quotes))
    setColorRandom(getRandomElement(colors))
  }
  
  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
