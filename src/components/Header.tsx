import { Images } from '../assets/Images'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <header className='bg-gray-900 pt-[2.5rem] pb-[7.5rem]'>
      <div className='w-full max-w-[1120px] my-0 mx-auto px-[1.5rem] flex flex-row justify-between'>
        <img src={Images.logo} />
        <Dialog.Root>
          <Dialog.Trigger className='h-[50px] bg-green text-white font-bold px-[1.25rem] rounded-md cursor-pointer hover:bg-green-dark transition-colors'>
            Nova transação
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
