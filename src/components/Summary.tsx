import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <section className='w-full max-w-[1120px] mx-auto px-[1.5rem] grid grid-cols-3 gap-[2rem] mt-[-5rem]'>
      <div className='bg-gray-600 rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Entradas</span>
          <ArrowCircleUp size={32} className='text-green-300' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>R$ 17.400,00</strong>
      </div>

      <div className='bg-gray-600 rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Saídas</span>
          <ArrowCircleDown size={32} className='text-red-300' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>R$ 17.400,00</strong>
      </div>

      <div className='bg-green-700 rounded-md py-[1.5rem] px-[2rem]'>
        <header className='flex flex-row items-center justify-between text-gray-300 mb-[0.75rem]'>
          <span>Total</span>
          <CurrencyDollar size={32} className='text-white' />
        </header>
        <strong className='block mt-1rem text-[2rem]'>R$ 17.400,00</strong>
      </div>
    </section>
  )
}
