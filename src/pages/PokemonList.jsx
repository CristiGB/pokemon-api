import {useEffect, useState} from 'react';
import axios from 'axios';
import useGetPokemons from '../hooks/useGetPokemons';
import Pokemon from '../components/Pokemon';
import '../styles/PokemonList.css'


function PokemonList({API}) {
    const [pokemons, setPokemons] = useState([])
    const [pagina, setPagina] = useState(0)

    useEffect(() => {
      getPokemons();
    }, [pagina]);

    const getPokemons = async() => {
      const response = await axios(`${API}?offset=${pagina*20}&limit=20`);
      setPokemons(response.data.results);
    };
    
    function previousPage(){
      return pagina >= 1 ? setPagina(pagina-1): false
    }
    function nextPage(){
      setPagina(pagina+1)
    }

   

    return (     
		<div className="pokeList-container">
        <div className="pokemonsList">
          {pokemons?.map((pokemon, index) => <Pokemon pokemon={pokemon} key={`${index}-${pokemon.name}`}/>)}	
        </div>

        <ul className="pagination">
            <li className="page-item">
              <a className={`page-link ${pagina === 0 ? 'isdisable': 'prevclick'}`} href="#" aria-label="Previous" onClick={previousPage}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">{pagina + 1 }</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next" onClick={nextPage}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
        </ul>

    </div>
    )
}

export default PokemonList