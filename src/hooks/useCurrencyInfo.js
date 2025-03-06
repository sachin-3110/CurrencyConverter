import { useEffect,useState } from "react";

function useCurrencyInfo(from){
   
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[from]))
    },[from])
    return data

}

// this is how a customHook is designed in which we just gave a function name and used useEffect and useState for the optimization and best approaches
export default useCurrencyInfo