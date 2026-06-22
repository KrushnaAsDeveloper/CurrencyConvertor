import React, { useEffect, useState } from "react";
import allCurrecnyInfo from "../hooks/useCurrencyInfo";
import InputBox from "../components/InputBox";
import { ThemeContextProvider } from "../Context/Theme";
import { themeContext } from "../Context/Theme";
import "./index.css"
import DarkModeButton from "./DarkModeButton";
function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAm, setConvertedAm] = useState(0);
  
  let allCurrency = allCurrecnyInfo(from);

  let allOptions = Object.keys(allCurrency);

  let swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAm(amount);
    setAmount(convertedAm);
  };

  let convert = () => {
    setConvertedAm(amount * allCurrency[to]);
  };
  // using the context fn as function here with same name so that it will provide the same functionality to the function in the context

  

  return (
    <>
      
        <div className='flex justify-center items-center bg-white dark:bg-black bg-cover bg-center bg-no-repeat min-h-screen w-full   flex-col  '>
        <DarkModeButton/>
          <h1 className="text-black mb-10 text-4xl font-bold dark:text-white">
            Currency Convertor
          </h1> 
          <form
            className="relative flex flex-col justify-center items-center md:w-auto w-[90vw] p-5 dark:bg-[#ffffff81] rounded-2xl bg-[#3b3b3b81] backdrop-blur-sm"
            onSubmit={(e) => {
              (e.preventDefault(), convert());
            }}
          >
            <InputBox
              lable={from}
              amount={amount}
              currencyOptions={allOptions}
              currency={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(from) => setFrom(from)}
            />
            <button
              onClick={swap}
              type="button"
              className="cursor-pointer text-white bg-[#111] px-3 py-2 text-2xl absolute top-[36%] rounded-2xl"
            >
              swap
            </button>
            <InputBox
              lable={to}
              amount={convertedAm}
              currencyOptions={allOptions}
              currency={to}
              onAmountChange={(convertedAm) => setConvertedAm(convertedAm)}
              onCurrencyChange={(to) => setTo(to)}
              isDisable
              
            />
            <button
              type="submit"
              className="font-thin text-3xl cursor-pointer bg-[#111] rounded-xl px-3 py-2 mt-5 text-white"
            >{`Covert ${from} to ${to}`}</button>
          </form>
        </div>
    </>
  );
}

export default App;
