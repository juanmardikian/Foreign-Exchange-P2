import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Header from './components/Header'
import Sider from './components/Sider'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [currencies, setCurrencies] = useState(null)

  // useEffect(() => {
  //   const url = 'https://api.exchangeratesapi.io/latest?base=USD'
  //   axios.get(url)
  //     .then(res => {
  //       setCurrencies(res.data)
  //     })
  // }, [])

function changeCurrency(e){
const coin = e.currentTarget.dataset.name.toUpperCase()
handleRequest(coin)
}


function handleRequest(coin){
  let url =''
  if (coin != undefined){
    url = `https://api.exchangeratesapi.io/latest?base=${coin}`
  } else {
    url = `https://api.exchangeratesapi.io/latest`
    currencies.rates.EUR = 1
    console.log(currencies.rates.EUR)
  }
  axios.get(url)
    .then(res => {
      setCurrencies(res.data)
      console.log(res.data)
      
    })
}



  return (
    <div className="App">
      <Header />
      <Sider changeCurrency={changeCurrency}/>
      <Main currencies={currencies} />
      <Footer />

 

    </div>
  );







}

export default App;
