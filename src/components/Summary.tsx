import * as React from 'react'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { formatCurrency } from '../utils/formatCurrency'

export function Summary() {
  const { transactions } = React.useContext(TransactionsContext)

  const { sumIncome, sumOutcome } = transactions.reduce(
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

  return (
    <section className='w-full max-w-[1120px] mx-auto px-[1.5rem] grid grid-cols-3 gap-[2rem] mt-[-5rem]'>
      <div className='bg-gray-600 rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Entradas</span>
          <ArrowCircleUp size={32} className='text-green-light' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>
          {formatCurrency(sumIncome)}
        </strong>
      </div>

      <div className='bg-gray-600 rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Saídas</span>
          <ArrowCircleDown size={32} className='text-red' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>
          {formatCurrency(sumOutcome)}
        </strong>
      </div>

      <div className='bg-green-dark rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Total</span>
          <CurrencyDollar size={32} className='text-white' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>
          {formatCurrency(sumIncome - sumOutcome)}
        </strong>
      </div>
    </section>
  )
}
