import React from 'react'

function InputBox({
  lable, 
  amount,
  currency = 'usd',
  currencyOptions = [],
  onCurrencyChange, 
  onAmountChange, 
  isDisable= false,
  placeholder= "", 
  textColor = ""  , 
  selectBgColor = ""
  

}) {
  return (
      <div className='bg-[#e1d4b3]   md:w-120 w-[80vw]  flex justify-between p-5 rounded-2xl   my-2 dark:bg-[#293043]'>
        <div className="flex flex-col">

      <select value={currency} className={` appearance-none  px-2 rounded-xl py-2 text-center text-2xl uppercase outline-none  } onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) ${selectBgColor} `} >
        {
          currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))
        }
      </select>
        </div>
        <div className="flex flex-col w-1/2">

      <input type="number" placeholder={placeholder} className = {` py-2 font-bold outline-none ${textColor} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right placeholder-gray-400 text-2xl `} value={amount} disabled={isDisable} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/> 
        </div>
    </div>
    
  )
}

export default InputBox