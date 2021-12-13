"use strict";

async function getInfoPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const objectResults = await response.json();
    const arrayPokemonsUrl = objectResults.results.map(
        (pokemon) => pokemon.url
    );

    const arrayPromises = arrayPokemonsUrl.map(async (url) => {
        const response = await fetch(url);
        const objectResults = await response.json();
        return objectResults;
    });

    const arrayOfObjectsPokemons = await Promise.all(arrayPromises);

    console.log(arrayOfObjectsPokemons);
}

getInfoPokemons();
