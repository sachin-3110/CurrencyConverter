import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import useCurrencyInfo from './hooks/useCurrencyInfo'


const App = () => {
 
  const [from,setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const currOptions = Object.keys(currencyInfo)


  const Swap= ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(convertedAmount)
  }
const convert=()=>{setConvertedAmount(amount*currencyInfo[to] || 1)}

  const handleSubmit = (event) => {
    event.preventDefault()
    convert()
    console.log(`${from} to ${to}`)
  }
  
  return (
    <div className='w-screen h-screen bg-cover bg-center 
    
    bg-none
    md:bg-[url(https://images.unsplash.com/photo-1599308264063-1557561b08fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
    //  text-white flex justify-between items-center'>
      <div className='bg-transparent w-full h-screen hidden lg:flex'></div>
      <div className='w-full h-screen flex justify-center items-center flex-col 
 md:bg-none
 bg-[url(https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
 // bg-cover bg-end  
 // md:bg-black/50'>   <span className='text-2xl font-bold'>Currency Converter</span>
        <div className='w-full justify-center items-center gap-2 flex flex-col'>
          <InputBox label={"From"} 
            amount={amount}
            currencyOptions={currOptions}
            onAmounChange={(amount)=>setAmount(amount)}
            onCurrencyChange={(currency)=>{setAmount(currency)}}
            selectCurrency={to}
          />
          <button onClick={Swap} className='bg-amber-400 p-2 rounded absolute'>Swap</button>
          <InputBox label={"to"}
           amount={convertedAmount}
           currencyOptions={currOptions}
           onAmounChange={(amount)=>setAmount(amount*convertedAmount()) }
           onCurrencyChange={(currency)=>{setTo(currency)}}
           selectCurrency={from}
           amountDisable
           />
        </div>
        <form action="" className='w-[95%] rounded-2xl bg-amber-500 sm:bg-transparent sm:text-white m-2 sm:m-0 sm:w-1/2 md:w-1/2' onSubmit={handleSubmit}>
          <div className='w-full text-2xl'><button type='submit' className='hover:w-full duration-500 md:text-nowrap relative group w-full md:w-0 md:hover:bg-amber-300 rounded p-2 my-2 h-full '><span className='text-xl md:inline hidden text-red-600  group-hover:hidden duration-75 absolute w-1 h-[70%] bg-red-500 left-0'></span>Convert {from} to {to} </button></div>
        </form></div>
    </div>
  )
}

export default App