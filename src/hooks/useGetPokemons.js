import { useEffect, useState } from "react";
import axios from 'axios';

const useGetPokemons = (API) => {
    const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = async() => {
		const response = await axios(API);
		setPokemons(response.data);
	};
	
    return pokemons;
};

export default useGetPokemons;