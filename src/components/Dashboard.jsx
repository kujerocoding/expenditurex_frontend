import React, { useEffect } from 'react'
import Chart from './Chart'
import { useGlobalContext } from '../context/globalContext'

const Dashboard = () => {
  const {incomes, expenses, getIncomes, getExpenses, getTotalIncome, getTotalExpenses, getTotalBalance, transactionHistory} = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  },[])

  return (
    <div>
      <h1>All Transactions</h1>
      <Chart />
      <div>
        <p>Total Income : {getTotalIncome()}</p>
        <p>Total Expense: {getTotalExpenses()}</p>
        <p>Total Balance: {getTotalBalance()}</p>
      </div>
      <div>
        {transactionHistory().map(history => {
          const {_id, type, title, amount} = history
          return (
            <div key={_id}
            className={`flex gap-4 ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}
            >
              <p>{title}</p>
              <p>{type === 'income' ? `+ ${amount}` : `- ${amount}` }</p>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          <p>Min <span>Income</span> Max</p>
          <p>{Math.min(...incomes.map(item => item.amount))}</p>
          <p>{Math.max(...incomes.map(item => item.amount))}</p>
        </div>
        <div>
          <p>Min <span>Expense</span> Max</p>
          <p>{Math.min(...expenses.map(item => item.amount))}</p>
          <p>{Math.max(...expenses.map(item => item.amount))}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard