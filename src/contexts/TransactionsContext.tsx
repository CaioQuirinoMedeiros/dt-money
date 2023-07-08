import * as React from 'react'
import { api } from '../lib/axios'

type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

type NewTransactionParams = {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

type FetchTransactionsParams = {
  query?: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  addNewTransaction(params: NewTransactionParams): Promise<void>
  fetchTransactions(params?: FetchTransactionsParams): Promise<void>
}

export const TransactionsContext = React.createContext(
  {} as TransactionsContextType
)

export function TransactionsContextProvider({
  children
}: React.PropsWithChildren) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([])

  async function fetchTransactions(params?: FetchTransactionsParams) {
    const { query } = params || {}

    const response = await api.get('/transactions', {
      params: { query: query, _sort: 'createdAt', _order: 'desc' }
    })
    setTransactions(response.data)
  }

  async function addNewTransaction(params: NewTransactionParams) {
    const { category, description, price, type } = params

    const newTransaction: Omit<Transaction, 'id'> = {
      description,
      category,
      price,
      type,
      createdAt: new Date().toISOString()
    }
    const response = await api.post('/transactions', newTransaction)

    const createdTransaction = response.data as Transaction

    setTransactions((prevTransactions) => [
      createdTransaction,
      ...prevTransactions
    ])
  }

  React.useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, addNewTransaction, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
