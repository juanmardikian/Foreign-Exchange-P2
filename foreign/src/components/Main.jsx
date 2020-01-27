import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Main(props) {
    console.log(props.currencies)

    if (props.currencies ) {
        console.log(props.currencies.rates)
       
        return (
            <div>

                <div className="main">
                    <h1 className='diplayedCurrencies'>USD: {props.currencies.rates.USD === 1 ? props.currencies.rates.USD : props.currencies.rates.USD.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Euro Dollar: {props.currencies.rates.EUR === undefined ? 1 : props.currencies.rates.EUR.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>British Pound: {props.currencies.rates.GBP === 1 ? props.currencies.rates.GBP : props.currencies.rates.GBP.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Canadian Dollar: {props.currencies.rates.CAD === 1 ? props.currencies.rates.CAD : props.currencies.rates.CAD.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Swiss Franc: {props.currencies.rates.CHF === 1 ? props.currencies.rates.CHF : props.currencies.rates.CHF.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Japanese Yen: {props.currencies.rates.JPY === 1 ? props.currencies.rates.JPY : props.currencies.rates.JPY.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Australian Dollar: {props.currencies.rates.AUD === 1 ? props.currencies.rates.AUD : props.currencies.rates.AUD.toFixed(4)}</h1>
                    <h1 className='diplayedCurrencies'>Chinese Yuan: {props.currencies.rates.CNY === 1 ? props.currencies.rates.CNY : props.currencies.rates.CNY.toFixed(4)}</h1>
                </div>




            </div>
        )
    }
    else {
        return (
            <div className="main">

               

                    <h1 className='diplayedCurrencies'>{props.theImput} {props.selector1} = {props.calcResult && props.calcResult.toFixed(3)} {props.selector2}</h1>
                    {console.log(props.calcResult)}
                


            </div>
        )
    }





}


export default Main