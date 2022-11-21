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
      <div className="my-8 mx-auto max-w-prose">
        <h1>Start Again</h1>
        {quotes.map((quote) => (
          <div className="my-4" key={quote.id}>
            <li style={{ listStyleType: 'none' }}>{quote.text} - {quote.name} </li>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
