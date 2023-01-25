import React from 'react';
import { HashRouter , Routes, Route} from 'react-router-dom';
import Layout from '../templates/Layout';
import PokemonList from '../pages/PokemonList';
import PokemonDetail from '../pages/PokemonDetail'

const API = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          
          <Route index element={<PokemonList API={API}/>} />
          <Route path="pokemon/:id" element={<PokemonDetail API={API}/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
