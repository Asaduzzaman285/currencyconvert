// import { useState,useEffect} from "react";
// function useCurrency(currency){
//     const [data,setData]=useState({})
//     useEffect(()=>{
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//     .then((res)=>res.json())
//     .then((res)=>setData(res[currency]))
//     console.log(data)
//     },[currency])
//     console.log(data)
//     return data
// }
// export default useCurrency;
import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Error fetching currency info:", error));
    }, [currency]);

    return data;
}

export default useCurrency;
 