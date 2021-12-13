"use strict";

async function getInfoPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const objectResults = await response.json();
    const arrayPokemonsUrl = objectResults.results.map(
        (pokemon) => pokemon.url
    );

    const arrayPromises = arrayPokemonsUrl.map((url) => {
        fetch(url)
            .then((dataItem) => dataItem.json())
            .then((data) => console.log(data));
    });

    // const pokemonDetailedList = await Promise.all(arrayPromises);

    // console.log(pokemonDetailedList);
}

getInfoPokemons();
