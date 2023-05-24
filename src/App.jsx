import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Income from './components/Income'
import Expense from './components/Expense'


const App = () => {
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default:
        return <Dashboard />
    }
  }
  return (
    <div className='text-white'>
      <Navigation active={active} setActive={setActive}/>
      <main>
        {displayData()}
      </main>
    </div>
  )
}

export default App