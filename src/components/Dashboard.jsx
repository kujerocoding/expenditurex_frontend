import React, { useEffect } from 'react'
import Chart from './Chart'
import { useGlobalContext } from '../context/globalContext'
import TotalItem from '../shared/TotalItem'

const Dashboard = () => {
  const {incomes, expenses, getIncomes, getExpenses, getTotalIncome, getTotalExpenses, getTotalBalance, transactionHistory} = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  },[])

  return (
    <div className='md:grid grid-cols-2 gap-4 px-4 text-text'>
      <div className='col-span-2'>
        <h1 className='py-4 uppercase text-xl'>Dashboard</h1>
        <div className='flex flex-wrap md:flex-nowrap gap-4'>
          <TotalItem itemTitle={'Total Income'} itemTotal={getTotalIncome()}/>
          <TotalItem itemTitle={'Total Expense'} itemTotal={getTotalExpenses()}/>
          <TotalItem itemTitle={'Total Balance'} itemTotal={getTotalBalance()}/>
        </div>
      </div>
      <div className='md:col-span-2 py-4'>
        <Chart />
      </div>
      <div className='bg-secondary p-4 rounded-xl'>
        <h1 className='text-xl'>Recent Transactions</h1>
        {transactionHistory().map(history => {
          const {_id, type, title, amount} = history
          return (
            <div key={_id}
            className={`flex justify-between mt-4 border-2 border-accent py-2 px-4 rounded-xl capitalize ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}
            >
              <p>{title}</p>
              <p>{type === 'income' ? `+ ₱ ${amount}` : `- ₱ ${amount}` }</p>
            </div>
          )
        })}
      </div>
      <div className='bg-secondary p-4 rounded-xl my-4 md:my-0'>
        <div>
          <div className='flex items-end justify-between'>
            <p className='text-sm'>Min</p>
            <p className='text-xl'>Income</p>
            <p className='text-sm'>Max</p>
          </div>
          <div className='flex justify-between mt-4 border-2 border-accent py-2 px-4 rounded-xl capitalize'>
            <p className='text-lg'>₱ {Math.min(...incomes.map(item => item.amount))}</p>
            <p className='text-lg'>₱ {Math.max(...incomes.map(item => item.amount))}</p>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex items-end justify-between'>
            <p className='text-sm'>Min</p>
            <p className='text-xl'>Expense</p>
            <p className='text-sm'>Max</p>
          </div>
          <div className='flex justify-between mt-4 border-2 border-accent py-2 px-4 rounded-xl capitalize'>
            <p className='text-lg'>₱ {Math.min(...expenses.map(item => item.amount))}</p>
            <p className='text-lg'>₱ {Math.max(...expenses.map(item => item.amount))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard