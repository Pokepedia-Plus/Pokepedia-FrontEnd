import React, { useState, useEffect } from "react";
import PokemonModal from "./PokemonModals";
import SearchBar from "./Searchbar";
import supabase from "./config/supabaseClient";

export default function POP() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("id");

  useEffect(() => {
    const fetchPokemonList = async () => {
      let { data: pokemons } = await supabase
        .from("pokemon")
        .select(
          "id, name, types, height, moves, dreamworld_sprite, stats, weight"
        )
        .order("pokemon_id");
      setPokemonList(pokemons);
      const pokemonListByName = {};
      pokemons.forEach((pokemon) => {
        let typesParse = JSON.parse(pokemon.types);
        let statsParse = JSON.parse(pokemon.stats);
        let movesPARSE = JSON.parse(pokemon.moves);
        pokemonListByName[pokemon.name] = {
          ...pokemon,
          types: typesParse,
          stats: statsParse,
          moves: movesPARSE,
        };
      });

      setPokemonDetails(pokemonListByName);
    };
    fetchPokemonList();
  }, []);

  const filteredPokemonList = pokemonList
    .filter((pokemon) =>
      searchText
        ? pokemon.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          pokemon.id.toString().includes(searchText.toLowerCase())
        : true
    )
    .sort((pokemon1, pokemon2) =>
      sortOrder === "name"
        ? pokemon1.name.localeCompare(pokemon2.name)
        : pokemon1.id - pokemon2.id
    );

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <section className="collection">
        {filteredPokemonList.map((pokemonData) => (
          <PokemonModal
            key={pokemonData.id}
            pokemonData={pokemonData}
            pokemonDetails={pokemonDetails}
          />
        ))}
      </section>
    </div>
  );
}
