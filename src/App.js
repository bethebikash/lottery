import React from 'react'
import './App.css'
import Lottery from './Lottery'
import './Lottery.css'

function App() {
  return (
    <div className="App">
      <h1>The Lottery</h1>
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4} />
    </div>
  )
}

export default App
