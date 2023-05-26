import React from 'react'

const TotalItem = ({itemTotal,itemTitle}) => {

    const style = () => {
        switch(itemTitle){
            case 'Total Income':
                return 'text-green-500 text-xl'
            case 'Total Expense':
                return 'text-red-500 text-xl'
            case 'Total Balance':
                return 'text-blue-500 text-xl'
            default:
                return ''
        }
    }

  return (
    <div className='w-1/3 flex flex-col items-center justify-center p-4 border-2 border-black rounded-xl'>
        <p className={style()}>{itemTotal}</p>
        <p className='text-xs'>{itemTitle}</p>
    </div>
  )
}

export default TotalItem