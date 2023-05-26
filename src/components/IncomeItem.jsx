import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'

const IncomeItem = ({_id, amount, category, date, description, title, type, }) => {
  const {deleteIncome} = useGlobalContext()
  return (
    <div className='border-2 border-red-500'>
        <p>{amount}</p>
        <p>{category}</p>
        <p>{dateFormat(date)}</p>
        <p>{description}</p>
        <p>{title}</p>
        <p>{type}</p>
        <button onClick={() => deleteIncome(_id)}>Delete</button>
    </div>
  )
}

export default IncomeItem