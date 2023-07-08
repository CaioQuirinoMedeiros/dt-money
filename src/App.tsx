import { Transactions } from './pages/Transactions'
import './index.css'
import { TransactionsContextProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <TransactionsContextProvider>
      <Transactions />
    </TransactionsContextProvider>
  )
}
