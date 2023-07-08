import * as React from 'react'

import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactionsSummary() {
  const { transactions } = React.useContext(TransactionsContext)

  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.sumIncome += transaction.price
      } else if (transaction.type === 'outcome') {
        acc.sumOutcome += transaction.price
      }

      return acc
    },
    { sumIncome: 0, sumOutcome: 0 }
  )
}
