"use strict";

async function getPokemonDetails(pokemonName) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const result = await response.json();
        console.log(result);
    } catch {
        console.error(`Покемон, по имени ${pokemonName} не найден.`);
    }
}

getPokemonDetails(`bulbasaur`);
