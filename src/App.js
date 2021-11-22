import Logo from "./logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokeman";




function App() {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();

  const logWhenClicked = () =>{
    console.log("Im a Pokedex");
  };
  return (
    <div>
      <Logo onClick={logWhenClicked} appName = "Elmira's Pokedex" />
      <BestPokeman abilities={abilities}/>
      <CaughtPokemon date= {date}/>
    </div>
  );
}

export default App;

/*
Open the pokedex React application and open the Logo.js file.
Copy and paste the logWhenClicked function from the Logo component to the App component.
Pass the logWhenClicked function reference as a prop to the Logo component. (Hint: look at the ClickLoggerApp component above for an example).
In the Logo component change the onClick prop so that it passes props.handleClick. (Hint: look at the FancyButton component above for an example). |
In a group of 2 - 3 trainees, discuss what you think will happen when you click the logo image now. Can you explain why?
Report back to the rest of the class what you thought was going to happen and why.
 */

