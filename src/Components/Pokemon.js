import React, { useState, useEffect } from "react";
import PokemonModal from "./PokemonModals"

export default function POP() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [currPokemonName, setCurrPokemonName] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/pokemons")
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data);
        data.map((poke) => setCurrPokemonName(poke.name));
      });
  }, []);

  useEffect(() => {
    if (currPokemonName) {
      fetch(`http://localhost:4000/pokemonsData?name=${currPokemonName}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonDetails((prevState) => ({
            ...prevState,
            [currPokemonName]: data,
          }));
        });
    }
  }, [currPokemonName]);

  return (
    <div>
      <section className="collection">
        {pokemonList.map((pokemonData) => (
          <PokemonModal
            key={pokemonData.name}
            pokemonData={pokemonData}
            pokemonDetails={pokemonDetails}
          />
        ))}
      </section>
    </div>
  );
}
