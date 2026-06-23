import React, { useEffect, useState } from "react";
import allCurrecnyInfo from "../hooks/useCurrencyInfo";
import InputBox from "../components/InputBox";
import { ThemeContextProvider } from "../Context/Theme";
import { themeContext } from "../Context/Theme";
import "./index.css";
import DarkModeButton from "./DarkModeButton";
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
      <div className="flex justify-center items-center bg-[#F6F5F0] dark:bg-[#0a0f1e] bg-cover bg-center bg-no-repeat min-h-screen w-full   flex-col  ">
        <div className="fixed right-5 top-5">
          <DarkModeButton />
        </div>
        {/* live status */}
        <div className="inline-flex items-center justify-center gap-3 bg-[#FEF3C7] border border-[#FAEABF] transition-colors duration-150 px-5 py-1.5 rounded-full cursor-pointer dark:bg-[#252423] ">
          <span className="text-sm tracking-widest font-bold  text-orange-400 uppercase dark:text-yellow-400">
            Live Rates
          </span>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
        </div>
        <h1 className="text-black mb-10 text-4xl font-bold dark:text-white">
          <span className="text-black dark:text-white">Currency</span> <span className="text-[#F9BD24]">Convertor</span>
        </h1>
        <form
          className="relative flex flex-col justify-center items-center md:w-auto w-[90vw] p-5  rounded-2xl  backdrop-blur-sm bg-white shadow shadow-2xl dark:bg-[#11182A]"
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
          />
          <button
            onClick={swap}
            type="button"
            className="cursor-pointer text-white bg-[#111] px-3 py-2 text-2xl absolute top-[36%] rounded-2xl"
          >
            swap
          </button>
           <div className="text-neutral-400 uppercase text-sm font-bold relative md:w-120 w-[80vw]  mb-5 "><span className="absolute left-0 ">You receive</span></div>
          <InputBox
            lable={to}
            amount={convertedAm}
            currencyOptions={allOptions}
            currency={to}
            onAmountChange={(convertedAm) => setConvertedAm(convertedAm)}
            onCurrencyChange={(to) => setTo(to)}
            isDisable
            placeholder="00.0"
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
