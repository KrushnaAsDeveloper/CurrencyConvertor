import React, { useEffect, useState } from "react";
import allCurrecnyInfo from "../hooks/useCurrencyInfo";
import InputBox from "../components/InputBox";
import { ThemeContextProvider } from "../Context/Theme";
import { themeContext } from "../Context/Theme";
import "./index.css";
import DarkModeButton from "../components/DarkModeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExchange} from "@fortawesome/free-solid-svg-icons"
function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAm, setConvertedAm] = useState();

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
      <div className="font-[ubuntu] flex justify-center items-center  bg-[#f8f1d0] dark:bg-[#0a0f1e] bg-cover bg-center bg-no-repeat min-h-screen w-full   flex-col  ">
        <div className="fixed right-5 top-5">
          <DarkModeButton />
        </div>
        {/* live status */}
        <div className="inline-flex items-center justify-center gap-3 mb-5 bg-[#fceba9] border border-[#FAEABF] transition-colors duration-150 px-5 py-1.5 rounded-full cursor-pointer dark:bg-[#252423] ">
          <span className="text-sm tracking-widest font-bold  text-orange-400 uppercase dark:text-yellow-400">  
            Live Rates
          </span>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
        </div>
        <h1 className="text-black mb-10 text-4xl font-bold dark:text-white">
          <span className="text-black dark:text-white">Currency</span> <span className="text-[#e0ac27] dark:text-[#F9BD24]">Convertor</span>
        </h1>
        <form
          className="relative flex flex-col justify-center items-center md:w-auto w-[90vw] p-5  rounded-2xl  backdrop-blur-sm bg-[#f3df8f] shadow shadow-2xl dark:bg-[#11182A] dark:shadow-2xl dark:shadow-[#3c3f2d]"
          onSubmit={(e) => {
            (e.preventDefault(), convert());
          }}
        >
          <div className="text-neutral-400 uppercase text-sm font-bold relative md:w-120 w-[80vw]  mb-5 "><span className="absolute left-0 ">You send</span></div>
          <InputBox
            lable={from}
            amount={amount}
            currencyOptions={allOptions}
            currency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(from) => setFrom(from)}
            placeholder="00.0"
            textColor="text-gray-600 dark:text-gray-400"
            selectBgColor="bg-[#fceba9] text-orange-500 dark:bg-[#252323]"
          />
          <div className="my-3"><button
            onClick={swap}
            type="button"
            className="cursor-pointer text-white dark:text-[#222]   px-3 py-2 text-3xl bg-amber-400 dark:bg-neutral-400 rounded-full"
          >
            <FontAwesomeIcon className="rotate-90 hover:rotate-y-180 transition-all duration-75" icon={faExchange} />
          </button></div>
           <div className="text-neutral-400 uppercase text-sm font-bold relative md:w-120 w-[80vw]  mb-5 "><span className="absolute left-0 ">You receive</span></div>
          <InputBox
            lable={to}
            amount={convertedAm && convertedAm.toFixed(1)}
            currencyOptions={allOptions}
            currency={to}
            onAmountChange={(convertedAm) => setConvertedAm(convertedAm)}
            onCurrencyChange={(to) => setTo(to)}
            isDisable
            placeholder="00.0"
            textColor="text-green-600"
            selectBgColor="text-blue-600 bg-[#aaa8fa] dark:bg-[#202746]"
          />
          <div className="text-neutral-500 my02">1 {from} = {1 * allCurrency[to]} {to}</div>
          <button
            type="submit"
            className={`text-[1.2rem] font-bold cursor-pointer bg-orange-400 rounded-xl px-3 py-2 mt-5 text-black dark:text-white  md:w-[25vw] w-[60vw]`}
          >{`Covert ${from.toUpperCase()} → ${to.toUpperCase()}`}</button>
        </form>
      </div>
    </>
  );
}

export default App;
