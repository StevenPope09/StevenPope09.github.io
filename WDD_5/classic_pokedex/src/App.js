import React, { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Pokedex from './components/pages/Pokedex';
import Collection from './components/pages/Collection';
import Home from './components/pages/Home';
import PokemonDetail from './components/pages/PokemonDetail';

//import { Container } from 'react-bootstrap';

function App() {

  useEffect(() => {
    if (localStorage.getItem("collection") == null) {
      localStorage.setItem("collection", JSON.stringify([]));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header pgTitle="Classic Pokedex" />
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" exact component={Pokedex} />
        <Route path="/collection/" component={Collection} />
        <Route path="/pokemon/:idOrName" component={PokemonDetail} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
