import React, { useState, useRef } from 'react'
import { numberToWords } from './numberToWords/numberToWords'
import './App.css'

type OnButtonClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

function App(): JSX.Element {
  const [answer, setAnswer] = useState('')
  const textRef = useRef<HTMLInputElement>(null)
  const onTranslateClick: OnButtonClick = () => {
    if (!textRef.current?.value) {
      return
    }
    const number = parseInt(textRef.current.value)
    if (isNaN(number)) {
      return setAnswer('Please enter a valid number')
    }
    setAnswer(capitalize(numberToWords(number)))
  }

  return (
    <div className="App">
      <p>Enter a number</p>
      <p>
        <input ref={textRef} type="text" />
        <button onClick={onTranslateClick}>Translate</button>
      </p>
      <p>{answer}</p>
    </div>
  )
}

export default App
