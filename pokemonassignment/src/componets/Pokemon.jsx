import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = props => {

    const [allPokemon, setAllPokemon] = useState([{
        name: "",
        url: ""
    }]);

    const api = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log(res.data.results);
                setAllPokemon(res.data.results);
                console.log(allPokemon);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <h1>Pokemon</h1>
            {
                allPokemon.map((e, key) =>
                    <p key={key} >name: {e.name}</p>
                )
            }
            <button onClick={api} >Get All PokeMane</button>
        </>
    )
}

export default Pokemon;