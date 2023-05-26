import React from 'react'
/* import {Chart as ChartJs, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js' */
import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'
import 'chart.js/auto';

/* ChartJs.register(
    CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement
) */

const Chart = () => {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map(income => dateFormat(income.date)),
        datasets: [
            {
                label: 'Income',
                data: [...incomes.map(income => income.amount)],
                backgroundColor: 'green'
            },
            {
                label: 'Expense',
                data: [...expenses.map(expense => expense.amount)],
                backgroundColor: 'red'
            },
        ]
    }
  return (
    <div className='w-full h-full'>
        <Line data={data} />
    </div>
  )
}

export default Chart