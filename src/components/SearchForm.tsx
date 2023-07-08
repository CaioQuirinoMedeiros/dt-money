import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className='flex flex-row gap-[1rem]'>
      <input
        className='grow rounded-md border-0 bg-gray-900 text-gray-300 p-[1rem] placeholder:text-gray-500'
        placeholder='Busque por transações'
      />
      <button className='flex flex-row gap-[0.75rem] items-center px-[2rem] py-[1rem] bg-transparent border border-green-light text-green-light font-bold rounded-md hover:bg-green hover:border-green hover:text-white transition-colors'>
        <MagnifyingGlass className='text-[1.25rem]' />
        Buscar
      </button>
    </form>
  )
}
