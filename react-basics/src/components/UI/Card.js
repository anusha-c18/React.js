import "./Card.css";
import React from "react";

function Card(props) {
  const classes = "card " + props.className;
  // this adds all the classes of the children that use the card custom element
  return <div className={classes}>{props.children}</div>;
}

// props.children consists of the body of the card element used in the other files

export default Card;
