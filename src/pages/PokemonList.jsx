import {useState} from 'react';
import useGetPokemons from '../hooks/useGetPokemons';
import Pokemon from '../components/Pokemon';
import '../styles/PokemonList.css'

function PokemonList({API}) {
    const [pagina, setPagina] = useState(0)
    let pokemons = useGetPokemons(`${API}?offset=${pagina}&limit=20`);
    pokemons = pokemons.results

    // function useNextPage(){
    //   setPagina(pagina+1)
    //   pokemons = useGetPokemons(`${API}?offset=${pagina}&limit=20`);
    // }
    
    // function usePreviousPage(){
    //   return pagina >= 1 ? setPagina(pagina-1): false
    // }
   

    return (     
		<div className="pokeList-container">
        <div className="pokemonsList">
          {pokemons?.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index}/>)}	
        </div>

        {/* <ul className="pagination">
            <li className="page-item">
              <a className={`page-link ${pagina == 0 ? 'isdisable': 'prevclick'}`} href="#" aria-label="Previous" onClick={usePreviousPage}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">{pagina + 1 }</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next" onClick={useNextPage}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
        </ul> */}

    </div>
    )
}

export default PokemonList