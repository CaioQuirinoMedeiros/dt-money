import { Images } from '../assets/Images'

export function Header() {
  return (
    <header className='bg-gray-900 pt-[2.5rem] pb-[7.5rem]'>
      <div className='w-full max-w-[1120px] my-0 mx-auto px-[1.5rem] flex flex-row justify-between'>
        <img src={Images.logo} />
        <button className='h-[50px] bg-green-500 text-white font-bold px-[1.25rem] rounded-md cursor-pointer hover:bg-green-700 transition-colors'>
          Nova transação
        </button>
      </div>
    </header>
  )
}
