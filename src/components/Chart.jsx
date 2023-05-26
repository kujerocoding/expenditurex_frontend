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
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div className='w-full h-full md:grid md:grid-cols-2 gap-4'>
        <div className='bg-secondary p-4 rounded-xl'>
            <div className='w-full md:w-1/2'>
                <Doughnut options={options} data={dataDoughnut}/>
            </div>
        </div>
        <div className=' bg-secondary p-4 rounded-xl'>
            <Bar options={options} data={data} />
        </div>
    </div>
  )
}

export default Chart