import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useGlobalContext } from '../context/globalContext'
import ExpenseItem from './ExpenseItem'
import TotalItem from '../shared/TotalItem'


const Expense = () => {

  const {expenses, getExpenses, getTotalExpenses} = useGlobalContext()

  useEffect(() => {
    getExpenses()
  },[])

  return (
    <div className='flex flex-col text-text px-4'>
      <div className='py-4'>
        <TotalItem itemTitle={'Total Expense'} itemTotal={getTotalExpenses()}/>
      </div>
      <div className='md:flex gap-4'>
        <ExpenseForm />
        <div className='basis-2/3 rounded-xl p-4 md:pt-0 max-h-[600px] overflow-y-auto'>
          <p className='py-4 uppercase text-xl text-center'>Expense Transactions</p>
          {expenses.map(expense => (
            <ExpenseItem key={expense._id} {...expense}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expense