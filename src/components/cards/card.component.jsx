import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return <div className="card-container">{props.monster.name}</div>;
};
