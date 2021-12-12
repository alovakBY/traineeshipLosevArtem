"use strict";

async function getArrayPokemons() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const objectResults = await response.json();
  const arrayInfoPokemons = objectResults.results;
  const arrayPokemons = arrayInfoPokemons.map((pokemon) => pokemon.name);
  console.log(arrayPokemons);
}

getArrayPokemons();
