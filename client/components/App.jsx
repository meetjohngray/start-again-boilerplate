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
      <h1>Start Again</h1>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <li style={{ listStyleType: 'none' }}>{quote.text}</li>
        </div>
      ))}
    </>
  )
}

export default App
