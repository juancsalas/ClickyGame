import React from "react";
import "./style.css";

const GameCard = props => (
  <div className="card" onClick={props.characterSelect}>
      <img alt={props.image} id={props.id} data-id={props.name} src={require("../../assets/images/" + props.image)} />
  </div>
);

export default GameCard;  