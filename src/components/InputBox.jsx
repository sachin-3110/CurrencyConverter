import React, { useState } from 'react'
import { useEffect } from 'react';
const InputBox = (
  {
    label,
    amount,
    onAmounChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = ["usd"],
    amountDisable = false,
    currencyDisable = false,
    className = ""
  }

) => {
  return (
    <div className={`w-full md:w-1/2  bg-white text-black rounded-2xl p-2 justify-around flex ${className}`}>
      <div className='flex flex-col '>
        <label htmlFor="" className='bg-amber-100 text-xl w-fit px-2 rounded-2xl'>{label}</label>
        <input type="number" className='font-bold border-2 w-1/2 rounded px-1' value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmounChange && onAmounChange(Number(e.target.value))}
        />
      </div>
      <div className='flex flex-col'>
        <h1>Currency</h1>
        <select name="" id=""
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) =>
            <option key={currency} value={currency}>
              {currency}
            </option>)}
        </select>
      </div>

    </div>
  )
}

export default InputBox