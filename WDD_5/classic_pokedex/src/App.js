import React,{ useState}from 'react';
import Header from './components/Header'
import Pokedex from './components/pages/Pokedex'
import Search from './components/Search'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <div className="App">
      <Header pgTitle="Classic Pokedex" />
    
      <Pokedex />
    </div>
  );
}

export default App;
