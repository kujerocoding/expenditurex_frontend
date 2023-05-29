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
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Income vs Expenses',
                font: {
                    size: 16
                }
              }
        }
    }

    const dataDoughnut = {
        labels: expenses.map(item => item.category.toUpperCase()),
        datasets: [{
          label: 'Amount',
          data: [...expenses.map(item => item.amount)],
          backgroundColor: [
            'rgb(0, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(190, 65, 86)',
            'rgb(200, 105, 26)',
            'rgb(25, 205, 46)',
            'rgb(5, 105, 186)',
          ],
          hoverOffset: 4
        }]
      };

    const doughnutOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Expenses Distribution',
            font: {
                size: 16
            }
          }
        }
    }

  return (
    <div className='w-full h-full md:grid lg:grid-cols-2 gap-4 '>
        <div className='bg-secondary p-4 rounded-xl w-full'>
            <div className='w-full md:w-1/2 lg:w-2/3 mx-auto'>
                <Doughnut options={doughnutOptions} data={dataDoughnut} className='w-full h-full'/>
            </div>
        </div>
        <div className='w-full bg-secondary p-4 rounded-xl mt-4 md:mt-0 mx-auto'>
            <Bar options={options} data={data} />
        </div>
    </div>
  )
}

export default Chart