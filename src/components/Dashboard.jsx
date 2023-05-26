import React, { useEffect } from 'react'
import Chart from './Chart'
import { useGlobalContext } from '../context/globalContext'

const Dashboard = () => {
  const {getIncomes, getExpenses} = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  },[])
  return (
    <div>
      <h1>All Transactions</h1>
      <Chart />
    </div>
  )
}

export default Dashboard