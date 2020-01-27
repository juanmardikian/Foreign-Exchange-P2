import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Header from './components/Header'
import Sider from './components/Sider'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [currencies, setCurrencies] = useState('')

  const [selector1, setSelector1] = useState('USD')
  const [selector2, setSelector2] = useState('EUR')
  const [calcResult, setCalcResult] = useState(calculator())  // we try to calculate the results for the header
  const [theImput, setTheImput] = useState(1)  // whe have to set the state at 1, or it will give us 0 as result when we press the search button



  function changeCurrency(e) {
    const coin = e.currentTarget.dataset.name.toUpperCase()
    handleRequest(coin)
  }


  function selectorA(e) {
    const coin1 = e.currentTarget.value
    console.log(coin1)

    setSelector1(coin1)
    calculator()
    
  }

  function selectorB(e) {
    const coin2 = e.currentTarget.value
    console.log(coin2)

    setSelector2(coin2)
    calculator()
    
  }

function clickSubmit()
{
  setCurrencies(null)
  calculator()
}

  //this function will get the first selected and the second one
  function calculator() {
    // e.preventDefault()
    let url = `https://api.exchangeratesapi.io/latest?base=${selector1}&symbols=${selector2}`

    axios.get(url)
      .then(res => {
        setCalcResult(theImput * res.data.rates[selector2])

        console.log(res.data.rates[selector2])
        console.log(theImput * res.data.rates[selector2])
        


      })
  }

  // function to calculate the number in the imput to submit
  function updateTheVolumeOfCurrency(e) {
    const headerImput = e.currentTarget.value
    if (headerImput == '' || headerImput == undefined || headerImput == null || isNaN(headerImput)) {
      setTheImput(1)
    } else {
      setTheImput(headerImput)
      calculator()
    }


  }



  // This function is for the icons on the sider
  function handleRequest(coin) {

    let url = `https://api.exchangeratesapi.io/latest?base=${coin}`

    axios.get(url)
      .then(res => {
        setCurrencies(res.data)
        console.log(res.data)



      })
  }



  return (
    <div className="App">
      <Header selectorA={selectorA} selectorB={selectorB} calculator={clickSubmit} updateTheVolumeOfCurrency={updateTheVolumeOfCurrency} />
      <Sider changeCurrency={changeCurrency} />
      <Main currencies={currencies} calcResult={calcResult} theImput={theImput} selector1={selector1} selector2={selector2} />
      <Footer />
    </div>
  );







}

export default App;
