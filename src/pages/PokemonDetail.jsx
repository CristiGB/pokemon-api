import React from 'react';
import { useParams } from "react-router-dom";
import useGetPokemons from '../hooks/useGetPokemons';


const otherImages = 'https://raw.githubusercontent.com/anchetaWern/pokeapi-json/master/data/v1/media/img/'; //1.png

function Pokemon({API}) {
  let { id } = useParams();
  let pokemon = useGetPokemons(`${API}/${id}`);

  return (
    <div className='card-container'>
      <h3 className="pokemon__name">{pokemon.name}</h3>
      <figure>
        <img src={`${otherImages}${id}.png`} alt="pokemon image" />
      </figure>

      <h4 className="pokemon__numero"># {id}</h4>

      <p className="pokemon__experience">Base de experiencia: {pokemon.base_experience}</p>
      <div className="pokemon__type"><p>Types:</p>
        {pokemon.types?.map(type => (
          <p className="type__tag" key={`${id}${type.type.name}`}>{type.type.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Pokemon