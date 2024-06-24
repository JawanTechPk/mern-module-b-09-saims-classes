import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { NavigationApp } from './config/navigation'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationApp />

    </Provider>
  )
}

export default App