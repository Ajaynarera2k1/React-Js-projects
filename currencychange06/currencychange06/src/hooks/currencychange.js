import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
     useEffect(() => {
         const[data,setdata] = useState({});
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
      // in then  setdata is used to store the data instead of local variable bcz it will not show any change in the ui
        console.log(data);
     },[currency])
     console.log(data);
     return data;
  // return the complete method like usestate

}

export default useCurrencyInfo;
// return complete method