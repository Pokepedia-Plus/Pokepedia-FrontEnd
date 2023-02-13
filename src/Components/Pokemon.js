import React, { useState, useEffect } from "react";
import PokemonModal from "./PokemonModals"

export default function POP() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [currPokemonName, setCurrPokemonName] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        data.results.map((poke) => setCurrPokemonName(poke.name));
      });
  }, []);

  useEffect(() => {
    if (currPokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${currPokemonName}`)
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
