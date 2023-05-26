import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/globalContext'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm'


const Expense = () => {

  const {expenses, getExpenses, getTotalExpenses} = useGlobalContext()
  console.log('expenses', expenses)
  useEffect(() => {
    getExpenses()
  },[])

  return (
    <div className='flex'>
      <ExpenseForm />
      <div>
        {expenses.map(expense => (
          <ExpenseItem key={expense._id} {...expense}/>
        ))}
      </div>
      <p>Total Expense: {getTotalExpenses()}</p>
    </div>
  )
}

export default Expense