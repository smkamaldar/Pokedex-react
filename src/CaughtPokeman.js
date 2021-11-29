import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const { date } = props;
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput,setPokemonNameInput]=useState("");
  const handleInputChange =(e)=>{
      setPokemonNameInput(e.target.value);
  };
  // it adds to the caught state
  const catchPokemon = () => {
    // setCaught(caught.concat(pokemonNameInput));
    setCaught([...caught,pokemonNameInput]);
  };
  // const GetRandom = () => {
  //   const animals = ["Eevee", "Sprearow", "Ditto", "Butterfree"];
  //   const random = Math.floor(Math.random() * animals.length);
  //   return animals[random];
  // };

  return (
    <div>
      <p>Caught {caught.length} Pkeman on {date}</p>
      <ul>
        {caught.map((animal) => {
          return <li>{animal}</li>;
        })}
      </ul>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
      <button onClick={catchPokemon}> catch Pokemon</button>
    </div>
  );
};
export default CaughtPokemon;

/**Open the pokedex React application and open the CaughtPokemon.js file.
Create a new state variable with useState. It should be named caught and be initialised to 0
Within the JSX, there should be a "hard-coded" number 0. Replace it with your new caught state.
Add a button to the component with an onClick handler that calls a function called catchPokemon.
Create the catchPokemon function and have it update the caught state so that it is increased by 1 on each click.
Click here if you are stuck.
Write down the things that will happen when you click the button. Compare your list with another trainee and discuss.
Click here for a hint. */