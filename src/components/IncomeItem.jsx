import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'

const IncomeItem = ({_id, amount, category, date, description, title, type, }) => {
  const {deleteIncome} = useGlobalContext()
  return (
    <div className='border-2 border-accent mb-4 rounded-xl bg-secondary'>
      <div className='grid grid-cols-5 p-4'>
        <div className='col-span-4 flex gap-4'>
          <p>icon</p>
          <div>
            <p className='text-lg'>{title}</p>
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