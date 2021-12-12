"use strict";

async function getPokemon(pokemon) {
  console.log(pokemon);
  const arr = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      img.src = data.sprites.other.home.front_default;
    })
    .catch(() => console.log(`Покемон, по имени ${pokemon} не найден.`));
}

getPokemon(`bulbasaur`);

getPokemon("charmander");

async function getInfoPokemons() {
  const jsonArrayPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  // console.log(jsonArrayPokemons);
  const responseObjectPokemons = await jsonArrayPokemons.json();
  const arrayPokemonsUrl = responseObjectPokemons.results.map(
    (pokemon) => pokemon.url
  );

  const arrPromises = arrayPokemonsUrl.map(async (url) => {
    const json = await fetch(url);
    const data = await json.json();
    return data;
  });

  const arr = await Promise.all(arrPromises);

  console.log(arr);
}

getInfoPokemons();
