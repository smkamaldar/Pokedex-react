import React from "react";

const BestPokeman = (props) => {
  // props.abilities
    const { abilities } = props;
    return (
      <div>
        <p>My favorite pokeman is Squirtle</p>
        <ul>
        {abilities.map((item, index)=><li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };
  export default BestPokeman;