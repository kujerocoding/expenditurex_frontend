import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'
import {FaGraduationCap, FaFileMedical, FaHouseUser, FaReceipt} from 'react-icons/fa'
import {MdFastfood} from 'react-icons/md'
import {GiClothes, GiNotebook} from 'react-icons/gi'
import {BsFillClipboard2HeartFill} from 'react-icons/bs'

const ExpenseItem = ({_id, amount, category, date, description, title, type, }) => {

  const {deleteExpense} = useGlobalContext()

  const getIcon = () => {
    switch(category){
      case 'basicClothing':
        return <GiClothes />
      case 'education':
        return <FaGraduationCap />
      case 'essentialBills':
        return <FaReceipt />
      case 'food':
        return <MdFastfood />
      case 'healthCare':
        return <FaFileMedical />
      case 'mortgage':
        return <FaHouseUser />
      case 'personalCare':
        return <BsFillClipboard2HeartFill />
      default:
        return <GiNotebook />
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