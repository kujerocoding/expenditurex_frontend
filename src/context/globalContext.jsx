import React, {createContext, useContext, useState} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])


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

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            getTotalIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}