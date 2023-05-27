import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../context/globalContext'


const ExpenseForm = () => {

    const { addExpense, getExpenses, error} = useGlobalContext()

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
        addExpense(inputState)
        getExpenses()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <div >
        {error && <p>{error}</p>}
        <div>
            <input 
            type="text"
            value={title}
            name={'title'}
            placeholder='Expense Title'
            onChange={handleInput('title')}
            />
        </div>
        <div>
            <input 
            type="text"
            value={amount}
            name={'amount'}
            placeholder='Expense Amount'
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
                <option value="basicClothing">Basic Clothing</option>
                <option value="education">Education</option>
                <option value="essentialBills">Essential Bills</option>
                <option value="food">Food</option>
                <option value="healthCare">Health Care</option>
                <option value="mortgage">Mortgage</option>
                <option value="personalCare">Personal Care</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div>
            <textarea value={description} name="description" id="description" cols="30" rows="10" placeholder='Add a message'
            onChange={handleInput('description')}
            ></textarea>
        </div>
        <div>
            <button onClick={handleSubmit}>Add Expense</button>
        </div>
    </div>
  )
}

export default ExpenseForm