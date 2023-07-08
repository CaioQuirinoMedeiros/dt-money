import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'

export function Transactions() {
  const variant = 'income'
  return (
    <main>
      <Header />
      <Summary />

      <div className='w-full max-w-[1120px] mt-[4rem] mx-auto px-[1.5rem]'>
        <SearchForm />

        <table className='w-full border-separate border-spacing-x-0 border-spacing-y-[0.5rem] mt-[1.5rem]'>
          <tbody>
            <tr>
              <td className='w-[50%] py-[1.25rem] px-[2rem] bg-gray-700 rounded-tl-md rounded-bl-md'>
                Desenvolvmento de site
              </td>
              <td
                className={`py-[1.25rem] px-[2rem] bg-gray-700 ${
                  variant === 'income' ? 'text-green-light' : 'text-red'
                }`}
              >
                R$ 12.000,00
              </td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700'>Venda</td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700 rounded-tr-md rounded-br-md'>
                13/04/2023
              </td>
            </tr>
            <tr>
              <td className='w-[50%] py-[1.25rem] px-[2rem] bg-gray-700 rounded-tl-md rounded-bl-md'>
                Desenvolvmento de site
              </td>
              <td
                className={`py-[1.25rem] px-[2rem] bg-gray-700 ${
                  variant === 'income' ? 'text-green-light' : 'text-red'
                }`}
              >
                R$ 12.000,00
              </td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700'>Venda</td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700 rounded-tr-md rounded-br-md'>
                13/04/2023
              </td>
            </tr>
            <tr>
              <td className='w-[50%] py-[1.25rem] px-[2rem] bg-gray-700 rounded-tl-md rounded-bl-md'>
                Desenvolvmento de site
              </td>
              <td
                className={`py-[1.25rem] px-[2rem] bg-gray-700 ${
                  variant === 'income' ? 'text-green-light' : 'text-red'
                }`}
              >
                R$ 12.000,00
              </td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700'>Venda</td>
              <td className='py-[1.25rem] px-[2rem] bg-gray-700 rounded-tr-md rounded-br-md'>
                13/04/2023
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
