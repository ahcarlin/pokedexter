import { useEffect, useState } from 'react';
import pokeball from './pokeball.svg'
import './App.css';

const Pokedex = require("pokeapi-js-wrapper")

function App() {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const P = new Pokedex.Pokedex()
  const titleize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }
  useEffect(() => {
    if (loading) {
      P.getPokemonByName("eevee")
        .then(function(response) {
          setPokemon(response)
          setLoading(false)
          console.log(response)
        })
    }
  })
  return (
    <div className="App">
      <h1>Pokemon!</h1>
      {loading
        ? <img src={pokeball} className="App-logo" alt="pokeball"></img>
        : <h2>{titleize(pokemon.name)}</h2>
      }
      <footer>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</footer>
    </div>
  );
}

export default App;
