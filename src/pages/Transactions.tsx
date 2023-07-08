import * as React from 'react'

import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'
import { formatCurrency } from '../utils/formatCurrency'
import { format, parseISO } from 'date-fns'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = React.useContext(TransactionsContext)

  return (
    <main>
      <Header />
      <Summary />

      <div className='w-full max-w-[1120px] mt-[4rem] mx-auto px-[1.5rem]'>
        <SearchForm />

        <table className='w-full border-separate border-spacing-x-0 border-spacing-y-[0.5rem] mt-[1.5rem]'>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id.toString()}>
                  <td className='w-[50%] py-[1.25rem] px-[2rem] bg-gray-700 rounded-tl-md rounded-bl-md'>
                    {transaction.description}
                  </td>
                  <td
                    className={`py-[1.25rem] px-[2rem] bg-gray-700 ${
                      transaction.type === 'income'
                        ? 'text-green-light'
                        : 'text-red'
                    }`}
                  >
                    {transaction.type === "outcome" && "- "}
                    {formatCurrency(transaction.price)}
                  </td>
                  <td className='py-[1.25rem] px-[2rem] bg-gray-700'>
                    {transaction.category}
                  </td>
                  <td className='py-[1.25rem] px-[2rem] bg-gray-700 rounded-tr-md rounded-br-md'>
                    {format(parseISO(transaction.createdAt), 'dd/MM/yyyy')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
