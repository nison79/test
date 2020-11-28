import React , { useState }from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

const fetchExchange = async (currency) => {
    const response  = await fetch(`https://api.ratesapi.io/api/latest?base=${currency}`)
    const data = await response.json();
    return data;
}

const Exchange = () => {
    const [currency , setCurrency ] = useState("EUR")

    const { status , data  } = useQuery( [currency] , fetchExchange );
        if(status === "loading") return <div>loading...</div>;
        if(status === "error" ) return <div>error!</div>;
        

    return (
        <Home>
            <div className="text">
            <h1>Showing Currency {currency}</h1>
                <button onClick = {() => setCurrency("EUR")}>EUR</button>
                <button onClick = {() => setCurrency("USD")}>USD</button>
                <button onClick = {() => setCurrency("CAD")}>CAD</button>
            </div>
            <pre>{JSON.stringify(data , null , 2)}</pre>
        
        </Home>
    )
}

const Home = styled.div `
    display:flex;
    align-items:center;
    background-color:#F396B1;
    button {
    padding: 5px 12px;
    margin-top:1rem;
    width:30%;
    color: #F396B1;
    font-size: 2rem;
    font-weight: 700;
    background-color: black ;
    border: 0px;
    border-radius: 3px;
    appearance: none;
    cursor: pointer;
    &:hover {
        background-color:white;
        color:black;
    }

    }
    .text {
        display:flex;
        flex-direction:column;
        align-items:center;

    }
`

export default Exchange
