import React, { useState } from 'react'
import allCurrecnyInfo from "../hooks/useCurrencyInfo"
import InputBox from '../components/InputBox'
function App() {
  const[amount, setAmount] = useState()
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAm, setConvertedAm] = useState(0)


  let allCurrency = allCurrecnyInfo(from);

  let allOptions = Object.keys(allCurrency);

  let swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAm(amount)
    setAmount(convertedAm)
  }

  let convert = () =>{
    setConvertedAm(amount * allCurrency[to] )
  }
  return (
    <>
    <div className='flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  bg-cover bg-center bg-no-repeat min-h-screen w-full   flex-col  '>
      <h1 className='mb-10 text-4xl font-bold text-white'>Currency Convertor </h1>
  <form className='relative flex flex-col justify-center items-center md:w-auto w-[90vw] p-5 bg-[#ffffff81] rounded-2xl backdrop-blur-sm' onSubmit={(e)=> {e.preventDefault(), convert()}}>
      <InputBox
      lable={from}
      amount={amount}
      currencyOptions={allOptions}
      currency={from}
      onAmountChange={(amount)=>setAmount(amount)}
        onCurrencyChange={(from)=>setFrom(from)}
      

    />
    <button onClick={swap} type='button' className='cursor-pointer text-white bg-[#111] px-3 py-2 text-2xl absolute top-[36%] rounded-2xl'>
      swap
    </button>
    <InputBox
    lable={to}
  
      amount={convertedAm}
      currencyOptions={allOptions}
      currency={to}
      onAmountChange={(convertedAm)=>setConvertedAm(convertedAm
      )}
        onCurrencyChange={(to)=>setTo(to)}
        isDisable /><button type='submit' className='font-thin text-3xl cursor-pointer bg-[#111] rounded-xl px-3 py-2 mt-5 text-white'>{`Covert ${from} to ${to}`}</button>
        </form>
    </div>
    
    </>
  )
}

export default App