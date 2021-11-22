import React from "react";

const Logo = (props) => {
    const { appName } = props;
    return (
      <header>
        <h1>Welcome to {appName}</h1>
        <img onClick={props.onClick} alt="pokedex" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
      </header>
    );
  };
  export default Logo ;