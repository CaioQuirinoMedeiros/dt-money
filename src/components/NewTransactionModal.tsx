import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.coerce.number(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormData = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { addNewTransaction } = React.useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleAddNewTransaction(formData: NewTransactionFormData) {
    addNewTransaction({
      category: formData.category,
      description: formData.description,
      price: formData.price,
      type: formData.type
    })

    reset()

  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.75)]' />
      <Dialog.Content className='min-w-[32rem] rounded-md py-[2.5rem] px-[3rem] bg-gray-800 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Dialog.Close className='absolute bg-transparent border-0 top-[1.5rem] right-[1.5rem] cursor-pointer text-gray-500 leading-0'>
          <X size={24} />
        </Dialog.Close>
        <form
          className='flex flex-col gap-[1rem] mt-[2rem]'
          onSubmit={handleSubmit(handleAddNewTransaction)}
        >
          <input
            className='rounded-md border-0 bg-gray-900 text-gray-300 p-[1rem] placeholder:text-gray-500'
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            className='rounded-md border-0 bg-gray-900 text-gray-300 p-[1rem] placeholder:text-gray-500'
            type='number'
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            className='rounded-md border-0 bg-gray-900 text-gray-300 p-[1rem] placeholder:text-gray-500'
            type='text'
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className='flex flex-row gap-[1rem]'
                  onValueChange={(value) => field.onChange(value as "outcome")}
                  value={field.value}
                  onBlur={field.onBlur}
                >
                  <RadioGroup.Item
                    value='income'
                    className='group bg-gray-700 hover:bg-gray-600 p-[1rem] grow flex flex-row gap-[0.5rem] items-center justify-center rounded-md cursor-pointer border-0 text-gray-100 aria-checked:bg-green-dark aria-checked:text-white'
                  >
                    <ArrowCircleUp className='text-[1.5rem] text-green-light group-aria-checked:text-white' />
                    Entrada
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value='outcome'
                    className='group bg-gray-700 hover:bg-gray-600 p-[1rem] grow flex flex-row gap-[0.5rem] items-center justify-center rounded-md cursor-pointer border-0 text-gray-100 aria-checked:bg-red-dark aria-checked:text-white'
                  >
                    <ArrowCircleDown className='text-[1.5rem] text-red group-aria-checked:text-white' />
                    Saída
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <button
            className='h-[58px] border-0 bg-green text-white font-bold px-[1.25rem] rounded-md mt-[1.5rem] [&:not(:disabled):hover]:bg-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
            type='submit'
            disabled={!!isSubmitting}
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
