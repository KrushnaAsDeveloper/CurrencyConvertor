import React from 'react'

function InputBox({
  lable, 
  amount,
  currency = 'usd',
  currencyOptions = [],
  onCurrencyChange, 
  onAmountChange, 
  isDisable= false,
  placeholder= ""
  

}) {
  return (
      <div className='dark:bg-[#d3d3d3] bg-[#cbcbcb8e]   md:w-120 w-[80vw]  flex justify-between p-5 rounded-2xl border border-gray-300 my-2'>
        <div className="flex flex-col">

      <select name="" id="" value={currency} className='text-black bg-[#b5b5b5] px-2 rounded-xl py-2 outline-none text-xl' onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) } >
        {
          currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))
        }
      </select>
        </div>
        <div className="flex flex-col w-1/2">

      <input type="number" placeholder={placeholder} className = 'py-2 font-bold outline-none text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right placeholder-gray-400 text-2xl' value={amount} disabled={isDisable} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/> 
        </div>
    </div>
    
  )
}

export default InputBox