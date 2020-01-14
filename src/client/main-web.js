import 'core-js'
import React from 'react'
import { hydrate } from 'react-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from '@loadable/component'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  , root)
})
