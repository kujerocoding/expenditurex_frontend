import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useGlobalContext } from '../context/globalContext'


const Form = () => {

    const { addIncome } = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description} = inputState

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
    }

  return (
    <div >
        <div>
            <input 
            type="text"
            value={title}
            name={'title'}
            placeholder='Income Title'
            onChange={handleInput('title')}
            />
        </div>
        <div>
            <input 
            type="text"
            value={amount}
            name={'amount'}
            placeholder='Income Amount'
            onChange={handleInput('amount')}
            />
        </div>
        <div>
            <DatePicker
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
            id='date'
            placeholderText='Enter A Date'
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
                setInputState({...inputState, date: date})
            }}
            />
        </div>
        <div>
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value="salary">Salary</option>
                <option value="freelancing" >Freelancing</option>
                <option value="stocks">Stocks</option>
            </select>
        </div>
        <div>
            <textarea value={description} name="description" id="description" cols="30" rows="10" placeholder='Add a message'
            onChange={handleInput('description')}
            ></textarea>
        </div>
        <div>
            <button onClick={handleSubmit}>Add Income</button>
        </div>
    </div>
  )
}

export default Form