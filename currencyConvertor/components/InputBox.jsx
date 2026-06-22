import React from 'react'

function InputBox({
  lable, 
  amount,
  currency = 'usd',
  currencyOptions = [],
  onCurrencyChange, 
  onAmountChange, 
  isDisable= false,
  

}) {
  return (
      <div className='dark:bg-[#d3d3d3] bg-[#616161]   md:w-120 w-[80vw]  flex justify-between p-5 rounded-2xl shadow-[#00000047] shadow-lg my-2'>
        <div className="flex flex-col w-1/2">

      <label className='font-bold text-xl text-black mb-4'  htmlFor="">{lable}</label>
      <input type="number" placeholder='Enter the amount' className = 'py-2 text-xl outline-none text-black' value={amount} disabled={isDisable} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/> 
        </div>
        <div className="flex flex-col">

      <label className='font-bold text-xl text-black mb-4' htmlFor="">Currency Type</label>
      <select name="" id="" value={currency} className='text-black bg-[#b5b5b5] px-2 rounded-xl py-2 outline-none text-xl' onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) } >
        {
          currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))
        }
      </select>
        </div>
    </div>
    
  )
}

export default InputBox