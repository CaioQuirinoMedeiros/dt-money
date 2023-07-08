import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactionsSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (transactionsContext) => {
      return transactionsContext.transactions
    }
  )

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
