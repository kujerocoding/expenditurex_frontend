import React from 'react'
import { balance, expense, money } from '../utils/Icons'

const TotalItem = ({itemTotal,itemTitle}) => {

    const style = () => {
        switch(itemTitle){
            case 'Total Income':
                return 'text-green-500 text-2xl font-bold'
            case 'Total Expense':
                return 'text-red-500 text-2xl font-bold'
            case 'Total Balance':
                return 'text-blue-500 text-2xl font-bold'
            default:
                return ''
        }
    }

    const getIcon = () => {
        switch(itemTitle){
            case 'Total Income':
                return money
            case 'Total Expense':
                return expense
            case 'Total Balance':
                return balance
            default:
                return money
        }
    }

  return (
    <div className='w-1/3 mx-auto flex items-center justify-center p-4 border-2 border-accent rounded-xl bg-secondary'>
        <div className='flex gap-4 text-center'>
            <div className='w-12 h-12'>
                {getIcon()}
            </div>
            <div>
                <p className={style()}>{itemTotal}</p>
                <p className='text-xs'>{itemTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default TotalItem