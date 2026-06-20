import React, { useState } from 'react'
import allCurrecnyInfo from "../hooks/useCurrencyInfo"
import InputBox from '../components/InputBox'
function App() {
  const[amount, setAmount] = useState(0)
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
      
    <div className='flex justify-center items-center h-screen bg-[url("https://img.magnific.com/free-vector/shiny-indian-rupee-digital-currency-background-with-circuit-lines_1017-41186.jpg?uid=R192351663&ga=GA1.1.546384849.1781920855&semt=ais_test_c&w=740&q=80")] bg-center bg-cover  flex-col w-[100vw] '>
  <form className='relative flex flex-col justify-center items-center  p-5 bg-[#ffffff81] rounded-2xl backdrop-blur-sm' onSubmit={(e)=> {e.preventDefault(), convert()}}>
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