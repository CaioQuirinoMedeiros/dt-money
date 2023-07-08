import * as React from 'react'

type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

export const TransactionsContext = React.createContext({} as TransactionsContextType)

export function TransactionsContextProvider({
  children
}: React.PropsWithChildren) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'GET'
    })
    const responseData = await response.json()
    setTransactions(responseData)
  }

  React.useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
