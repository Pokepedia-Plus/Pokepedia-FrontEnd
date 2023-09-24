import React, { useState, useEffect } from "react";
import PokemonModal from "./PokemonModals";
import SearchBar from "./Searchbar";
import supabase from "./config/supabaseClient";

export default function POP() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("pokemon_id");
  const [genNum,setGenNum] = useState("")

  useEffect(() => {
    const fetchPokemonList = async () => {
      let { data: pokemons } = await supabase
        .from("pokemon")
        .select(
          "pokemon_id, name, types, height, moves, dreamworld_sprite, stats, weight, gen, front_sprite"
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

  const maxGenerationNumber = 2;

  const filteredPokemonList = pokemonList
    .filter((pokemon) =>
      searchText
        ? pokemon.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          pokemon.pokemon_id.toString().includes(searchText.toLowerCase())
        : true
    )
    .filter((pokemon) => {
      // Add conditions to filter Pokémon by generation (up to Generation 9)
      if (genNum === "1") {
        return pokemon.pokemon_id <= 151; // Include Pokémon from Generation 1 (National Pokédex numbers 1 to 151)
      } else if (genNum === "2") {
        return pokemon.pokemon_id >= 152 && pokemon.pokemon_id <= 251; // Include Pokémon from Generation 2 (National Pokédex numbers 152 to 251)
      } else if (genNum === "3") {
        return pokemon.pokemon_id >= 252 && pokemon.pokemon_id <= 386; // Include Pokémon from Generation 3 (National Pokédex numbers 252 to 386)
      } else if (genNum === "4") {
        return pokemon.pokemon_id >= 387 && pokemon.pokemon_id <= 493; // Include Pokémon from Generation 4 (National Pokédex numbers 387 to 493)
      } else if (genNum === "5") {
        return pokemon.pokemon_id >= 494 && pokemon.pokemon_id <= 649; // Include Pokémon from Generation 5 (National Pokédex numbers 494 to 649)
      } else if (genNum === "6") {
        return pokemon.pokemon_id >= 650 && pokemon.pokemon_id <= 721; // Include Pokémon from Generation 6 (National Pokédex numbers 650 to 721)
      } else if (genNum === "7") {
        return pokemon.pokemon_id >= 722 && pokemon.pokemon_id <= 809; // Include Pokémon from Generation 7 (National Pokédex numbers 722 to 809)
      } else if (genNum === "8") {
        return pokemon.pokemon_id >= 810 && pokemon.pokemon_id <= 905; // Include Pokémon from Generation 8 (National Pokédex numbers 810 to 898)
      } else if (genNum === "9") {
        return pokemon.pokemon_id >= 906; // Include Pokémon from Generation 9 (National Pokédex numbers greater than 898)
      }
      return true;
    })
    .sort((pokemon1, pokemon2) =>
      sortOrder === "name"
        ? pokemon1.name.localeCompare(pokemon2.name)
        : pokemon1.pokemon_id - pokemon2.pokemon_id
    );

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        genNum={genNum}
        setGenNum={setGenNum}
      />
      <section className="collection">
        {filteredPokemonList.map((pokemonData) => (
          <PokemonModal
            key={pokemonData.pokemon_id}
            pokemonData={pokemonData}
            pokemonDetails={pokemonDetails}
          />
        ))}
      </section>
    </div>
  );
}
