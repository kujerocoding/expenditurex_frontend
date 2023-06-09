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
    <div className='bg-secondary basis-1/3 rounded-xl p-4'>
        <p className='text-center pb-4 text-lg'>New Income</p>
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
            <select required value={category} name="category" id="category" onChange={handleInput('category')}
                className='bg-secondary'
            >
                <option value="" disabled>Select Option</option>
                <option value="earned">Earned</option>
                <option value="profit" >Profit</option>
                <option value="rental">Rental</option>
                <option value="interest">Interest</option>
                <option value="capitalGains">Capital Gains</option>
                <option value="dividend">Dividend</option>
                <option value="royalty">Royalty</option>
            </select>
        </div>
        <div>
            <textarea value={description} name="description" id="description" cols="30" rows="5" placeholder='Add a message'
            onChange={handleInput('description')}
            ></textarea>
        </div>
        <div className='text-center'>
            <button onClick={handleSubmit}
            className='bg-primary px-10 py-4 rounded-full text-text font-bold hover:bg-text hover:text-primary'
            >Add Income</button>
        </div>
    </div>
  )
}

export default IncomeForm