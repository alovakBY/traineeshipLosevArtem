"use strict";

async function getPokemons() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const objectResults = await response.json();
        console.log(objectResults.results);
    } catch (error) {
        console.error(error);
    }
}

getPokemons();
