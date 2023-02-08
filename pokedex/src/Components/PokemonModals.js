import React, { useState, useEffect } from "react";
import { colorTypeGradients } from "./PokeTypeColors";

export default function PokemonModal({ pokemonData, pokemonDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [showMoves, setShowMoves] = useState(false);

  const currPokemonDetails = pokemonDetails[pokemonData.name];
  if (!currPokemonDetails) return null;
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleShowMoves = () => {
    setShowMoves(!showMoves);
  };
  const getTypeClass = () => {
    if (currPokemonDetails.types.length === 2) {
      return `${currPokemonDetails.types[0].type.name}`;
    } else {
      return `type-gradient-${currPokemonDetails.types[0].type.name}-${currPokemonDetails.types[1].type.name}`;
    }
  };

  let finalColor;

  if (currPokemonDetails.types.length === 2) {
    finalColor = colorTypeGradients(
      currPokemonDetails.types[0].type.name,
      currPokemonDetails.types[1].type.name,
      currPokemonDetails.types.length
    );
  } else {
    finalColor = colorTypeGradients(
      currPokemonDetails.types[0].type.name,
      currPokemonDetails.types[0].type.name,
      currPokemonDetails.types.length
    );
  }

  return (
    <>
      <div>
        <div
          onClick={toggleModal}
          className={`btn-modal`}
          style={{
            background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
          }}
        >
          <h1>#{currPokemonDetails.id}</h1>
          <img
            src={currPokemonDetails.sprites.other.dream_world.front_default}
            className={"image"}
          ></img>
          <h1>{pokemonData.name}</h1>
          <p>
            Type:{" "}
            {currPokemonDetails.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
        <div>
          {showModal && (
            <div className="modal">
              <div className={`overlay`}></div>
              <div
                className="modal-content"
                style={{
                  background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
                }}
              >
                <h2>Hello {currPokemonDetails.name}</h2>
                <p>ID: {currPokemonDetails.id}</p>
                <p>Height: {currPokemonDetails.height}</p>
                <p>
                  HP: {currPokemonDetails.stats[5].base_stat} Attack:{" "}
                  {currPokemonDetails.stats[4].base_stat} | Defense:{" "}
                  {currPokemonDetails.stats[3].base_stat} | Special Attack:{" "}
                  {currPokemonDetails.stats[2].base_stat} | Special Defense:{" "}
                  {currPokemonDetails.stats[1].base_stat} | Speed:{" "}
                  {currPokemonDetails.stats[0].base_stat}
                </p>
                <p>Moves:</p>
                <div style={{ height: "200px", overflow: "auto" }}>
                  {currPokemonDetails.moves
                    .slice(0, showMoves ? undefined : 4)
                    .map((move, index) => (
                      <p key={index}>{move.move.name}</p>
                    ))}
                </div>
                {currPokemonDetails.moves.length > 4 && (
                  <button onClick={toggleShowMoves}>
                    {showMoves ? "Hide Moves" : "Show More Moves"}
                  </button>
                )}
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
