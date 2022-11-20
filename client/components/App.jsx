import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuotes } from '../actions'

function App() {
  const quotes = useSelector((reduxState) => reduxState.quotes)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Start Again</h1>
        {quotes.map((quote) => (
          <div key={quote.id}>
            <ul style={{ listStyleType: 'none' }}>
              <li>{quote.text}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
