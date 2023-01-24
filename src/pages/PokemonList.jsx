import React from 'react';
import useGetPokemons from '../hooks/useGetPokemons';
import Pokemon from '../components/Pokemon';
import '../styles/PokemonList.css'

function PokemonList({API}) {
    let pokemons = useGetPokemons(`${API}?offset=0&limit=20`);
    pokemons = pokemons.results
    return (     
		<div className="pokemonsList">
            {pokemons?.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index}/>)}	
		</div>
    )
}

export default PokemonList