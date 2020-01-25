import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Header from './components/Header'
import Sider from './components/Sider'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    const url = 'https://api.exchangeratesapi.io/latest?base=USD'
    axios.get(url)
      .then(res => {
        setCurrencies(res.data)
      })
  }, [])



  return (
    <div className="App">
      {console.log(currencies)}
      <Header />
      <Sider />
      <Main />
      <Footer />

      {/* <main></main>
      <Route exact path='/'  ><Heroes heroes={heroes} /></Route>
       <Route exact path='/heros/:id' component={match => (<Profile match={match} />)} /> we are calling a profile from the route */}

      {/*  <header>
    <div class="filler">Header Content</div>
  </header>

  <section>
    <div class="filler">Section Content</div>
  </section>

  <aside>
    <div class="filler">Aside Content</div>
  </aside>

  <footer>
    <div class="filler">Footer Content</div>
  </footer> */}

    </div>
  );







}

export default App;
