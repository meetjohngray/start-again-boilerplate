import { getQuotes } from '../apis/quotes'

export const SET_QUOTES = 'SET_QUOTES'

export function setQuotes(quotes) {
  return {
    type: SET_QUOTES,
    payload: quotes,
  }
}

export function fetchQuotes() {
  return (dispatch) => {
    return getQuotes().then((quotes) => {
      dispatch(setQuotes(quotes))
    })
  }
}
