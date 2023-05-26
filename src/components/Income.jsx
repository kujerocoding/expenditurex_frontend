import React, { useEffect } from 'react'
import IncomeForm from './IncomeForm'
import { useGlobalContext } from '../context/globalContext'
import IncomeItem from './IncomeItem'


const Income = () => {

  const {incomes, getIncomes, getTotalIncome} = useGlobalContext()
  console.log(incomes)
  useEffect(() => {
    getIncomes()
  },[])

  return (
    <div className='flex'>
      <IncomeForm />
      <div>
        {incomes.map(income => (
          <IncomeItem key={income._id} {...income}/>
        ))}
      </div>
      <p>Total Income: {getTotalIncome()}</p>
    </div>
  )
}

export default Income