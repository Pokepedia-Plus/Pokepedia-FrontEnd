import React, { useState, useEffect } from "react";
import { colorTypeGradients } from "./PokeTypeColors";

export default function PokemonModal({ pokemonData, pokemonDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [showMoves, setShowMoves] = useState(false);

  const currPokemonDetails = pokemonDetails[pokemonData.name]

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  if (!currPokemonDetails) return null;
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleShowMoves = () => {
    setShowMoves(!showMoves);
  };

  let finalColor;
console.log(currPokemonDetails.types.length)
  if (currPokemonDetails.types.length === 2) {
    finalColor = colorTypeGradients(
      currPokemonDetails.types[0],
      currPokemonDetails.types[1],
      currPokemonDetails.types.length
    )
    console.log(finalColor)
  } else {
    finalColor = colorTypeGradients(
      currPokemonDetails.types[0],
      currPokemonDetails.types[0],
      currPokemonDetails.types.length
      
    )
    console.log(finalColor)
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
          <div className="card-top">
            {/* <h1>#{currPokemonDetails.id}</h1> */}
            <p>HP: {currPokemonDetails.stats[5].base_stat}</p>
            <img
              src="https://www.svgheart.com/wp-content/uploads/2022/08/simple-heart_464-430-min.png"
              width={"20px"}
            ></img>
          </div>

          <img
            src={currPokemonDetails.dreamworld_sprite}
            className={"image"}
          ></img>
          <h1>{pokemonData.name}</h1>
          <p className="type">
            {" "}
            {currPokemonDetails.types.map((type) => type).join(", ")}
          </p>
        </div>
        <div>
          {showModal && (
            <div className="modal">
              <div></div>
              <div
                className="modal-content"
                style={{
                  background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
                }}
              >
                <div className="info-left">
                  <p>ID: {currPokemonDetails.id}</p>
                  <h2>{currPokemonDetails.name}</h2>
                  <img
                    src={
                      currPokemonDetails.dreamworld_sprite
                    }
                    className={"image"}
                  ></img>
                  <p>Height: {currPokemonDetails.height}</p>
                </div>
                <div className="info-right">
                  <h1>abilities</h1>
                  {/* <div className="abilities-holder">
                    <ul className="abilities-ul">
                      {currPokemonDetails.abilities.map((ability, index) => (
                        <li className="list-ability" key={index}>
                          {ability.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  <h1>base stats</h1>
                  <div className="stats-holder">
                    {currPokemonDetails.stats.map((stat) => (
                      <div className="stat-box" key={stat.name}>
                        <div className="bar-text">
                          {stat.name}: {stat.base_stat}
                        </div>
                        <div className="bar-container">
                          <div
                            className="bar"
                            style={{
                              width: `${stat.base_stat}px`,
                              backgroundColor:
                                stat.base_stat < 150 ? "green" : "red",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <h1>Moves:</h1>
                  <div className="moves-set">
                    {currPokemonDetails.moves
                      .slice(0, showMoves ? undefined : 4)
                      .map((move, index) => (
                        <p className="moves" key={index}>
                          {move}
                        </p>
                      ))}
                  </div>
                  {currPokemonDetails.moves.length > 4 && (
                    <button onClick={toggleShowMoves}>
                      {showMoves ? "Hide Moves" : "Show More Moves"}
                    </button>
                  )}
                </div>
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