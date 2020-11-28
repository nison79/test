import React , { useState }from 'react'
import { useQuery } from 'react-query'

const fetchExchange = async (currency) => {
    const response  = await fetch(`https://api.ratesapi.io/api/latest?base=${currency}`)
    const data = await response.json();
    return data;
}

const Exchange = () => {
    const [currency , setCurrency ] = useState("EUR")

    const { status , data  } = useQuery( [currency] , fetchExchange );
        if(status === "loading") return <div>loading...</div>;
        if(status === "error" ) return <div>error!</div>
   
    return (
        <div>
        <h1>Showing Currency {currency}</h1>
        <button onClick = {() => setCurrency("EUR")}>EUR</button>
        <button onClick = {() => setCurrency("USD")}>USD</button>
        <button onClick = {() => setCurrency("CAD")}>CAD</button>
            <pre>{JSON.stringify(data , null , 2)}</pre>
        
        </div>
    )
}

export default Exchange
