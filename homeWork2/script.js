"use strict";

async function getPokemonArray() {
  const arr = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((err) => console.log(err));
  console.log(arr);
}

// getPokemonArray();

async function getPokemon(pokemon) {
  const arr = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => console.log(`Покемон, по имени ${pokemon} не найден.`));
}

// getPokemon("charizard");

async function getPokemonInfo() {
  const arr = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      console.log(a(data.results));
    })
    .catch((err) => console.log(err));
}

getPokemonInfo();

function a(arr) {
  return arr.map((el) => {
    return el.url;
  });
}
