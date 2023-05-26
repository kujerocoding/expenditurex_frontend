import React, {createContext, useContext, useState} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])


    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes()
   }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const getTotalIncome = () => {
        let totalIncome = 0
        incomes.forEach(income => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    } 


    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getExpenses()
   }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const getTotalExpenses = () => {
        let totalExpenses = 0
        expenses.forEach(expense => {
            totalExpenses = totalExpenses + expense.amount
        })
        return totalExpenses
    } 


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            getTotalIncome,
            expenses,
            addExpense,
            deleteExpense,
            getExpenses,
            getTotalExpenses
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}