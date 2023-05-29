import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'
import { earned, profit, rental, interest, capitalGains, dividend, royalty } from '../utils/Icons'

const IncomeItem = ({_id, amount, category, date, description, title, type, }) => {

  const {deleteIncome} = useGlobalContext()

  const getIcon = () => {
    switch(category){
      case 'earned':
        return earned
      case 'profit':
        return profit
      case 'rental':
        return rental
      case 'interest':
        return interest
      case 'capitalGains':
        return capitalGains
      case 'dividend':
        return dividend
      case 'royalty':
        return royalty
      default:
        return earned
    }
  }

  return (
    <div className='border-2 border-accent mb-4 rounded-xl bg-secondary'>
      <div className='grid grid-cols-5 p-4'>
        <div className='col-span-4 flex gap-4'>
          <div className='w-16 h-16 bg-green-700 p-4 rounded-full text-text'>{getIcon()}</div>
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
          onClick={() => deleteIncome(_id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default IncomeItem