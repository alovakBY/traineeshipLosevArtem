"use strict";

async function getDetailedInfoPokemon(pokemon) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        const objectResults = await response.json();
        console.log(objectResults);
    } catch {
        console.error(`Покемон, по имени ${pokemon} не найден.`);
    }
}

getDetailedInfoPokemon(`bulbasaur`);

getDetailedInfoPokemon("charmander");
