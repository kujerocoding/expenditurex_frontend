import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'
import { basicClothing, education, essentialBills, food, healthCare, mortgage, personalCare, other } from '../utils/Icons'

const ExpenseItem = ({_id, amount, category, date, description, title, type, }) => {

  const {deleteExpense} = useGlobalContext()

  const getIcon = () => {
    switch(category){
      case 'basicClothing':
        return basicClothing
      case 'education':
        return education
      case 'essentialBills':
        return essentialBills
      case 'food':
        return food
      case 'healthCare':
        return healthCare
      case 'mortgage':
        return mortgage
      case 'personalCare':
        return personalCare
      default:
        return other
    }
  }

  return (
    <div className='border-2 border-accent mb-4 rounded-xl bg-secondary'>
      <div className='grid grid-cols-5 p-4'>
        <div className='col-span-4 flex gap-4'>
          <div className='w-16 h-16 bg-red-700 p-4 rounded-full text-text'>{getIcon()}</div>
          <div>
            <p className='text-lg capitalize'>{title}</p>
            <p className='text-sm text-gray-500 capitalize'>{category}</p>
            <p className='text-sm text-gray-500'>{description}</p>
          </div>
        </div>
        <div className=''>
          <p className='text-lg'>₱{amount}</p>
          <p className='text-sm text-gray-500'>{dateFormat(date)}</p>
          <button 
          className='text-sm underline text-primary hover:text-text'
          onClick={() => deleteExpense(_id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem