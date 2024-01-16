import React from 'react'
import { render } from 'react-dom'
import App from './App'

import './styles.scss'

function Index() {
  return (
    <div className="App">
      <App />
    </div>
  )
}

render(<Index />, document.getElementById('root'))
