import React, { useState } from 'react'
import InputBox from './Converter/InputBox'
import useCurrencyInfo from './Hooks.js/useCurrencyInfo'

function Currrency() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)
  
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)
  
    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }
  
    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }
  
    return (
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(https://res.cloudinary.com/daricnizg/image/upload/v1704627458/trade-inr_bhopwi.jpg)` }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border-2 border-red-600 rounded-lg p-5 backdrop-blur-sm'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                ><img style={{ width: "25px" }} src={'https://res.cloudinary.com/daricnizg/image/upload/v1704627176/swap_h9ibwi.png'} ></img></button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button
                type='submit'
                className='w-full flex justify-between bg-blue-600 text-black px-4 py-3 rounded-lg border-2 border-blue-500'
              >{from.toUpperCase()} <img style={{ width: "35px" }} src={'https://assets.materialup.com/uploads/6dfe1813-10aa-4200-8ea4-d751a5442c56/preview'} ></img> {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
  
      </div>
    )
}

export default Currrency