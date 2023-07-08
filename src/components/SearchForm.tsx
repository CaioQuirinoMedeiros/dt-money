import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../contexts/TransactionsContext'

const searchTransactionsFormSchema = z.object({
  query: z.string()
})

type SearchTransactionsFormData = z.infer<typeof searchTransactionsFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (transactionsContext) => {
      return transactionsContext.fetchTransactions
    }
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchTransactionsFormData>({
    resolver: zodResolver(searchTransactionsFormSchema)
  })

  async function handleSearchTransactions(
    formData: SearchTransactionsFormData
  ) {
    fetchTransactions({ query: formData.query })
  }

  return (
    <form
      className='flex flex-row gap-[1rem]'
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        className='grow rounded-md border-0 bg-gray-900 text-gray-300 p-[1rem] placeholder:text-gray-500'
        placeholder='Busque por transações'
        {...register('query')}
      />
      <button
        className='flex flex-row gap-[0.75rem] items-center px-[2rem] py-[1rem] bg-transparent border border-green-light text-green-light font-bold rounded-md [&:not(:disabled):hover]:bg-green [&:not(:disabled):hover]:border-green [&:not(:disabled):hover]:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed '
        disabled={!!isSubmitting}
      >
        <MagnifyingGlass className='text-[1.25rem]' />
        Buscar
      </button>
    </form>
  )
}
