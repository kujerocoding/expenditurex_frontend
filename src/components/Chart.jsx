import React from 'react'
/* import {Chart as ChartJs, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js' */
import {Line , Bar, Doughnut} from 'react-chartjs-2'
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

    const options = {
        responsive: true
    }

    const dataDoughnut = {
        labels: expenses.map(item => item.category),
        datasets: [{
          label: 'Amount',
          data: [...expenses.map(item => item.amount)],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className='w-full h-full md:grid lg:grid-cols-2 gap-4'>
        <div className='bg-secondary p-4 rounded-xl flex items-center justify-center '>
            <div className='w-full md:w-1/2 lg:w-1/2'>
                <Doughnut options={options} data={dataDoughnut} className='w-full h-full'/>
            </div>
        </div>
        <div className=' bg-secondary p-4 rounded-xl mt-4 md:mt-0'>
            <Bar options={options} data={data} />
        </div>
    </div>
  )
}

export default Chart