import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from '../App'
import store from '../../store'
import { fetchQuotes } from '../../actions'

jest.mock('../../actions')

fetchQuotes.mockImplementation(() => () => {})

test('page header includes Start Again', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Start Again/)
})

test('renders an <li> for each quote', () => {
  const quotes = [
    { id: 1, text: 'orange', author_id: 1 },
    { id: 2, text: 'persimmons', author_id: 2 },
  ]
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ quotes }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(2)
})

test('dispatches fetchQuotes action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchQuotes).toHaveBeenCalled()
})
