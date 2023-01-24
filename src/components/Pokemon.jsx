import React from 'react';
import { Link } from "react-router-dom";
import useGetPokemons from '../hooks/useGetPokemons';
import '../styles/Pokemon.css'

const images = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'; //001.png
const otherImages = 'https://raw.githubusercontent.com/anchetaWern/pokeapi-json/master/data/v1/media/img/'; //1.png

function Pokemon({pokemon}) {
    const pokemonDetail =  useGetPokemons(pokemon.url)
    return (
        <Link to={`/Pokemon/${pokemonDetail.id}`}>
            <div className='pokemon'>
                <figure>
                    <img className="pokemon_image" src={`${otherImages}${pokemonDetail?.id}.png`} alt="pokemon image" />
                </figure>
                <p className="pokemon__name">{pokemon.name}</p>
                
            </div>
        </Link>   
    )
}

export default Pokemon