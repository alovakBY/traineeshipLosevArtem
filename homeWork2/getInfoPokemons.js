"use strict";

async function getInfoPokemons() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const objectResults = await response.json();
    const arrayOfPromises = objectResults.results.map(async (dataItem) => {
      const responsePokemon = await fetch(dataItem.url);
      return await responsePokemon.json();
    });
    const infoAboutPokemons = await Promise.all(arrayOfPromises);
    console.log(infoAboutPokemons);
  } catch (error) {
    console.error(error);
  }
}

getInfoPokemons();
