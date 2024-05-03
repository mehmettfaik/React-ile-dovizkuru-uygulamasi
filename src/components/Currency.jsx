import React, { useState } from 'react'
import '../css/currency.css'
import { BsCurrencyExchange } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_JmBCOyBicRdxaRhflGRnEXmiEDwI3pw4RhwXGjaz"


export default function Currency() {

const [amount, setAmount] = useState();
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('TRY');
const [result, setResult] = useState(0);


const exchange = async () => {
   const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
   const result = (response.data.data[toCurrency] * amount).toFixed(2);
   setResult(result);
}

  return (
    <div className='currency-div'>
        <div style={{backgroundColor: '#7ABA78' , color: 'black', width:'100%', textAlign: 'center', borderRadius:'5px'}}>
            
             <h3> <MdOutlineCurrencyExchange style={{ fontSize: '25px' , marginRight:'15px'}}/> DÖVİZ KURU UYGULAMASI</h3>
            
        </div>

        <div style={{marginTop: '55px'}}>
            <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number" className='amount' />
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>
        
        <BsCurrencyExchange style={{ fontSize: '25px' , marginRight:'15px'}}/>

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>

        <input value={result} onChange={(e) => setResult(e.target.value)} readOnly type="number" className='result' />
        </div>
        <div>
            <button 
            onClick={exchange}
            className='exchange-button'>Hesapla</button>
        </div>

    </div>
  )
}
