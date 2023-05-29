import React, { useEffect } from 'react'
import IncomeForm from './IncomeForm'
import { useGlobalContext } from '../context/globalContext'
import IncomeItem from './IncomeItem'
import TotalItem from '../shared/totalItem'


const Income = () => {

  const {incomes, getIncomes, getTotalIncome} = useGlobalContext()
  console.log(incomes)
  useEffect(() => {
    getIncomes()
  },[])

  return (
    <div className='flex flex-col text-text px-4'>
      <div className='py-4'>
        <TotalItem itemTitle={'Total Income'} itemTotal={getTotalIncome()}/>
      </div>
      <div className='md:flex gap-4'>
        <IncomeForm />
        <div className='basis-2/3 rounded-xl p-4 max-h-[600px] overflow-y-auto'>
          <p className='py-4 uppercase text-xl text-center'>Income Transactions</p>
          {incomes.map(income => (
            <IncomeItem key={income._id} {...income}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Income