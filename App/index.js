import React from 'react'
import {
  Provider,
} from 'react-redux'
import Store from '../redux/Store'

import AppWrapper from './AppWrapper'

export const App = props =>
  <Provider store={Store}>
    <AppWrapper />
  </Provider>

export default App
