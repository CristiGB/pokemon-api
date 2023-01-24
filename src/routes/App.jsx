import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../templates/Layout';
import PokemonList from '../pages/PokemonList';
import PokemonDetail from '../pages/PokemonDetail'

const API = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="pokemon-api/" element={<Layout />} >
          
          <Route index element={<PokemonList API={API}/>} />
          <Route path="Pokemon/:id" element={<PokemonDetail API={API}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
