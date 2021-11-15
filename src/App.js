import Logo from "./logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokeman";




function App() {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName = "Elmira's Pokedex" />
      <BestPokeman abilities={abilities}/>
      <CaughtPokemon date= {date}/>
    </div>
  );
}

export default App;
