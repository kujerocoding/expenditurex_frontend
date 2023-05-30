import React from 'react'
import {GiMoneyStack , GiPayMoney, GiTakeMyMoney} from 'react-icons/gi'


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
                return <GiMoneyStack />
            case 'Total Expense':
                return  <GiPayMoney />
            case 'Total Balance':
                return <GiTakeMyMoney />
            default:
                return <GiMoneyStack />
        }
    }

  return (
    <div className='w-full md:basis-1/3 flex items-center justify-center py-4 border-2 border-accent rounded-xl bg-secondary'>
        <div className='flex gap-4 text-center'>
            <div className='w-12 h-12'>
                {getIcon()}
            </div>
            <div>
                <p className={style()}>₱ {itemTotal.toLocaleString()}</p>
                <p className='text-xs'>{itemTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default TotalItem