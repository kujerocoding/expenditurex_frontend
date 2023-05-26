import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../context/globalContext'


const IncomeForm = () => {

    const { addIncome, getIncomes, error, setError } = useGlobalContext()

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
        setError(null)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        getIncomes()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <div>
        {error && <p>{error}</p>}
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

export default IncomeForm